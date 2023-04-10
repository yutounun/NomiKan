import { Box, Step, StepLabel, Stepper, Typography } from "@mui/material";
import React from "react";

class Props {
  activeStep = 0;
}
function MyStepper({ activeStep }: Props) {
  const steps = ["合計金額", "メンバー追加", "割合入力", "結果"];

  return (
    <Box sx={{ width: "100%", marginTop: { lg: "7rem", xs: "5rem" } }}>
      <Stepper activeStep={activeStep} data-testid="stepper" alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel data-testid={label}>
              <Typography variant="body2">{label}</Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default MyStepper;
