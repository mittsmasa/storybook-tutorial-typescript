import { ComponentMeta, ComponentStory, ComponentStoryObj } from "@storybook/react";
import * as TaskStories from "./Task.stories";
import {TaskList} from "./TaskList";

type Story = ComponentStoryObj<typeof TaskList>;
export default {
  component: TaskList,
};


export const Default: Story = {
  // Shaping the stories through args composition.
  // The data was inherited from the Default story in task.stories.js.
  args: {
    tasks: [
      { ...TaskStories.Default.args!.task!, id: "1", title: "Task 1" },
      { ...TaskStories.Default.args!.task!, id: "2", title: "Task 2" },
      { ...TaskStories.Default.args!.task!, id: "3", title: "Task 3" },
      { ...TaskStories.Default.args!.task!, id: "4", title: "Task 4" },
      { ...TaskStories.Default.args!.task!, id: "5", title: "Task 5" },
      { ...TaskStories.Default.args!.task!, id: "6", title: "Task 6" },
    ],
  },
};

export const WithPinnedTasks: Story = {
    // Shaping the stories through args composition.
    // Inherited data coming from the Default story.
  args: {
    tasks: [...Default.args!.tasks!.slice(0, 5), { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" }],
  },
};

export const Loading: Story = {
  args: {
    tasks: [],
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    // Shaping the stories through args composition.
    // Inherited data coming from the Loading story.
    ...Loading.args,
    loading: false,
  },
};
