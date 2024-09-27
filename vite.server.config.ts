import build from "@hono/vite-build/cloudflare-workers";
import devServer from "@hono/vite-dev-server";
import adapter from "@hono/vite-dev-server/cloudflare";
import type { UserConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default {
	build: {
		copyPublicDir: false,
	},
	plugins: [
		build({
			entry: "api/index.ts",
			outputDir: "dist",
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
