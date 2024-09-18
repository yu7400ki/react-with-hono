import build from "@hono/vite-build/cloudflare-pages";
import devServer from "@hono/vite-dev-server";
import adapter from "@hono/vite-dev-server/cloudflare";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
	if (mode === "server") {
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
	}
	return {
		plugins: [TanStackRouterVite(), react(), tsconfigPaths()],
		server: {
			proxy: {
				"/api": {
					target: "http://localhost:5174",
					changeOrigin: true,
				},
			},
		},
	};
});
