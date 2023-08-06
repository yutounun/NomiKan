import React from "react";
import { Stack } from "@mui/material";

import BaseLayout from "components/Commons/Layout/BaseLayout";
import MyHeader from "components/Commons/Organisms/MyHeader";
import MyStepper from "components/Commons/Organisms/MyStepper";
import Content from "components/Result/Organisms/Content";

function InputPercentage() {
  return (
    <BaseLayout backgroundColor="#EBF3FF">
      <Stack direction="column" justifyContent="center" alignItems="center">
        {/* Result Header */}
        <MyHeader reversedColor value="Result" />

        {/* Stepper showing the current page */}
        <MyStepper activeStep={3} />

        {/* Content including input and button */}
        <Content />

      </Stack>
    </BaseLayout>
  );
}

export default InputPercentage;
