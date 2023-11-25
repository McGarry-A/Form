import type { Meta, StoryObj } from "@storybook/vue3";

import FormStepper from "../components/FormStepper.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "FormStepper",
  component: FormStepper,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof FormStepper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
}