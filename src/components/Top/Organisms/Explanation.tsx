import React from "react";
import Cheers from "static/cheers.svg";

function Explanation() {
  return (
    <>
      <span className="text-gray top-title">部長のお会計をお助け！</span>
      <img src={Cheers} alt="" />
      <span className="explanation">
        各メンバーの支払額を%で計算することができます
      </span>
    </>
  );
}

export default Explanation;
