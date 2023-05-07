import { styled } from "@mui/material";
import Box from "@mui/material/Box";

export const WrapperBox = styled(Box)({
  fontFamily: "Roboto",
  width: "100%",
  maxWidth: "900px",
  padding: "50px 0 0 0",
  display: "flex",
  flexDirection: "row",
  fontSize: "75%",
  "@media (max-width:675px)": {
    flexDirection: "column",
  },
  "& .MuiButton-root": {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    "& .MuiLink-root": {
      fontSize: ".7em",
      textDecoration: "none",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      "& .MuiTypography-root": {
        fontSize: ".9em",
      },
      span: {
        color: "#1769aa",
        margin: "0 10px",
      },
    },
  },
  "& .MuiBox-root": {
    width: "100%",
    height: "600px",
    display: "flex",
    flexDirection: "column",
  },
  "& .MuiContainer-root:nth-of-type(1)": {
    width: "30%",
    maxWidth: "900px",
    display: "flex",
    flexDirection: "column",
    overflowX: "scroll",
    img: {
      width: "340px",
      height: "300px",
      filter: "blur(1px)",
    },
    "&::-webkit-scrollbar": {
      width: 0,
      height: 0,
    },
    "@media (max-width:675px)": {
      width: "100%",
      flexDirection: "row",
      flexWrap: "wrap",
      overflow: "scroll",
      "&::-webkit-scrollbar": {
        width: 0,
        height: 0,
      },
      "& .MuiButton-root": {
        width: "30%",
      },
    },
  },
  "& .MuiContainer-root:nth-of-type(2)": {
    width: "70%",
    display: "flex",
    flexDirection: "column",
    border: "1px solid #393737",
    color: "white",
    fontSize: "1.1em",
    img: {
      width: "340px",
      height: "300px",
      filter: "blur(1px)",
    },
    a: {
      textDecoration: "none",
      color: "#ce9178",
      fontSize: "1.5em",
    },
    pre: {
      "&::-webkit-scrollbar": {
        width: 0,
        height: 0,
      },
    },
    "@media (max-width:675px)": {
      width: "100%",
    },
    "&::-webkit-scrollbar": {
      width: 0,
      height: 0,
    },
  },
});
