import { Alert, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";

class Props {
  /** Check if open property is changed on parent component */
  parentOpen = false;

  value = "";

  onClose?: () => void;
}
function MyAlert({ parentOpen, value, onClose }: Props) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(parentOpen);
  }, [parentOpen]);

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={open}
      onClose={onClose}
    >
      <Alert onClose={onClose} sx={{ width: "100%" }}>
        {value}
      </Alert>
    </Snackbar>
  );
}

export default MyAlert;
