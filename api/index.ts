import route from "@/route";
import type { Fetcher } from "@cloudflare/workers-types";
import { Hono } from "hono";

type Bindings = {
	ASSETS: Fetcher;
};

export type AppType = typeof route;
export default new Hono<{ Bindings: Bindings }>()
	.route("/api", route)
	.notFound((c) => {
		return c.env.ASSETS.fetch(c.req.raw);
	});
