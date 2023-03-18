import React, { useState } from "react";
import { Stack } from "@mui/material";

import BaseLayout from "components/Commons/Layout/BaseLayout";
import MyHeader from "components/Commons/Organisms/MyHeader";
import MyStepper from "components/Commons/Organisms/MyStepper";
import Content from "components/AddMembers/Organisms/Content";
import EditModal from "components/AddMembers/Organisms/EditModal";
import MyAlert from "components/Commons/Molecules/MyAlert";

function AddMembers() {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [editIndex, setEditIndex] = useState(0);

  const handleCloseAlert = () => {
    setOpen(false);
  };

  return (
    <BaseLayout>
      <Stack direction="column" justifyContent="center" alignItems="center">
        {/* 合計金額Header */}
        <MyHeader value="メンバー追加" />

        {/* Stepper showing the current page */}
        <MyStepper activeStep={1} />

        {/* Content including input and button */}
        <Content setOpen={setOpen} setOpenModal={setOpenModal} setEditIndex={setEditIndex} />

        {/* Alert for the completion of registration  */}
        <MyAlert parentOpen={open} value="メンバーを追加しました！" onClose={handleCloseAlert} />

        <EditModal editIndex={editIndex} openModal={openModal} setOpenModal={setOpenModal} />
      </Stack>
    </BaseLayout>
  );
}

export default AddMembers;
