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

  startIcon?: React.ReactNode;

  sx?: object;

  dataTestid?: string;
}
function MyButton({
  onClick,
  variant,
  dataTestid,
  color,
  size,
  disabled,
  value,
  startIcon,
  sx,
}: Props) {
  return (
    <Button
      onClick={onClick}
      data-testid="button"
      variant={variant}
      color={color}
      size={size}
      disabled={disabled}
      startIcon={startIcon}
      sx={sx}
      data-testid={dataTestid}
    >
      {value}
    </Button>
  );
}

export default MyButton;
