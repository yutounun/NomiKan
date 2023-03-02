import PropTypes from 'prop-types'
import React from 'react'
import Button from '@mui/material/Button'

const MyButton = (props) => {
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

MyButton.propTypes = {
  variant: PropTypes.string,
  value: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  startIcon: PropTypes.node,
}
export default MyButton
