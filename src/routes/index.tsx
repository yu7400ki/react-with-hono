import { client } from "@/libs/api";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	loader: async ({ abortController }) => {
		const res = await client.index.$get(
			{},
			{ init: { signal: abortController.signal } },
		);
		return await res.text();
	},
	component: Index,
});

function Index() {
	const msg = Route.useLoaderData();

	return (
		<div>
			<h3>{msg}</h3>
		</div>
	);
}
