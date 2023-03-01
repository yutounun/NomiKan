import React from 'react'
import Button from '@mui/material/Button'

type Props = {
  variant: 'text' | 'contained' | 'outlined' | undefined
  value: string
  color:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | undefined
  size: 'small' | 'medium' | 'large' | undefined
  startIcon: React.ReactNode
}

const MyButton: React.FC<Props> = (props) => {
  return (
    <Button
      variant={props.variant}
      color={props.color}
      size={props.size}
      startIcon={props.startIcon}
    >
      {props.value}
    </Button>
  )
}
export default MyButton
