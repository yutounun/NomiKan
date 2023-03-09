import React from "react";
import "./MyHeader.scss";

class Props {
  value?: string = "Title";
}
function MyHeader(props: Props) {
  const { value } = props;
  return (
    <div className="header" data-testid="header">
      {value}
    </div>
  );
}

export default MyHeader;
