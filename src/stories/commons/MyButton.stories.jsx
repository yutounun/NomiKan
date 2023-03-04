import React from 'react'

import MyButton from '../../components/Commons/Atoms/MyButton'

export default {
  title: 'Commons/Atoms/MyButton',
  component: MyButton,
  argTypes: {
    variant: {
      options: ['contained', 'outlined'],
      control: { type: 'radio' },
    },
    value: {
      control: 'text',
    },
    color: {
      options: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
      control: { type: 'radio' },
    },
    disabled: { control: 'boolean' },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    startIcon: {},
  },
}

const Template = (args) => <MyButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  value: 'Button',
  disabled: false,
  size: 'medium',
  variant: 'contained',
}
