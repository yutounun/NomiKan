import PropTypes from 'prop-types'
import React from 'react'
import Button from '@mui/material/Button'

const MyButton = (props) => {
  return (
    <Button
      onClick={props.onClick}
      data-testid='button'
      variant={props.variant}
      color={props.color}
      size={props.size}
      disabled={props.disabled}
      startIcon={props.startIcon}
    >
      {props.value}
    </Button>
  )
}

MyButton.propTypes = {
  variant: PropTypes.string,
  value: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  startIcon: PropTypes.node,
  onClick: PropTypes.func,
}
export default MyButton
