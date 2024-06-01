import type { AppRouter } from './routes';
import { httpBatchLink, createWSClient, wsLink, createTRPCClient, splitLink } from '@trpc/client';
import superjson from 'superjson';

// @ts-ignore
if (!globalThis.WebSocket) {
    const { WebSocket } = await import("ws")
    // @ts-ignore
    globalThis.WebSocket = WebSocket
}

export const newClient = ({ host, secure, token }: { host: string, secure?: boolean, token?: string }) => {
    return createTRPCClient({
        links: [
            splitLink<AppRouter>({
                condition: (op) => op.type === "subscription",
                true: wsLink<AppRouter>({
                    transformer: superjson,
                    client: createWSClient({
                        url: `ws${secure ? 's' : ''}://${host}/trpc?authorization=${token}`,
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