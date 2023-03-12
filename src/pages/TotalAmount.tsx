import React, { useState } from "react";
import {
  Alert,
  Box,
  Snackbar,
  Stack,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";

import BaseLayout from "components/Commons/Layout/BaseLayout";
import MyHeader from "components/Commons/Organisms/MyHeader";

import MyButton from "components/Commons/Atoms/MyButton";
import { useCostStore } from "stores/cost";

function TotalAmount() {
  const [cost, setCost] = useCostStore((state) => [state.cost, state.setCost]);
  const [open, setOpen] = useState(false);

  const [localCost, setLocalCost] = useState<number | string>("");

  /** save cost to Zustand store */
  const handleClickButton = () => {
    // set input cost on Session storage
    setCost(localCost);

    // open the snack bar
    setOpen(true);

    // clear input cost
    setLocalCost("");
  };

  /** close the snack bar */
  const handleOnClose = () => {
    setOpen(false);
  };

  const steps = ["合計金額", "メンバー追加", "割合入力", "結果"];
  return (
    <BaseLayout>
      <Stack direction="column" justifyContent="center" alignItems="center">
        <MyHeader value="合計金額" />

        <Box sx={{ width: "100%" }} mt={10}>
          <Stepper activeStep={0} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>
                  <Typography variant="body2">{label}</Typography>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <Stack
          direction="column"
          justifyContent="center"
          mt={10}
          alignItems="center"
          gap="70px"
        >
          <TextField
            label="金額を入力してね"
            size="small"
            type="number"
            value={localCost}
            variant="outlined"
            onChange={(e) => setLocalCost(Number(e.target.value))}
          />
          <MyButton
            onClick={handleClickButton}
            disabled={localCost === ""}
            value="登録"
            variant="contained"
            sx={{ borderRadius: "30px", width: "100%" }}
          />
        </Stack>
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
