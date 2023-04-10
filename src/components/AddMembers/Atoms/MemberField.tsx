import { TextField } from "@mui/material";
import React from "react";

class Props {
  setTmpMemberName!: (value: string) => void;

  tmpMemberName: string | undefined;
}
function CostTextField({ setTmpMemberName, tmpMemberName }: Props) {
  return (
    <TextField
      label="Add member name"
      value={tmpMemberName}
      size="small"
      type="string"
      variant="outlined"
      onChange={(e) => setTmpMemberName(e.target.value)}
      sx={{ width: { lg: "40em" }, mr: { lg: 2 } }}
    />
  );
}

export default CostTextField;
