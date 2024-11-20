import type { AppRouter } from './routes';
import { httpBatchLink, createTRPCClient } from '@trpc/client';
import { transformer } from "./transformer";

export const newClient = ({ host, secure, token }: { host: string, secure?: boolean, token?: string }) => createTRPCClient({
    links: [
        httpBatchLink<AppRouter>({
            // @ts-ignore
            transformer,
            url: `http${secure ? 's' : ''}://${host}/trpc`,
            headers: {
                authorization: "Bearer " + token,
            },
        })
    ]
})
