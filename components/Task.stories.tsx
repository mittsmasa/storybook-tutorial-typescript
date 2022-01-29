import type { ComponentStoryObj } from "@storybook/react";
import { Task } from "./Task";

type Story = ComponentStoryObj<typeof Task>;

export default {
  component: Task,
};

const defaultTask: Task = {
  id: "1",
  title: "OK Test Task",
  state: "TASK_INBOX",
};

export const Default: Story = {
  args: { task: defaultTask },
};

export const Pinned: Story = {
  args: { task: { ...defaultTask, state: "TASK_PINNED" } },
};

export const Archived: Story = {
  args: { task: { ...defaultTask, state: "TASK_ARCHIVED" } },
};
