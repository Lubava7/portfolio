import { styled } from "@mui/material";
import Container from "@mui/material/Container";

export const AboutMeWrapper = styled(Container)({
  "& .MuiContainer-root:nth-of-type(1)": {
    border: "2px solid #e5e510",
    width: "100%",
    fontSize: "53px",
    textAlign: "center",
    padding: 0,
    p: {
      height: "50%",
      margin: 0,
      padding: "10px 0 0 0",
    },
    "p:nth-of-type(1)": {
      color: "#e5e510",
    },
    "p:nth-of-type(2)": {
      backgroundColor: "#e5e510",
      color: "#1e1e1e",
      fontSize: "2.9rem",
    },
  },
  "& .MuiContainer-root:nth-of-type(2)": {
    perspective: "calc(100vh * 0.4)",

    div: {
      color: "#e5e510",
      textAlign: "center",
      position: "relative",
      width: "100%",
      left: "0",
      bottom: "-5%",
      height: " 200%",
      overflow: "hidden",
      transformOrigin: "50% 70%",
      transform: "rotate3d(1, 0, 0, 40deg)",
      maskImage:
        "linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.66),rgba(0, 0, 0, 1))",
    },
  },
});
