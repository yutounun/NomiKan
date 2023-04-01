import { Stack } from "@mui/material";
import React, { useState } from "react";
import EditModal from "components/InputPercentage/Organisms/EditModal";
import MyButton from "components/Commons/Atoms/MyButton";
// TODO: use Link instead of <a>
// import { Link } from "react-router-dom";
import { useNomikanStore } from "stores/nomikan";
import MembersList from "components/InputPercentage/Organisms/MembersList";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

class Props {
  setOpen!: (value: boolean) => void;

  setAlertLabel!: (value: string) => void;
}

function Content({ setOpen, setAlertLabel }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const [editIndex, setEditIndex] = useState(0);
  const [members, setMembers] = useNomikanStore((state) => [state.members, state.setMembers]);
  const [localMemberNames, setLocalMemberNames] = useState<string[]>(members);

  /** save members to Zustand store */
  const handleClickRegButton = () => {
    // set input cost on Session storage
    setMembers(localMemberNames);
  };

  const onHandleEdit = (index: number) => {
    setEditIndex(index);
    setOpenModal(true);
  };

  return (
    <Stack
      direction="column"
      mt={10}
      width="100%"
      gap="2em"
      sx={{ maxWidth: "80%" }}
    >

      {/* members */}
      <MembersList
        localMemberNames={localMemberNames}
        onHandleEdit={onHandleEdit}
      />

      {/* 「登録」Button */}
      <a href="/result" data-testid="reg-btn" style={{ textDecoration: "none", width: "100%", textAlign: "center" }}>
        <MyButton
          startIcon={<DoneOutlineIcon />}
          onClick={handleClickRegButton}
          disabled={localMemberNames.length === 0}
          value="登録"
          variant="contained"
          sx={{ borderRadius: "30px", width: { xs: "80%", md: "50%" }, height: { md: "3em" } }}
        />
      </a>

      <EditModal
        editIndex={editIndex}
        openModal={openModal}
        setOpenModal={setOpenModal}
        localMemberNames={localMemberNames}
        setLocalMemberNames={setLocalMemberNames}
      />
    </Stack>

  );
}

export default Content;
