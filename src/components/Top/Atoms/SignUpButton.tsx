import React from "react";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import MyButton from "components/Commons/Atoms/MyButton";

function SignUpButton() {
  return (
    <MyButton
      startIcon={<HowToRegOutlinedIcon />}
      variant="outlined"
      value="会員登録"
      color="primary"
      size="large"
    />
  );
}

export default SignUpButton;
