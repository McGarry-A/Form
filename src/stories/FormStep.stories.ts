import type { Meta, StoryObj } from "@storybook/vue3";

import FormStep from "../components/FormStep.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "FormStep",
  component: FormStep,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ["autodocs"],
  args: { stepNumber: 1, title: "Your Info" }, // default value
} satisfies Meta<typeof FormStep>;

export default meta;

type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Active: Story = {
  args: {
    isActive: true,
  },
};

export const Disabled: Story = {
  args: {
    isActive: false,
  },
};