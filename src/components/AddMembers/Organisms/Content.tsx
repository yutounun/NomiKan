import { Stack } from "@mui/material";
import React, { useState } from "react";
import MemberInput from "components/AddMembers/Molecules/MemberInput";
import EditModal from "components/AddMembers/Organisms/EditModal";
import MyButton from "components/Commons/Atoms/MyButton";
// TODO: use Link instead of <a>
import { useNavigate } from "react-router-dom";
import { useNomikanStore } from "stores/nomikan";
import MembersList from "components/AddMembers/Organisms/MembersList";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

interface IMember {
  name: string;
  ratio: number;
}
class Props {
  setOpen!: (value: boolean) => void;

  setAlertLabel!: (value: string) => void;
}

function Content({ setOpen, setAlertLabel }: Props) {
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);
  const [editIndex, setEditIndex] = useState(0);
  const [members, setMembers] = useNomikanStore((state) => [state.members, state.setMembers]);
  const membersNames = () => members.map((member: IMember) => member.name);
  const [localMemberNames, setLocalMemberNames] = useState<string[]>(membersNames);

  /** Set members on the list and open the alert */
  const handleSetLocalMemberNames = (newName: string) => {
    let isDuplicated = false;

    localMemberNames.forEach((name) => {
      if (name === newName) {
        isDuplicated = true;
      }
    });

    // if input name is duplicated, pop up the warning
    // if not pop up the information to the user
    if (isDuplicated) {
      setAlertLabel("同じ名前のメンバーが存在します。");
      setOpen(true);
    } else {
      setOpen(true);
      setAlertLabel("メンバーを追加しました！");
      setLocalMemberNames((prevArray) => [...prevArray, newName]);
      const rtn = localMemberNames.map((name) => {
        const ans = {
          name,
          ratio: 0
        };
        return ans;
      });

      setMembers(rtn);
    }
  };

  /** save members to Zustand store */
  const handleClickRegButton = () => {
    // set input cost on Session storage
    const rtn = localMemberNames.map((name) => {
      const ans = {
        name,
        ratio: 0
      };
      navigate("/input-percentage");
      return ans;
    });

    setMembers(rtn);
  };

  // remove the member from the list
  const removeMember = (index: number) => {
    const filteredNames = localMemberNames.filter((name, i) => i !== index);
    setLocalMemberNames(filteredNames);

    // open the alert
    setOpen(true);
    setAlertLabel("メンバーを削除しました！");
  };

  const onHandleEdit = (index: number) => {
    setEditIndex(index);
    setOpenModal(true);
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
      {/* TextBox with Add Button */}
      <MemberInput handleSetLocalMemberNames={handleSetLocalMemberNames} />

      {/* members */}
      <MembersList
        localMemberNames={localMemberNames}
        onHandleEdit={onHandleEdit}
        removeMember={removeMember}
      />

      {/* 「登録」Button */}
      <MyButton
        data-testid="reg-btn"
        startIcon={<DoneOutlineIcon />}
        onClick={handleClickRegButton}
        disabled={localMemberNames.length === 0}
        value="登録"
        variant="contained"
        sx={{ borderRadius: "30px", width: { lg: "60%", xs: "60%" }, height: { md: "3em" } }}
      />

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
