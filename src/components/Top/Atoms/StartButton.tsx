import React from "react";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import MyButton from "components/Commons/Atoms/MyButton";

function StartButton() {
  const handleClickStart = () => {
    console.log("clicked!");
  };

  return (
    <MyButton
      onClick={handleClickStart}
      startIcon={<RocketLaunchOutlinedIcon />}
      variant="outlined"
      value="はじめる"
      color="primary"
      size="large"
    />
  );
}

export default StartButton;
