import { Modal, Stack, TextField, Typography } from "@mui/material";
import MyButton from "components/Commons/Atoms/MyButton";
import React, { useState } from "react";

class Props {
  setOpenModal!: (value: boolean) => void;

  openModal!: boolean;

  editIndex!: number;

  setLocalMemberNames!: (value: string[]) => void;

  localMemberNames!: string[];
}

function Content({
  openModal, setOpenModal, editIndex, setLocalMemberNames, localMemberNames
}: Props) {
  const handleClose = () => {
    setOpenModal(false);
  };

  const handleClickRegButton = () => {
    if (localMemberNames) {
      // set input cost on Session storage
      const filteredMembers: string[] = localMemberNames.map((member: string, index) => {
        if (index === editIndex) {
          return editName;
        }
        return member;
      });
      setLocalMemberNames(filteredMembers);
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

  const [editName, setEditName] = useState("");

  return (
    <Modal
      open={openModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack flexDirection="column" justifyContent="center" alignItems="center" sx={style}>
        {/* title */}
        <Typography id="modal-modal-title" variant="h6" fontWeight="bold">
          EDIT
        </Typography>

        {/* Input */}
        <TextField data-testid="edit-member-input" placeholder="Type the name" size="small" sx={{ marginTop: "1em" }} onChange={(e) => setEditName(e.target.value)} />

        {/* 登録button */}
        <MyButton
          dataTestid="submit-edit-btn"
          onClick={handleClickRegButton}
          value="Submit"
          variant="contained"
          sx={{ borderRadius: "30px", marginTop: "2em", width: { xs: "70%", md: "40%" }, height: { xs: "2em", md: "3em" } }}
        />

        {/* キャンセルbutton */}
        <MyButton
          dataTestid="cancel-edit-btn"
          onClick={handleClose}
          value="Cancel"
          variant="contained"
          color="info"
          sx={{ borderRadius: "30px", marginTop: "1em", width: { xs: "70%", md: "40%" }, height: { xs: "2em", md: "3em" } }}
        />
      </Stack>
    </Modal>
  );
}

export default Content;
