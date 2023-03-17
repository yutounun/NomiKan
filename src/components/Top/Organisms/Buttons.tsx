import React from "react";

import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import MyButton from "components/Commons/Atoms/MyButton";
import { Link } from "react-router-dom";
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
    <Stack direction="column" gap={2} pt={3} justifyContent="center">
      {buttons.map((button) => (
        <Link key={button.label} to={button.to} style={{ textDecoration: "none" }}>
          <MyButton
            startIcon={button.icon}
            variant="outlined"
            value={button.label}
            color="primary"
            size="large"
            sx={{ borderRadius: "10px", width: "200px" }}
          />
        </Link>
      ))}
    </Stack>
  );
}

export default Buttons;
