import { Stack, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";

class Props {
  localMemberNames!: string[];

  onHandleEdit!: (value: number) => void;
}

function MembersList({ localMemberNames, onHandleEdit } : Props) {
  return (
    <Stack justifyContent="left">
      {localMemberNames.map((memberName, index) => (
        <Stack flexDirection="row" mb={2} key={memberName}>
          <Typography sx={{ width: { lg: "90%", xs: "70%" } }}>{memberName}</Typography>
          <Typography sx={{ cursor: "pointer", width: { lg: "5%", xs: "15%" } }}>30%</Typography>
          <EditIcon sx={{ cursor: "pointer", width: { lg: "5%", xs: "15%" } }} onClick={() => onHandleEdit(index)} data-testid="edit-btn" />
        </Stack>
      ))}
    </Stack>
  );
}

export default MembersList;
