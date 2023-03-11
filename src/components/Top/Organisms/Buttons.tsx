import React from "react";

import StartButton from "components/Top/Atoms/StartButton";
import SignUpButton from "components/Top/Atoms/SignUpButton";
import LoginButton from "components/Top/Atoms/LoginButton";
import { Stack } from "@mui/material";

function Buttons() {
  return (
    <Stack direction="column" gap={2} pt={3} justifyContent="center">
      <StartButton />
      <SignUpButton />
      <LoginButton />
    </Stack>
  );
}

export default Buttons;
