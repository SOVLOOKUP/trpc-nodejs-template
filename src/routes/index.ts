import { mergeRouters } from './trpc';

import app from './app';

export const appRouter = mergeRouters(app)
export type AppRouter = typeof appRouter;