/* eslint-disable react/function-component-definition */
import SignUpButton from "components/Top/Atoms/SignUpButton";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

export default {
  title: "Pages/Top/SignUpButton",
  component: SignUpButton,
} as ComponentMeta<typeof SignUpButton>;

/* eslint-disable react/jsx-props-no-spreading */
const Template: ComponentStory<typeof SignUpButton> = (args) => (
  <SignUpButton />
);

export const Primary = Template.bind({});
