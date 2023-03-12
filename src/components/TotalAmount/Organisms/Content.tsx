import { Stack } from "@mui/material";
import MyButton from "components/Commons/Atoms/MyButton";
import React, { useState } from "react";
import { useCostStore } from "stores/cost";
import CostTextField from "../Atoms/CostTextField";

class Props {
  onOpen!: () => void;
}

function Content({ onOpen }: Props) {
  const [cost, setCost] = useCostStore((state) => [state.cost, state.setCost]);
  const [localCost, setLocalCost] = useState<number | string | undefined>("");

  console.log(cost);

  /** save cost to Zustand store */
  const handleClickButton = () => {
    // set input cost on Session storage
    setCost(localCost);

    // open the snack bar
    onOpen();

    // clear input cost
    setLocalCost("");
  };

  /** handle input cost */
  const handleUpdateCost = (updatedCost: number | string | undefined) => {
    setLocalCost(updatedCost);
  };
  return (
    <Stack
      direction="column"
      justifyContent="center"
      mt={10}
      alignItems="center"
      gap="70px"
    >
      <CostTextField onChangeCost={handleUpdateCost} value={localCost} />
      <MyButton
        onClick={handleClickButton}
        disabled={localCost === ""}
        value="登録"
        variant="contained"
        sx={{ borderRadius: "30px", width: "100%" }}
      />
    </Stack>
  );
}

export default Content;
