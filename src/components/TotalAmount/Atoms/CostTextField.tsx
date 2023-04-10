import { Stack, TextField, Typography } from "@mui/material";
import React from "react";

class Props {
  setLocalCost!: (value: string | number | undefined) => void;

  value: string | number | undefined;
}
function CostTextField({ setLocalCost, value }: Props) {
  return (
    <Stack direction="row" width="100%" alignItems="center" justifyContent="center" gap={2}>
      <Typography fontSize={20}>
        ¥
      </Typography>
      <TextField
        label="Enter the total cost"
        value={value}
        size="small"
        type="number"
        variant="outlined"
        onChange={(e) => setLocalCost(e.target.value)}
        sx={{
          width: {
            lg: "40%",
            xs: "60%",
          },
        }}
      />
    </Stack>
  );
}

export default CostTextField;
