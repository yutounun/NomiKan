import React from "react";

import "./Top.scss";

import BaseLayout from "components/Commons/Layout/BaseLayout";
import MyHeader from "components/Commons/Organisms/MyHeader";

import Buttons from "components/Top/Organisms/Buttons";
import Explanation from "components/Top/Organisms/Explanation";

function Top() {
  return (
    <BaseLayout>
      <div className="wrapper">
        <MyHeader value="NomiKan" />
        <div className="container">
          <Explanation />
          <Buttons />
        </div>
      </div>
    </BaseLayout>
  );
}

export default Top;
