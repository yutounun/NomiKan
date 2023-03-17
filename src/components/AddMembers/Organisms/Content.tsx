import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import MemberInput from "components/AddMembers/Molecules/MemberInput";
import EditIcon from "@mui/icons-material/Edit";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import MyButton from "components/Commons/Atoms/MyButton";
import { Link } from "react-router-dom";

class Props {
  setOpen!: (value: boolean) => void;
}

function Content({ setOpen }: Props) {
  // const [cost, setCost] = useCostStore((state) => [state.cost, state.setCost]);
  const [localMemberNames, setLocalMemberNames] = useState<string[]>([]);

  const handleSetLocalMemberNames = (name: string) => {
    setLocalMemberNames((prevArray) => [...prevArray, name]);
  };
  /** save cost to Zustand store */

  const handleClickRegButton = () => {
    // set input cost on Session storage
    // setCost(localCost);

    // open the alert
    setOpen(true);

    // clear input cost
    // setLocalCost("");
  };

  return (
    <Stack
      direction="column"
      mt={10}
      gap="2em"
    >
      {/* TextBox with Add Button */}
      <MemberInput handleSetLocalMemberNames={handleSetLocalMemberNames} />

      {/* members */}
      <Stack justifyContent="left">
        {localMemberNames.length > 0 ? localMemberNames.map((memberName) => (
          <Stack flexDirection="row" mb={2}>
            <Typography key={memberName} sx={{ width: { lg: "90%", xs: "70%" } }}>{memberName}</Typography>
            <EditIcon sx={{ cursor: "pointer", width: { lg: "5%", xs: "15%" } }} />
            <DeleteSweepIcon sx={{ cursor: "pointer", width: { lg: "5%", xs: "15%" } }} />
          </Stack>
        )) : <Typography fontSize={15} textAlign="center">メンバーを追加してください</Typography>}
      </Stack>

      {/* 「登録」Button */}
      <Link to="/add-members" style={{ textDecoration: "none", width: "100%", textAlign: "center" }}>
        <MyButton
          data-testid="reg-button"
          onClick={handleClickRegButton}
          disabled={localMemberNames.length === 0}
          value="登録"
          variant="contained"
          sx={{ borderRadius: "30px", width: { xs: "80%", md: "50%" } }}
        />
      </Link>
    </Stack>
  );
}

export default Content;
