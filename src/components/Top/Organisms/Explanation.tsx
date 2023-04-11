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
          textAlign: "center",
          color: "info.main",
          fontSize: { lg: "1.2rem", xs: "1em" },
        }}
        mb={2}
        width="80%"
      >
        Calculate the payment amount of each member at a drinking party!!
      </Typography>
      <Box sx={{ display: { xs: "none", lg: "block" } }}>
        <Cheers height="300px" width="500px" />
      </Box>
      <Box sx={{ display: { lg: "none" } }}>
        <Cheers height="170px" width="250px" />
      </Box>
    </Stack>
  );
}

export default Explanation;
