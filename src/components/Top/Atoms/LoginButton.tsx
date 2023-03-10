import React from "react";
import MyButton from "components/Commons/Atoms/MyButton";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";

function LoginButton() {
  return (
    <MyButton
      startIcon={<LoginOutlinedIcon />}
      variant="outlined"
      value="ログイン"
      color="primary"
      size="large"
    />
  );
}

export default LoginButton;
