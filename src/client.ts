import type { AppRouter } from './routes';
import { httpBatchLink, createWSClient, wsLink, createTRPCClient, splitLink, TRPCWebSocketClient } from '@trpc/client';
import superjson from 'superjson';

// @ts-ignore
if (!globalThis.WebSocket) {
    const { WebSocket } = await import("ws")
    // @ts-ignore
    globalThis.WebSocket = WebSocket
}

export const newClient = ({ host, secure, token }: { host: string, secure?: boolean, token?: string }) => {
    let wsClient: TRPCWebSocketClient
    return createTRPCClient({
        links: [
            splitLink<AppRouter>({
                condition: (op) => op.type === "subscription",
                true: wsLink<AppRouter>({
                    transformer: superjson,
                    client: new Proxy({} as TRPCWebSocketClient, {
                        get(_, p) {
                            if (!wsClient) {
                                wsClient = createWSClient({
                                    url: `ws${secure ? 's' : ''}://${host}/trpc?authorization=${token}`,
                                })
                            }
                            // @ts-ignore
                            return wsClient[p]
                        },
                    })
                }),
                false: httpBatchLink<AppRouter>({
                    transformer: superjson,
                    url: `http${secure ? 's' : ''}://${host}/trpc`,
                    headers: {
                        authorization: "Bearer " + token,
                    },
                }),
            })
        ]
    })
}