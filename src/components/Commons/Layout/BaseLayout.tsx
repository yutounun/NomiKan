import React from "react";

class Props {
  children?: React.ReactNode = null;

  backgroundColor?: string;
}

function BaseLayout({ children, backgroundColor }: Props) {
  const style = {
    backgroundColor,
    height: "100vh",
  };
  return <main data-testid="main" style={style}>{children}</main>;
}

export default BaseLayout;
