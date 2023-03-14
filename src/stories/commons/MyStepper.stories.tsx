/* eslint-disable react/function-component-definition */
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import MyStepper from "components/Commons/Organisms/MyStepper";

export default {
  title: "Commons/Molecules/MyStepper",
  component: MyStepper,
  argTypes: {
    activeStep: {
      control: "number",
      defaultValue: 1,
    },
  },
} as ComponentMeta<typeof MyStepper>;

/* eslint-disable react/jsx-props-no-spreading */
const Template: ComponentStory<typeof MyStepper> = (args) => (
  <MyStepper {...args} />
);

export const Primary = Template.bind({});
