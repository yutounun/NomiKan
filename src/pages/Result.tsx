import React, { useState } from "react";
import { Stack } from "@mui/material";

import BaseLayout from "components/Commons/Layout/BaseLayout";
import MyHeader from "components/Commons/Organisms/MyHeader";
import MyStepper from "components/Commons/Organisms/MyStepper";
import Content from "components/InputPercentage/Organisms/Content";

function InputPercentage() {
  const [, setOpen] = useState(false);
  const [, setAlertLabel] = useState("");

  return (
    <BaseLayout>
      <Stack direction="column" justifyContent="center" alignItems="center">
        {/* 結果Header */}
        <MyHeader value="結果" />

        {/* Stepper showing the current page */}
        <MyStepper activeStep={3} />

        {/* Content including input and button */}
        <Content setOpen={setOpen} setAlertLabel={setAlertLabel} />

      </Stack>
    </BaseLayout>
  );
}

export default InputPercentage;
