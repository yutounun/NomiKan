/* eslint-disable react/function-component-definition */
import StartButton from "components/Top/Atoms/StartButton";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

export default {
  title: "Pages/Top/StartButton",
  component: StartButton,
} as ComponentMeta<typeof StartButton>;

/* eslint-disable react/jsx-props-no-spreading */
const Template: ComponentStory<typeof StartButton> = (args) => <StartButton />;

export const Primary = Template.bind({});
