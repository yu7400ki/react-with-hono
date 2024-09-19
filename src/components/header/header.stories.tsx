import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/test";
import { Header } from "./header";

const meta = {
	title: "Components/Header",
	component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};

export const NavigateToHome: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const homeLink = canvas.getByRole("link", { name: /home/i });
		await userEvent.click(homeLink);
	},
};

export const NavigateToAbout: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const aboutLink = canvas.getByRole("link", { name: /about/i });
		await userEvent.click(aboutLink);
	},
};
