import build from "@hono/vite-build/cloudflare-pages";
import devServer from "@hono/vite-dev-server";
import adapter from "@hono/vite-dev-server/cloudflare";
import type { UserConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default {
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
} satisfies UserConfig;
