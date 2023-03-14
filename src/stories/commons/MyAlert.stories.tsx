/* eslint-disable react/function-component-definition */
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import MyAlert from "components/Commons/Molecules/MyAlert";

export default {
  title: "Commons/Molecules/MyAlert",
  component: MyAlert,
  argTypes: {
    value: {
      control: "text",
      defaultValue: "",
    },
    parentOpen: { control: "boolean", defaultValue: true },
  },
} as ComponentMeta<typeof MyAlert>;

/* eslint-disable react/jsx-props-no-spreading */
const Template: ComponentStory<typeof MyAlert> = (args) => (
  <MyAlert {...args} />
);

export const Primary = Template.bind({});
