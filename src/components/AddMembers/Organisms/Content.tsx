import { Stack } from "@mui/material";
import React, { useState } from "react";
import MemberInput from "components/AddMembers/Molecules/MemberInput";

class Props {
  setOpen!: (value: boolean) => void;
}

function Content({ setOpen }: Props) {
  // const [cost, setCost] = useCostStore((state) => [state.cost, state.setCost]);
  const [localMemberNames, setLocalMemberNames] = useState<string[]>([""]);

  const handleSetLocalMemberNames = (name: string) => {
    setLocalMemberNames((prevArray) => [...prevArray, name]);
  };
  /** save cost to Zustand store */

  // const handleClickButton = () => {
  //   // set input cost on Session storage
  //   setCost(localCost);

  //   // open the alert
  //   setOpen(true);

  //   // clear input cost
  //   setLocalCost("");
  // };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      mt={10}
      alignItems="center"
      gap="70px"
    >
      <MemberInput handleSetLocalMemberNames={handleSetLocalMemberNames} />
      <div>{localMemberNames}</div>

      {/* 「登録」Button */}
      {/* <Link to="/add-members" style={{ textDecoration: "none", width: "100%" }}>
        <MyButton
          onClick={handleClickButton}
          disabled={localCost === ""}
          value="登録"
          variant="contained"
          sx={{ borderRadius: "30px", width: "100%" }}
        />
      </Link> */}
    </Stack>
  );
}

export default Content;
