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
        Help organizers to calculate the payment amount of each member
      </Typography>
      <Box sx={{ display: { xs: "none", lg: "block" } }}>
        <Cheers height="300px" width="500px" />
      </Box>
      <Box sx={{ display: { lg: "none" } }}>
        <Cheers height="170px" width="250px" />
      </Box>
      <Typography
        variant="subtitle2"
        pt={3}
        pb={3}
        component="span"
        sx={{ textAlign: "center", fontSize: { lg: "1rem", xs: "1em" }, width: { lg: "80%", xs: "80%" }, }}
      >
        Calculate the payment amount for each member in percentage units.
      </Typography>
    </Stack>
  );
}

export default Explanation;
