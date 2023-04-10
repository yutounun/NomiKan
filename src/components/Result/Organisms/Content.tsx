import React from "react";
import { Stack, Box } from "@mui/material";
import { useNomikanStore } from "stores/nomikan";
import MembersList from "components/Result/Molecules/MembersList";
import ResultIcon from "components/Commons/Atoms/ResultIcon";

function Content() {
  const [members, totalCost] = useNomikanStore((state) => [state.members, state.cost]);

  return (
    <Stack
      direction="column"
      alignItems="center"
      mt={10}
      width="100%"
      gap="2em"
      sx={{ maxWidth: "80%" }}
    >
      <Box sx={{ display: { xs: "none", lg: "block" } }}>
        <ResultIcon height="180" width="400" />
      </Box>
      <Box sx={{ display: { lg: "none" } }}>
        <ResultIcon height="140" width="200" />
      </Box>

      {/* members */}
      <MembersList
        membersInfo={members}
        totalCost={totalCost}
      />
    </Stack>

  );
}

export default Content;
