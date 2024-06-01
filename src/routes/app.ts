import { observable } from '@trpc/server/observable';
import { router, publicProcedure } from './trpc';

export default router({
    base: publicProcedure.query(() => "helloword"),
    sub: publicProcedure.subscription(() => {

        let n = 0
        return observable((emit) => {
            let interval = setInterval(() => {
                emit.next(n)
                n++

                if (n === 4) {
                    emit.complete()
                    clearInterval(interval)
                }
            }, 1000)
        });
    })
})