import Button from "@mui/material/Button";
import React from "react";

class Props {
  variant?: "contained" | "outlined" = "contained";

  value?: string = "Click Me!";

  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning" = "primary";

  size?: "small" | "medium" | "large" = "medium";

  disabled?: boolean = false;

  onClick?: () => void;

  style?: string;

  startIcon?: React.ReactNode;
}
function MyButton({
  onClick,
  variant,
  color,
  size,
  disabled,
  value,
  style,
  startIcon,
}: Props) {
  return (
    <Button
      style={{ width: "200px" }}
      onClick={onClick}
      data-testid="button"
      variant={variant}
      color={color}
      size={size}
      disabled={disabled}
      startIcon={startIcon}
    >
      {value}
    </Button>
  );
}

export default MyButton;
