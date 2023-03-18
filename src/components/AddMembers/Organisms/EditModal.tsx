import { Modal, Stack, TextField, Typography } from "@mui/material";
import MyButton from "components/Commons/Atoms/MyButton";
import React, { useState } from "react";
import { useNomikanStore } from "stores/nomikan";

class Props {
  setOpenModal!: (value: boolean) => void;

  openModal!: boolean;

  editIndex!: number;
}

function Content({ openModal, setOpenModal, editIndex }: Props) {
  const [members, setMembers] = useNomikanStore((state) => [state.members, state.setMembers]);
  const [localMemberNames, setLocalMemberNames] = useState<string[]>();

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleClickRegButton = () => {
    if (localMemberNames) {
      // set input cost on Session storage
      setMembers(localMemberNames);
      handleClose();
    }
  };

  // style for the modal
  const style = {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "300px", lg: "500px" },
    bgcolor: "background.paper",
    borderRadius: "30px",
    border: "2px normal #000",
    boxShadow: 24,
    p: 4,
  };

  const onHandleEditName = (name: string) => {
    // console.log(name);
    const filteredMembers: string[] = members.map((member: string, index) => {
      if (index === editIndex) {
        return name;
      }
      return member;
    });
    setLocalMemberNames(filteredMembers);
  };

  return (
    <Modal
      open={openModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack flexDirection="column" justifyContent="center" alignItems="center" sx={style}>
        {/* title */}
        <Typography id="modal-modal-title" variant="h6">
          名前の編集
        </Typography>

        {/* Input */}
        <TextField size="small" sx={{ marginTop: "1em" }} onChange={(e) => onHandleEditName(e.target.value)} />

        {/* 登録button */}
        <MyButton
          data-testid="reg-button"
          onClick={handleClickRegButton}
          value="登録"
          variant="contained"
          sx={{ borderRadius: "30px", marginTop: "2em", width: { xs: "50%", md: "40%" }, height: { xs: "2em", md: "3em" } }}
        />

        {/* キャンセルbutton */}
        <MyButton
          data-testid="reg-button"
          onClick={handleClose}
          value="キャンセル"
          variant="contained"
          color="info"
          sx={{ borderRadius: "30px", marginTop: "1em", width: { xs: "50%", md: "40%" }, height: { xs: "2em", md: "3em" } }}
        />
      </Stack>
    </Modal>
  );
}

export default Content;
