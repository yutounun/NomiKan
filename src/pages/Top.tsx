import React, { useEffect } from "react";

import BaseLayout from "components/Commons/Layout/BaseLayout";
import MyHeader from "components/Commons/Organisms/MyHeader";

import Buttons from "components/Top/Organisms/Buttons";
import Explanation from "components/Top/Organisms/Explanation";
import { Stack } from "@mui/material";

function Top() {
  // Clear all data from session storage
  useEffect(() => {
    sessionStorage.clear();
  });

  return (
    <BaseLayout backgroundColor="#EBF3FF">
      <Stack direction="column" justifyContent="center" alignItems="center">
        <MyHeader reversedColor value="SplitSip" hideGoBack />
        <Stack
          direction="column"
          pt={10}
          justifyContent="center"
          alignItems="center"
        >
          <Explanation />
          <Buttons />
        </Stack>
      </Stack>
    </BaseLayout>
  );
}

export default Top;
