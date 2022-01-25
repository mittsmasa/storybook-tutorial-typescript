import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Task, TaskProps } from "./Task";

export default {
  title: "Task",
  component: Task,
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: { id: "1", title: "Test Task", state: "TASK_INBOX" },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task!,
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task!,
    state: "TASK_ARCHIVED",
  },
};
