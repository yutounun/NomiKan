import { Stack, Typography } from "@mui/material";
import React from "react";
import "./MyHeader.scss";

class Props {
  value?: string = "Title";
}
function MyHeader(props: Props) {
  const { value } = props;
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      data-testid="header"
      mt={3}
      sx={{
        backgroundColor: "white",
        position: "fixed",
        top: 0,
      }}
    >
      <Typography variant="h1">{value}</Typography>
    </Stack>
  );
}

export default MyHeader;
