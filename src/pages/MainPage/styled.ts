import { styled } from "@mui/material";
import Box from "@mui/material/Box";

export const MainWrapper = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#1e1e1e",
  color: "white",
  overflowY: "scroll",
  transition: "1s all",
  borderBottom: "1px solid #393737",
  "@media (max-width:675px)": {
    display: "none",
  },
  "@media (min-width:1200px)": {
    maxWidth: "100%",
    width: "100%",
  },
  "::-webkit-scrollbar": {
    width: 0,
    height: 0,
  },
  "& .MuiButton-root": {
    fontFamily: "Poppins,sans-serif",
    width: "25%",
    maxWidth: 180,
    height: "45px",
    textTransform: "lowercase",
    borderRadius: 0,
    backgroundColor: "#1e1e1e",
    border: "1px solid #393737",
    ":hover": {
      color: "white",
      backgroundColor: "#1e1e1e",
      borderTop: "1px solid #ffe919",
      transition: ".5s all",
    },
    "& .MuiLink-root": {
      // color: "#393737",
      textDecoration: "none",
    },
  },
  // "& .MuiContainer-root:nth-of-type(1)": {
  //   zIndex: 2,
  //   width: "100%",
  //   transition: "1s all",
  //   display: "flex",
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   position: "fixed",
  //   borderBottom: "1px solid #393737",

  // },
});

export const globalStyle = {
  animation: "fadeIn .5s ease-in-out",
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
      transform: "translateY(5rem)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
};
