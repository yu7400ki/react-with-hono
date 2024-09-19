import build from "@hono/vite-build/cloudflare-pages";
import devServer from "@hono/vite-dev-server";
import adapter from "@hono/vite-dev-server/cloudflare";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
	return {
		plugins: [
			build({
				entry: "api/index.ts",
			}),
			devServer({
				adapter,
				entry: "api/index.ts",
			}),
			tsconfigPaths(),
		],
		server: {
			port: 5174,
		},
	};
});
