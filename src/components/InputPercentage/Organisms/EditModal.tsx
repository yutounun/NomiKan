import { Modal, Stack, TextField, Typography } from "@mui/material";
import MyButton from "components/Commons/Atoms/MyButton";
import React, { useState } from "react";

interface IMember {
  name: string;
  ratio: number;
}
class Props {
  setOpenModal!: (value: boolean) => void;

  closeModal!: (value: number) => void;

  openModal!: boolean;

  editIndex!: number;

  localMemberInfo!: IMember[];

  setLocalMemberInfo!: (value: IMember[]) => void;
}

function Content({
  openModal, setOpenModal, editIndex, closeModal, localMemberInfo, setLocalMemberInfo
}: Props) {
  const handleClose = () => {
    setOpenModal(false);
  };

  // value of input in the form
  const [ratio, setRatio] = useState(0);

  const handleClickRegButton = () => {
    // Create a new array based on the current state
    const updatedMemberInfo = [...localMemberInfo];

    // Update the specific object at the given index
    // eslint-disable-next-line no-param-reassign
    localMemberInfo[editIndex] = { ...updatedMemberInfo[editIndex], ratio };

    // Set the new state
    setLocalMemberInfo(updatedMemberInfo);
    handleClose();
    closeModal(ratio);
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

  return (
    <Modal
      open={openModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack flexDirection="column" justifyContent="center" alignItems="center" sx={style}>
        {/* title */}
        <Typography id="modal-modal-title" variant="h6" mb={2} fontWeight="bold">
          EDIT
        </Typography>

        {/* Input */}
        <Stack direction="row" alignItems="center">
          <TextField data-testid="edit-member-input" placeholder="Type the ratio" size="small" onBlur={(e) => setRatio(Number(e.target.value))} />
          <Typography ml={2}>%</Typography>
        </Stack>

        {/* 登録button */}
        <MyButton
          dataTestid="submit-edit-btn"
          onClick={handleClickRegButton}
          value="Add To List"
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
