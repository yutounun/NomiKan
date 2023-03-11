import React, { useState } from "react";
import { Stack, TextField } from "@mui/material";

import BaseLayout from "components/Commons/Layout/BaseLayout";
import MyHeader from "components/Commons/Organisms/MyHeader";

import MyButton from "components/Commons/Atoms/MyButton";
import { useCostStore } from "stores/cost";

function TotalAmount() {
  const [cost, setCost] = useCostStore((state) => [state.cost, state.setCost]);

  const [localCost, setLocalCost] = useState(0);

  /** save cost to Zustand store */
  const handleClickButton = () => {
    setCost(localCost);
  };
  return (
    <BaseLayout>
      <Stack direction="column" justifyContent="center" alignItems="center">
        <MyHeader value="合計金額" />
        <Stack
          direction="column"
          mt={20}
          justifyContent="center"
          alignItems="center"
          gap="70px"
        >
          <p>{cost}</p>
          {localCost}
          <TextField
            label="金額を入力してね"
            size="small"
            type="number"
            variant="outlined"
            onChange={(e) => setLocalCost(Number(e.target.value))}
          />
          <MyButton
            onClick={handleClickButton}
            value="登録"
            variant="contained"
            sx={{ borderRadius: "30px", width: "100%" }}
          />
        </Stack>
      </Stack>
    </BaseLayout>
  );
}

export default TotalAmount;
