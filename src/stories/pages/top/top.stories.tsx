/* eslint-disable react/function-component-definition */
import Top from "pages/Top";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

export default {
  title: "Pages/Top/Top",
  component: Top,
} as ComponentMeta<typeof Top>;

/* eslint-disable react/jsx-props-no-spreading */
const Template: ComponentStory<typeof Top> = (args) => <Top />;

export const Primary = Template.bind({});
