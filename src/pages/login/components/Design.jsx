import React from "react";
import Lottie from "lottie-react";
import programming_animation from "../../../assets/animations/programming_animation.json";
import { Box, Stack,Typography,useTheme } from "@mui/material";

const Design = () => {
    const theme = useTheme();
  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"100vh"}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "Bold",
          color: "text.primary",
          [theme.breakpoints.down("md")]: {
            fontSize: "1.8rem",
          },
        }}
      >
        Online Contest For SMUCT Students
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: "Bold",
          color: "text.secondary",
          [theme.breakpoints.down("md")]: {
            fontSize: ".9rem",
          },
        }}
      >
        Browse our online coding contests. Participating is completely free!
      </Typography>
      <Box>
        <Lottie animationData={programming_animation} loop={true} />
      </Box>
    </Stack>
  );
};

export default React.memo(Design);
