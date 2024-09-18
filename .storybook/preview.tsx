import type { Preview } from "@storybook/react";
import {
	RouterProvider,
	createMemoryHistory,
	createRootRoute,
	createRouter,
} from "@tanstack/react-router";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		(Story) => {
			const router = createRouter({
				history: createMemoryHistory(),
				routeTree: createRootRoute({
					component: Story,
				}),
			});
			// @ts-ignore
			return <RouterProvider router={router} />;
		},
	],
};

export default preview;
