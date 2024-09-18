import { testClient } from "hono/testing";
import { describe, expect, it } from "vitest";
import route from "./route";

describe("GET /", () => {
	it("200が返ってくる", async () => {
		const client = testClient(route);
		const res = await client.index.$get();
		const body = await res.text();
		expect(res.status).toBe(200);
		expect(body).toBe("Hello From Hono!");
	});
});
