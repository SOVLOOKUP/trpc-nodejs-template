import { trpcServer } from "@hono/trpc-server";
import { Hono } from "hono";
import { appRouter } from "./routes";
import { cors } from "hono/cors";
import { createContext } from "./context";
import { serve } from '@hono/node-server'
import { logger } from 'hono/logger'
import { compress } from 'hono/compress'

const app = new Hono();

app.use(
  "/trpc/*",
  cors(),
);

app.use(
  "/trpc/*",
  trpcServer({
    router: appRouter,
    createContext
  }),
);

app.use(logger())
app.use(compress())

serve({
  fetch: app.fetch,
  port: 8787,
})
