import { Hono } from "hono";

const route = new Hono().get("/", (c) => {
	return c.text("Hello From Hono!");
});

export default route;
