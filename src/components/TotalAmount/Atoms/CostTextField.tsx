import { TextField } from "@mui/material";
import React from "react";

class Props {
  onChangeCost!: (value: string | number | undefined) => void;

  value: string | number | undefined;
}
function CostTextField({ onChangeCost, value }: Props) {
  const onChangeInputCost = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeCost(e.target.value);
  };
  return (
    <TextField
      label="金額を入力してね"
      value={value}
      size="small"
      type="number"
      variant="outlined"
      onChange={onChangeInputCost}
    />
  );
}

export default CostTextField;
