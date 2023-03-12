import { Alert, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";

class Props {
  /** Check if open property is changed on parent component */
  parentOpen = false;

  value = "";
}
function MyAlert({ parentOpen, value }: Props) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(parentOpen);
  }, [parentOpen]);

  /** close the snack bar */
  const handleOnClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={open}
      onClose={handleOnClose}
    >
      <Alert onClose={handleOnClose} severity="info" sx={{ width: "100%" }}>
        {value}
      </Alert>
    </Snackbar>
  );
}

export default MyAlert;
