import React from "react";

import "./Top.scss";

import MyButton from "components/Commons/Atoms/MyButton";
import BaseLayout from "components/Commons/Layout/BaseLayout";
import MyHeader from "components/Commons/Organisms/MyHeader";

import Cheers from "static/cheers.svg";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";

function Top() {
  const handleClickStart = () => {
    console.log("clicked!");
  };
  return (
    <BaseLayout>
      <div className="wrapper">
        <MyHeader value="NomiKan" />
        <div className="container">
          <span className="text-gray top-title">部長のお会計をお助け！</span>
          <img src={Cheers} alt="" />
          <span className="explanation">
            各メンバーの支払額を%で計算することができます
          </span>
          <div className="buttons">
            <MyButton
              onClick={handleClickStart}
              startIcon={<RocketLaunchOutlinedIcon />}
              variant="outlined"
              value="はじめる"
              color="primary"
              size="large"
            />
            <MyButton
              startIcon={<HowToRegOutlinedIcon />}
              variant="outlined"
              value="会員登録"
              color="primary"
              size="large"
            />
            <MyButton
              startIcon={<LoginOutlinedIcon />}
              variant="outlined"
              value="ログイン"
              color="primary"
              size="large"
            />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

export default Top;
