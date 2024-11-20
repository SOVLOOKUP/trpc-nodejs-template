import { TRPCError, initTRPC } from "@trpc/server";
import { ZodError } from "zod";
import { transformer } from "../transformer";
import { Context } from "../context";

export const t = initTRPC.context<Context>().create({
  transformer,
  errorFormatter(opts) {
    const { shape, error } = opts;
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.code === "BAD_REQUEST" && error.cause instanceof ZodError
            ? error.cause.flatten()
            : null,
      },
    };
  },
});

export const publicProcedure = t.procedure;
export const authedProcedure = publicProcedure.use((opts) => {
  if (opts.ctx.userId === null) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return opts.next();
});

export const router = t.router;
export const mergeRouters = t.mergeRouters;
