import { Stack, Typography } from "@mui/material";
import React from "react";
import GoBack from "@mui/icons-material/ArrowBackIos";

class Props {
  value?: string = "Title";

  hideGoBack?: boolean = false;
}
function MyHeader({ value, hideGoBack }: Props) {
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <>
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

      {/* In case go back btn isn't hidden */}
      {!hideGoBack && (
        <Stack
          justifyContent="left"
          alignItems="center"
          mt={3}
          sx={{
            backgroundColor: "white",
            position: "fixed",
            top: 0,
            left: 20,
          }}
        >
          <GoBack onClick={handleGoBack} />
        </Stack>
      )}
    </>
  );
}

export default MyHeader;
