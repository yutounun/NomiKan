import React, { useState } from "react";
import { Stack } from "@mui/material";

import BaseLayout from "components/Commons/Layout/BaseLayout";
import MyHeader from "components/Commons/Organisms/MyHeader";
import MyStepper from "components/Commons/Organisms/MyStepper";
import Content from "components/AddMembers/Organisms/Content";

import MyAlert from "components/Commons/Molecules/MyAlert";

function AddMembers() {
  const [open, setOpen] = useState(false);
  const [alertLabel, setAlertLabel] = useState("");

  const handleCloseAlert = () => {
    setOpen(false);
  };

  return (
    <BaseLayout>
      <Stack direction="column" justifyContent="center" alignItems="center">
        {/* 合計金額Header */}
        <MyHeader value="メンバー追加" />

        {/* Stepper showing the current page */}
        <MyStepper activeStep={1} />

        {/* Content including input and button */}
        <Content setOpen={setOpen} setAlertLabel={setAlertLabel} />

        {/* Alert for the completion of registration  */}
        <MyAlert parentOpen={open} value={alertLabel} onClose={handleCloseAlert} />

      </Stack>
    </BaseLayout>
  );
}

export default AddMembers;
