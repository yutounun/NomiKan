/* eslint-disable react/function-component-definition */
import Explanation from "components/Top/Organisms/Explanation";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

export default {
  title: "Pages/Top/Explanation",
  component: Explanation,
} as ComponentMeta<typeof Explanation>;

/* eslint-disable react/jsx-props-no-spreading */
const Template: ComponentStory<typeof Explanation> = (args) => <Explanation />;

export const Primary = Template.bind({});
