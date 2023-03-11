import React from "react";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import MyButton from "components/Commons/Atoms/MyButton";
import { useNavigate } from "react-router-dom";

function StartButton() {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/total-amount");
  };

  return (
    <MyButton
      onClick={handleOnClick}
      startIcon={<RocketLaunchOutlinedIcon />}
      variant="outlined"
      value="はじめる"
      color="primary"
      size="large"
    />
  );
}

export default StartButton;
