import React from "react";

import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import MyButton from "components/Commons/Atoms/MyButton";
// TODO: use Link instead of <a>
// import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

function Buttons() {
  const buttons = [
    {
      to: "/total-amount",
      label: "はじめる",
      icon: <RocketLaunchOutlinedIcon />,
    },
    {
      // TODO: update path
      to: "/total-amount",
      label: "会員登録",
      icon: <HowToRegOutlinedIcon />,
    },
    {
      // TODO: update path
      to: "/total-amount",
      label: "ログイン",
      icon: <LoginOutlinedIcon />,
    },
  ];
  return (
    <Stack direction="column" gap={2} pt={3} justifyContent="center" width="100%">
      {buttons.map((button) => (
        <a key={button.label} href={button.to} style={{ textDecoration: "none", textAlign: "center" }}>
          <MyButton
            startIcon={button.icon}
            variant="outlined"
            value={button.label}
            color="primary"
            size="large"
            sx={{ borderRadius: "10px", width: { xs: "60%", lg: "80%" }, marginBottom: "10px" }}
          />
        </a>
      ))}
    </Stack>
  );
}

export default Buttons;
