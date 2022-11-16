import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#0400ff0d",
    },
    otherColor: {
      main: "#1D1C5B",
    },
    text: {
      primary: "#1D1C5B",
      secondary: "#191A21",
    },
  },
  //    components:{
  //     MuiButton:{
  //         defaultProps:{
  //             disableRipple:true
  //         }
  //     }
  //    }
});
export const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#21222C",
    },
    secondary: {
      main: "#282A36",
    },
    otherColor: {
      main: "#50FA7B",
    },
    text: {
      primary: "#50FA7B",
      secondary: "#fff",
    },
  },
});
