import { Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import GoBack from "@mui/icons-material/ArrowBackIos";

class Props {
  value?: string = "Title";

  hideGoBack?: boolean = false;
}
function MyHeader({ value, hideGoBack }: Props) {
  const navigate = useNavigate();
  const handleOnClickGoBack = () => {
    navigate(-1);
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
          data-testid="header"
          mt={3}
          sx={{
            backgroundColor: "white",
            position: "fixed",
            top: 0,
            left: 20,
          }}
        >
          <GoBack onClick={handleOnClickGoBack} />
        </Stack>
      )}
    </>
  );
}

export default MyHeader;
