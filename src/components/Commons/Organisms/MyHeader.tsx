import React from "react";
import "./MyHeader.css";

class Props {
  value?: string = "Title";
}
function MyHeader(props: Props) {
  const { value } = props;
  return <div className="header">{value}</div>;
}

export default MyHeader;
