import { IconButton, Stack } from "@mui/material";
import React, { useState } from "react";
import MemberField from "components/AddMembers/Atoms/MemberField";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

class Props {
  handleSetLocalMemberNames!: (value: string) => void;
}

function Content({ handleSetLocalMemberNames }: Props) {
  const [tmpMemberName, setTmpMemberName] = useState<string>("");
  const handleAddIconClick = () => {
    // Add member name to the list
    handleSetLocalMemberNames(tmpMemberName);

    // Clear the input field
    setTmpMemberName("");
  };
  return (
    <Stack direction="row" justifyContent="center" alignItems="center">
      {/* TextBox for adding members */}
      <MemberField
        setTmpMemberName={setTmpMemberName}
        tmpMemberName={tmpMemberName}
      />

      {/* 「+」Icon */}
      <IconButton
        aria-label="delete"
        onClick={handleAddIconClick}
      >
        <AddCircleOutlineIcon fontSize="medium" color="primary" />
      </IconButton>
    </Stack>
  );
}

export default Content;
