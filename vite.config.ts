import build from "@hono/vite-build/cloudflare-pages";
import devServer from "@hono/vite-dev-server";
import adapter from "@hono/vite-dev-server/cloudflare";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
	if (mode === "client") {
		return {
			plugins: [react(), tsconfigPaths()],
			server: {
				proxy: {
					"/api": {
						target: "http://localhost:5174",
						changeOrigin: true,
					},
				},
			},
		};
	}
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
