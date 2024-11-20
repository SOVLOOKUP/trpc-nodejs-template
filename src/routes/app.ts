import { router, publicProcedure } from './trpc';

export default router({
    base: publicProcedure.query(() => "helloword")
})