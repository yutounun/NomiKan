import React, { useState } from "react";
import { Stack } from "@mui/material";

import BaseLayout from "components/Commons/Layout/BaseLayout";
import MyHeader from "components/Commons/Organisms/MyHeader";
import MyStepper from "components/Commons/Organisms/MyStepper";
import Content from "components/TotalAmount/Organisms/Content";
import MyAlert from "components/Commons/Molecules/MyAlert";

function TotalAmount() {
  const [open, setOpen] = useState(false);

  const handleOnOpen = () => {
    setOpen(true);
  };

  return (
    <BaseLayout>
      <Stack direction="column" justifyContent="center" alignItems="center">
        {/* 合計金額Header */}
        <MyHeader value="合計金額" />

        {/* Stepper showing the current page */}
        <MyStepper activeStep={0} />

        {/* Content including input and button */}
        <Content onOpen={handleOnOpen} />

        {/* Alert for the completion of registration  */}
        <MyAlert parentOpen={open} value="登録が完了しました！" />
      </Stack>
    </BaseLayout>
  );
}

export default TotalAmount;
