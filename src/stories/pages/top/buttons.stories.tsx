/* eslint-disable react/function-component-definition */
import Buttons from "components/Top/Organisms/Buttons";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

export default {
  title: "Pages/Top/Buttons",
  component: Buttons,
} as ComponentMeta<typeof Buttons>;

/* eslint-disable react/jsx-props-no-spreading */
const Template: ComponentStory<typeof Buttons> = (args) => <Buttons />;

export const Primary = Template.bind({});
