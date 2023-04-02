import { Modal, Stack, TextField, Typography } from "@mui/material";
import MyButton from "components/Commons/Atoms/MyButton";
import React, { Dispatch, SetStateAction, useState } from "react";

class Props {
  setOpenModal!: (value: boolean) => void;

  closeModal!: (value: number) => void;

  openModal!: boolean;

  editIndex!: number;

  localRatios!: number[];

  setLocalRatios!: Dispatch<SetStateAction<number[]>>;
}

function Content({
  openModal, setOpenModal, editIndex, localRatios, setLocalRatios, closeModal
}: Props) {
  const handleClose = () => {
    setOpenModal(false);
  };

  const [ratio, setRatio] = useState(0);

  const handleClickRegButton = () => {
    setLocalRatios([...localRatios, ratio]);
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
        <Typography id="modal-modal-title" variant="h6" mb={2}>
          編集
        </Typography>

        {/* Input */}
        <Stack direction="row" alignItems="center">
          <TextField data-testid="edit-member-input" placeholder="割合を入力" size="small" onBlur={(e) => setRatio(Number(e.target.value))} />
          <Typography ml={2}>%</Typography>
        </Stack>

        {/* 登録button */}
        <MyButton
          dataTestid="submit-edit-btn"
          onClick={handleClickRegButton}
          value="登録"
          variant="contained"
          sx={{ borderRadius: "30px", marginTop: "2em", width: { xs: "50%", md: "40%" }, height: { xs: "2em", md: "3em" } }}
        />

        {/* キャンセルbutton */}
        <MyButton
          dataTestid="cancel-edit-btn"
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
