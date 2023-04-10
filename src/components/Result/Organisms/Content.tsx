import React from "react";
import { Stack } from "@mui/material";
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
      <ResultIcon height="140" width="200" />

      {/* members */}
      <MembersList
        membersInfo={members}
        totalCost={totalCost}
      />
    </Stack>

  );
}

export default Content;
