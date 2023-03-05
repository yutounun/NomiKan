import MyButton from 'components/Commons/Atoms/MyButton'
import { ComponentStory, ComponentMeta } from '@storybook/react'

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
} as ComponentMeta<typeof MyButton>

const Template: ComponentStory<typeof MyButton> = (args) => (
  <MyButton {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  value: 'Button',
  disabled: false,
  size: 'medium',
  variant: 'contained',
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  value: 'Button',
  disabled: false,
  size: 'medium',
  variant: 'contained',
}

export const Wide = Template.bind({})
Wide.args = {
  color: 'primary',
  value: 'Button Button Button Button Button',
  disabled: false,
  size: 'medium',
  variant: 'contained',
}

export const Large = Template.bind({})
Large.args = {
  color: 'primary',
  value: 'Button',
  disabled: false,
  size: 'large',
  variant: 'contained',
}

export const Small = Template.bind({})
Small.args = {
  color: 'primary',
  value: 'Button',
  disabled: false,
  size: 'small',
  variant: 'contained',
}

export const Disabled = Template.bind({})
Disabled.args = {
  color: 'primary',
  value: 'Button',
  disabled: true,
  size: 'medium',
  variant: 'contained',
}

export const Outlined = Template.bind({})
Outlined.args = {
  color: 'primary',
  value: 'Button',
  disabled: false,
  size: 'medium',
  variant: 'outlined',
}
