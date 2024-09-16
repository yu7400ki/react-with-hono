import { Hono } from "hono";

const app = new Hono().get("/", (c) => {
	return c.text("Hello From Hono!");
});

export type AppType = typeof app;
export default new Hono().route("/api", app);
