import { Stack, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";

interface IMemberInfo {
  name: string;
  ratio: number;
}
class Props {
  onHandleEdit!: (value: number) => void;

  memberInfo!: IMemberInfo[];
}

function MembersList({ onHandleEdit, memberInfo } : Props) {
  return (
    <Stack justifyContent="left" width="100%">
      {memberInfo.map((m, index) => (
        <Stack flexDirection="row" mb={2} key={m.name}>
          <Typography sx={{ width: { lg: "90%", xs: "70%" } }}>{m.name}</Typography>
          <Typography sx={{ cursor: "pointer", width: { lg: "5%", xs: "15%" } }}>
            {m.ratio ?? "0"}
            %
          </Typography>
          <EditIcon sx={{ cursor: "pointer", width: { lg: "5%", xs: "15%" } }} onClick={() => onHandleEdit(index)} data-testid="edit-btn" />
        </Stack>
      ))}
    </Stack>
  );
}

export default MembersList;
