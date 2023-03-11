import React from "react";

import "./Top.scss";

import BaseLayout from "components/Commons/Layout/BaseLayout";
import MyHeader from "components/Commons/Organisms/MyHeader";

import Buttons from "components/Top/Organisms/Buttons";
import Explanation from "components/Top/Organisms/Explanation";
import { Stack } from "@mui/material";

function Top() {
  return (
    <BaseLayout>
      <Stack direction="column" justifyContent="center" alignItems="center">
        <MyHeader value="NomiKan" />
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
