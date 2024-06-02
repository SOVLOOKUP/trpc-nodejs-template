import { getWSConnectionHandler } from '@trpc/server/adapters/ws';
import { MiddlewareHandler } from 'hono';

export const upgradeWebSocket = (onConnection: ReturnType<typeof getWSConnectionHandler>): MiddlewareHandler<any, string, {
    outputFormat: 'ws';
}> => async (c, next) => {
    const upgradeHeader = c.req.header('Upgrade')

    if (upgradeHeader !== 'websocket') {
        return await next()
    }

    const webSocketPair = new WebSocketPair()
    const client: WebSocket = webSocketPair[0]
    const server: WebSocket = webSocketPair[1]

    await onConnection({
        send: (msg: string) => {
            console.log(msg, server.readyState)
            server.send(msg)
        },
        // @ts-ignore
        readyState: server.readyState,
        // @ts-ignore
        on: (type, lis) => {
            if (type === "message") {
                // @ts-ignore
                server.addEventListener("message", (msg) => lis(msg.data))
            } else if (type === 'error') {
                // @ts-ignore
                server.addEventListener("error", (cause) => lis(cause.error))
            }
        },
        // @ts-ignore
        once: (type, fn) => {
            if (type === "close") {
                // @ts-ignore
                server.addEventListener("close", fn)
            }
        },
        close: (c, r) => {
            server.close(c, r?.toString())
        }
    }, c.req)

    server.accept()

    return new Response(null, {
        status: 101,
        webSocket: client,
    })
}
