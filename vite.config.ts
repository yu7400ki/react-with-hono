import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import type { UserConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default {
	plugins: [TanStackRouterVite(), react(), tsconfigPaths()],
	server: {
		proxy: {
			"/api": {
				target: "http://localhost:5174",
				changeOrigin: true,
			},
		},
	},
} satisfies UserConfig;
