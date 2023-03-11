import React from "react";

import BaseLayout from "components/Commons/Layout/BaseLayout";
import MyHeader from "components/Commons/Organisms/MyHeader";

// import Buttons from "components/TotalAmount/Organisms/Buttons";
// import Explanation from "components/TotalAmount/Organisms/Explanation";
import { Stack } from "@mui/material";

function TotalAmount() {
  return (
    <BaseLayout>
      <Stack direction="column" justifyContent="center" alignItems="center">
        <MyHeader value="合計金額" />
        <Stack
          direction="column"
          pt={10}
          justifyContent="center"
          alignItems="center"
        >
          a
        </Stack>
      </Stack>
    </BaseLayout>
  );
}

export default TotalAmount;
