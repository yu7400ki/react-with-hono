import route from "@/route";
import { Hono } from "hono";

export type AppType = typeof route;
export default new Hono().route("/api", route);
