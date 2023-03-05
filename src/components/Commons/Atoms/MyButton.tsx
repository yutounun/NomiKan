/* eslint-disable react/function-component-definition */
import Button from '@mui/material/Button';
import React from 'react';

class Props {
  variant?: 'contained' | 'outlined' = 'contained';

  value?: string = 'Click Me!';

  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning' = 'primary';

  size?: 'small' | 'medium' | 'large' = 'medium';

  disabled?: boolean = false;

  onClick?: () => void;
}
const MyButton: React.FC<Props> = (props) => {
  const {
    onClick, variant, color, size, disabled, value,
  } = props;
  return (
    <Button
      onClick={onClick}
      data-testid="button"
      variant={variant}
      color={color}
      size={size}
      disabled={disabled}
    >
      {value}
    </Button>
  );
};

export default MyButton;
