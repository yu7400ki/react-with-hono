import { composeStories } from "@storybook/react";
import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import * as stories from "./header.stories";

const { NavigateToHome, NavigateToAbout } = composeStories(stories);

describe("Header", () => {
	it("Home ページに遷移する", async () => {
		await NavigateToHome.run();
		const homeLink = screen.getByRole("link", { name: /home/i });
		expect(homeLink.ariaCurrent).toBe("page");
	});

	it("About ページに遷移する", async () => {
		await NavigateToAbout.run();
		const aboutLink = screen.getByRole("link", { name: /about/i });
		expect(aboutLink.ariaCurrent).toBe("page");
	});
});
