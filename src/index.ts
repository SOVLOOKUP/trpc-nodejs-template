import { trpcServer } from "@hono/trpc-server";
import { getWSConnectionHandler } from '@trpc/server/adapters/ws';
import { Hono } from "hono";
import { appRouter } from "./routes";
import { cors } from "hono/cors";
import { createContext } from "./context";
import { upgradeWebSocket } from "./ws";

const app = new Hono();

app.use(
  "/trpc/*",
  cors(),
);

app.use(
  "/trpc",
  upgradeWebSocket(getWSConnectionHandler({
    router: appRouter,
    createContext
  })),
);

app.use(
  "/trpc/*",
  trpcServer({
    router: appRouter,
    createContext
  }),
);

export default app
