import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import MemberInput from "components/AddMembers/Molecules/MemberInput";
import EditIcon from "@mui/icons-material/Edit";
import EditModal from "components/AddMembers/Organisms/EditModal";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import MyButton from "components/Commons/Atoms/MyButton";
import { Link } from "react-router-dom";
import { useNomikanStore } from "stores/nomikan";

class Props {
  setOpen!: (value: boolean) => void;

  setAlertLabel!: (value: string) => void;
}

function Content({ setOpen, setAlertLabel }: Props) {
  const [openModal, setOpenModal] = useState(false);
  const [editIndex, setEditIndex] = useState(0);
  const [members, setMembers] = useNomikanStore((state) => [state.members, state.setMembers]);
  const [localMemberNames, setLocalMemberNames] = useState<string[]>(members);

  /** Set members on the list and open the alert */
  const handleSetLocalMemberNames = (newName: string) => {
    let isExisting = false;

    localMemberNames.forEach((name, index) => {
      if (name === newName) {
        isExisting = true;
      }
    });

    if (isExisting) {
      setAlertLabel("同じ名前のメンバーが存在します。");
      setOpen(true);
    } else {
      setOpen(true);
      setAlertLabel("メンバーを追加しました！");
      setLocalMemberNames((prevArray) => [...prevArray, newName]);
      setMembers(localMemberNames);
    }
  };

  /** save members to Zustand store */
  const handleClickRegButton = () => {
    // set input cost on Session storage
    setMembers(localMemberNames);
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
      mt={10}
      gap="2em"
    >
      {/* TextBox with Add Button */}
      <MemberInput handleSetLocalMemberNames={handleSetLocalMemberNames} />

      {/* members */}
      <Stack justifyContent="left">
        {localMemberNames.length > 0 ? localMemberNames.map((memberName, index) => (
          <Stack flexDirection="row" mb={2} key={memberName}>
            <Typography sx={{ width: { lg: "90%", xs: "70%" } }}>{memberName}</Typography>
            <EditIcon sx={{ cursor: "pointer", width: { lg: "5%", xs: "15%" } }} onClick={() => onHandleEdit(index)} />
            <DeleteSweepIcon sx={{ cursor: "pointer", width: { lg: "5%", xs: "15%" } }} onClick={() => removeMember(index)} />
          </Stack>
        )) : <Typography fontSize={15} textAlign="center">メンバーを追加してください</Typography>}
      </Stack>

      {/* 「登録」Button */}
      <Link to="/add-members" style={{ textDecoration: "none", width: "100%", textAlign: "center" }}>
        <MyButton
          data-testid="reg-button"
          onClick={handleClickRegButton}
          disabled={localMemberNames.length === 0}
          value="登録"
          variant="contained"
          sx={{ borderRadius: "30px", width: { xs: "80%", md: "50%" }, height: { md: "3em" } }}
        />
      </Link>

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
