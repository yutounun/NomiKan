import { Stack, Typography } from "@mui/material";
import React from "react";
import GoBack from "@mui/icons-material/ArrowBackIos";

class Props {
  value?: string = "Title";

  hideGoBack?: boolean = false;

  reversedColor?: boolean = false;
}
function MyHeader({ value, hideGoBack, reversedColor }: Props) {
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <>
      {
        reversedColor
          ? (
            <Stack
              justifyContent="center"
              alignItems="center"
              data-testid="header"
              mt={2.8}
              sx={{
                backgroundColor: "#EBF3FF",
                position: "fixed",
                top: 0,
              }}
            >
              <Typography variant="h1" sx={{ color: "#4E31AA", fontSize: { lg: "40px", xs: "25px" } }}>{value}</Typography>
            </Stack>
          )
          : (
            <Stack
              justifyContent="center"
              alignItems="center"
              data-testid="header"
              mt={2.8}
              sx={{
                backgroundColor: "white",
                position: "fixed",
                top: 0,
              }}
            >
              <Typography variant="h1" sx={{ color: "#4E31AA", fontSize: { lg: "40px", xs: "25px" } }}>{value}</Typography>
            </Stack>
          )
}

      {/* In case go back btn isn't hidden */}
      {!hideGoBack && (
        <Stack
          justifyContent="left"
          alignItems="center"
          mt={3}
          sx={{
            backgroundColor: "#EBF3FF",
            position: "fixed",
            top: 0,
            left: { xs: 20, lg: 50 },
          }}
        >
          <GoBack onClick={handleGoBack} />
        </Stack>
      )}
    </>
  );
}

export default MyHeader;
