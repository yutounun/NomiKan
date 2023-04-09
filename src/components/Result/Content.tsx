import { Stack } from "@mui/material";
import React, { useState } from "react";
import EditModal from "components/InputPercentage/Organisms/EditModal";
import MyButton from "components/Commons/Atoms/MyButton";
import { useNomikanStore } from "stores/nomikan";
import MembersList from "components/InputPercentage/Organisms/MembersList";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import { useNavigate } from "react-router-dom";

class Props {
  setOpen!: (value: boolean) => void;

  setAlertLabel!: (value: string) => void;
}

interface IMember {
  name: string;
  ratio: number;
}

function Content({ setOpen, setAlertLabel }: Props) {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [editIndex, setEditIndex] = useState(0);
  const [members, setMembers] = useNomikanStore((state) => [state.members, state.setMembers]);
  const [localMemberInfo, setLocalMemberInfo] = useState<IMember[]>(members);

  /** save member information on store and navigate to result page */
  const handleClickRegButton = () => {
    // TODO: navigate to result page
    setMembers(localMemberInfo);
    navigate("/result");
  };

  const onHandleEdit = (index: number) => {
    setEditIndex(index);
    setOpenModal(true);
  };

  const closeModal = (ratios: number) => {
    const rtn = members.map((member: IMember, index) => {
      // change the edited ratio value on the modal
      if (index === editIndex) {
        // eslint-disable-next-line no-param-reassign
        member.ratio = ratios;
      }
      return member;
    });
    setLocalMemberInfo(rtn);
  };

  // check if sum of all ratios is 100
  const showsRegBtn = () => {
    const sum = localMemberInfo.reduce((sums, member) => sums + member.ratio, 0);
    return sum === 100;
  };

  return (
    <Stack
      direction="column"
      alignItems="center"
      mt={10}
      width="100%"
      gap="2em"
      sx={{ maxWidth: "80%" }}
    >

      {/* members */}
      <MembersList
        memberInfo={localMemberInfo}
        onHandleEdit={onHandleEdit}
      />

      {/* 「登録」Button */}
      <MyButton
        startIcon={<DoneOutlineIcon />}
        onClick={handleClickRegButton}
        value="登録"
        disabled={!showsRegBtn()}
        variant="contained"
        sx={{ borderRadius: "30px", width: { lg: "60%", xs: "60%" }, height: { md: "3em" } }}
      />

      <EditModal
        editIndex={editIndex}
        openModal={openModal}
        setOpenModal={setOpenModal}
        closeModal={closeModal}
        localMemberInfo={localMemberInfo}
        setLocalMemberInfo={setLocalMemberInfo}
      />
    </Stack>

  );
}

export default Content;
