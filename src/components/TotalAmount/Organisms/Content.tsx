import { Stack } from "@mui/material";
import MyButton from "components/Commons/Atoms/MyButton";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNomikanStore } from "stores/nomikan";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import CostTextField from "../Atoms/CostTextField";

class Props {
  onOpen!: () => void;
}

function Content({ onOpen }: Props) {
  const navigate = useNavigate();
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

    navigate("/add-members");
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      mt={10}
      alignItems="center"
      gap="70px"
      width="100%"
    >
      <CostTextField setLocalCost={setLocalCost} value={localCost} />
      <MyButton
        startIcon={<DoneOutlineIcon />}
        onClick={handleClickButton}
        disabled={localCost === ""}
        value="登録"
        variant="contained"
        sx={{ borderRadius: "30px", width: { lg: "30%", xs: "60%" }, height: { md: "3em" } }}
      />
    </Stack>
  );
}

export default Content;
