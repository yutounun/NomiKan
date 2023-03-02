import React from 'react'

import MyButton from '../../components/Commons/Atoms/MyButton'

export default {
  title: 'Commons/Atoms/MyButton',
  component: MyButton,
  argTypes: {
    variant: {},
    value: {},
    color: {},
    size: {},
    startIcon: {},
  },
}

const Template = (args) => <MyButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  value: 'Button',
}
