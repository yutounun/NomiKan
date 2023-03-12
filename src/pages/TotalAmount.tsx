import React, { useState } from "react";
import { Alert, Snackbar, Stack } from "@mui/material";

import BaseLayout from "components/Commons/Layout/BaseLayout";
import MyHeader from "components/Commons/Organisms/MyHeader";
import MyStepper from "components/Commons/Organisms/MyStepper";
import Content from "components/TotalAmount/Organisms/Content";

function TotalAmount() {
  const [open, setOpen] = useState(false);

  const handleOnOpen = () => {
    setOpen(true);
  };

  /** close the snack bar */
  const handleOnClose = () => {
    setOpen(false);
  };

  return (
    <BaseLayout>
      <Stack direction="column" justifyContent="center" alignItems="center">
        <MyHeader value="合計金額" />
        <MyStepper activeStep={0} />
        <Content onOpen={handleOnOpen} />
      </Stack>

      {/* Alert for the completion of registration  */}
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        onClose={handleOnClose}
      >
        <Alert onClose={handleOnClose} severity="info" sx={{ width: "100%" }}>
          登録しました！
        </Alert>
      </Snackbar>
    </BaseLayout>
  );
}

export default TotalAmount;
