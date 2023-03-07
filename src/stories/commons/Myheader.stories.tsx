/* eslint-disable react/function-component-definition */
import MyHeader from "components/Commons/Organisms/MyHeader";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

export default {
  title: "Commons/Organisms/MyHeader",
  component: MyHeader,
  argTypes: {
    value: {
      control: "text",
    },
  },
} as ComponentMeta<typeof MyHeader>;

/* eslint-disable react/jsx-props-no-spreading */
const Template: ComponentStory<typeof MyHeader> = (args) => (
  <MyHeader {...args} />
);

export const NomiKan = Template.bind({});
NomiKan.args = {
  value: "NomiKan",
};

export const TotalAmount = Template.bind({});
TotalAmount.args = {
  value: "合計金額",
};

export const InputPercentage = Template.bind({});
InputPercentage.args = {
  value: "割合入力",
};

export const AddMembers = Template.bind({});
AddMembers.args = {
  value: "メンバー追加",
};

export const Result = Template.bind({});
Result.args = {
  value: "結果",
};
