import React from "react";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import MyButton from "components/Commons/Atoms/MyButton";
import { Link } from "react-router-dom";

function StartButton() {
  return (
    <Link to="/total-amount" style={{ textDecoration: "none" }}>
      <MyButton
        startIcon={<RocketLaunchOutlinedIcon />}
        variant="outlined"
        value="はじめる"
        color="primary"
        size="large"
      />
    </Link>
  );
}

export default StartButton;
