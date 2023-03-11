/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Stack, Typography } from "@mui/material";
import React from "react";
import Cheers from "static/cheers.svg";

function Explanation() {
  return (
    <Stack
      direction="column"
      spacing={2}
      justifyContent="center"
      width={300}
      alignItems="center"
    >
      <Typography
        variant="subtitle1"
        component="span"
        sx={{
          color: "info.main",
        }}
      >
        部長のお会計をお助け！
      </Typography>
      <img src={Cheers} alt="" />
      <Typography
        variant="subtitle2"
        pt={2}
        component="span"
        sx={{ textAlign: "center" }}
      >
        各メンバーの支払額を%で計算することができます
      </Typography>
    </Stack>
  );
}

export default Explanation;
