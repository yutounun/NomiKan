import React from "react";

class Props {
  children?: React.ReactNode = null;
}

function BaseLayout({ children }: Props) {
  return <main data-testid="main">{children}</main>;
}

export default BaseLayout;
