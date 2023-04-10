import { Stack, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import React from "react";

class Props {
  localMemberNames?: string[];

  onHandleEdit!: (value: number) => void;

  removeMember!: (value: number) => void;
}

function MembersList({ localMemberNames, onHandleEdit, removeMember } : Props) {
  return (
    <Stack justifyContent="left" sx={{ width: { lg: "60%", xs: "90%" } }}>
      {localMemberNames && localMemberNames.length > 0
        ? localMemberNames.map((memberName, index) => (
          <Stack flexDirection="row" mb={2} key={memberName}>
            <Typography sx={{ width: { lg: "90%", xs: "70%" } }}>{memberName}</Typography>
            <EditIcon sx={{ cursor: "pointer", width: { lg: "5%", xs: "15%" } }} onClick={() => onHandleEdit(index)} data-testid="edit-btn" />
            <DeleteSweepIcon sx={{ cursor: "pointer", width: { lg: "5%", xs: "15%" } }} onClick={() => removeMember(index)} data-testid="delete-btn" />
          </Stack>
        )) : <Typography fontSize={15} textAlign="center">メンバーを追加してください</Typography>}
    </Stack>
  );
}

export default MembersList;
