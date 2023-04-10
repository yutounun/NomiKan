import { Stack, Typography } from "@mui/material";
import React from "react";

interface IMembersInfo {
  name: string;
  ratio: number;
}
class Props {
  membersInfo!: IMembersInfo[];

  totalCost?: number | string;
}

function MembersList({ membersInfo, totalCost } : Props) {
  /**
   * @param {IMembersInfo[]} membersInfo
   * @param {number} totalCost
   * @returns Payment amount for each member
   */
  const result = (memberInfo: IMembersInfo) => (Number(totalCost) * memberInfo.ratio) / 100;
  return (
    <Stack width="80%" mt={3}>
      {membersInfo.map((memberInfo) => (
        <Stack flexDirection="row" mb={2} key={memberInfo.name} justifyContent="space-between">
          <Typography>{memberInfo.name}</Typography>
          <Typography>
            ¥
            {result(memberInfo)}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
}

export default MembersList;
