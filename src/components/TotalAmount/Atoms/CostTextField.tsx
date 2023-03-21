import { TextField } from "@mui/material";
import React from "react";

class Props {
  setLocalCost!: (value: string | number | undefined) => void;

  value: string | number | undefined;
}
function CostTextField({ setLocalCost, value }: Props) {
  return (
    <TextField
      label="金額を入力してね"
      value={value}
      size="small"
      type="number"
      variant="outlined"
      onChange={(e) => setLocalCost(e.target.value)}
      sx={{
        width: {
          lg: "40em",
          xs: "200px",
        },
      }}
    />
  );
}

export default CostTextField;
