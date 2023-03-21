/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Cheers from "components/Commons/Atoms/cheers";

function Explanation() {
  return (
    <Stack
      direction="column"
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      <Typography
        variant="subtitle1"
        component="span"
        sx={{
          color: "info.main",
          fontSize: { lg: "1.5rem", xs: "1em" },
        }}
      >
        部長のお会計をお助け！
      </Typography>
      <Box sx={{ display: { xs: "none", lg: "block" } }}>
        <Cheers height="300px" width="500px" />
      </Box>
      <Box sx={{ display: { lg: "none" } }}>
        <Cheers height="170px" width="250px" />
      </Box>
      <Typography
        variant="subtitle2"
        pt={2}
        component="span"
        sx={{ textAlign: "center", fontSize: { lg: "1.5rem", xs: "1em" }, width: { lg: "100%", xs: "80%" }, }}
      >
        各メンバーの支払額を%で計算することができます
      </Typography>
    </Stack>
  );
}

export default Explanation;
