import React from "react";

import StartButton from "components/Top/Atoms/StartButton";
import SignUpButton from "components/Top/Atoms/SignUpButton";
import LoginButton from "components/Top/Atoms/LoginButton";

function Buttons() {
  return (
    <div className="buttons">
      <StartButton />
      <SignUpButton />
      <LoginButton />
    </div>
  );
}

export default Buttons;
