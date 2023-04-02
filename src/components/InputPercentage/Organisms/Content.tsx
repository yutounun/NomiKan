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

interface IMember {
  name: string;
  ratio: number;
}

function Content({ setOpen, setAlertLabel }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const [editIndex, setEditIndex] = useState(0);
  const [members, setMembers] = useNomikanStore((state) => [state.members, state.setMembers]);
  const membersNames = () => members.map((member: IMember) => member.name);
  const [localMemberNames] = useState<string[]>(membersNames);
  const [localMemberInfo, setLocalMemberInfo] = useState<IMember[]>([]);
  const [localRatios, setLocalRatios] = useState<number[]>([]);

  const memberInfo = () => {
    const rtn = [];
    for (let i = 0; i < localMemberNames.length; i++) {
      rtn.push({
        name: localMemberNames[i],
        ratio: localRatios[i]
      });
    }
    return rtn;
  };

  /** save member information on store and navigate to result page */
  const handleClickRegButton = () => {
    // TODO: navigate to result page
    setMembers(localMemberInfo);
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
    const sum = localRatios.reduce((a, b) => a + b, 0);
    console.log("🚀 ~ file: Content.tsx:68 ~ showsRegBtn ~ sum:", sum);
    return sum === 100;
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
        memberInfo={memberInfo()}
        onHandleEdit={onHandleEdit}
      />

      {/* 「登録」Button */}
      <a href="/result" data-testid="reg-btn" style={{ textDecoration: "none", width: "100%", textAlign: "center" }}>
        <MyButton
          startIcon={<DoneOutlineIcon />}
          onClick={handleClickRegButton}
          value="登録"
          disabled={!showsRegBtn()}
          variant="contained"
          sx={{ borderRadius: "30px", width: { xs: "80%", md: "50%" }, height: { md: "3em" } }}
        />
      </a>

      <EditModal
        editIndex={editIndex}
        openModal={openModal}
        setOpenModal={setOpenModal}
        closeModal={closeModal}
        localRatios={localRatios}
        setLocalRatios={setLocalRatios}
      />
    </Stack>

  );
}

export default Content;
