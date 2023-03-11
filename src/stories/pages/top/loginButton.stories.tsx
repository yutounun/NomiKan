/* eslint-disable react/function-component-definition */
import LoginButton from "components/Top/Atoms/LoginButton";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

export default {
  title: "Pages/Top/LoginButton",
  component: LoginButton,
} as ComponentMeta<typeof LoginButton>;

/* eslint-disable react/jsx-props-no-spreading */
const Template: ComponentStory<typeof LoginButton> = (args) => <LoginButton />;

export const Primary = Template.bind({});
