import { Stack } from "@mui/material";
import MyButton from "components/Commons/Atoms/MyButton";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNomikanStore } from "stores/nomikan";
import CostTextField from "../Atoms/CostTextField";

class Props {
  onOpen!: () => void;
}

function Content({ onOpen }: Props) {
  const [cost, setCost] = useNomikanStore((state) => [state.cost, state.setCost]);
  const [localCost, setLocalCost] = useState<number | string | undefined>(cost);

  /** save cost to Zustand store */
  const handleClickButton = () => {
    // set input cost on Session storage
    setCost(localCost);

    // open the snack bar
    onOpen();

    // clear input cost
    setLocalCost("");
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      mt={10}
      alignItems="center"
      gap="70px"
    >
      <CostTextField setLocalCost={setLocalCost} value={localCost} />
      <Link to="/add-members" style={{ textDecoration: "none", width: "100%" }}>
        <MyButton
          onClick={handleClickButton}
          disabled={localCost === ""}
          value="登録"
          variant="contained"
          sx={{ borderRadius: "30px", width: "100%" }}
        />
      </Link>
    </Stack>
  );
}

export default Content;
