import { styled } from "@mui/material";
import Box from "@mui/material/Box";

export const DrawerWrapper = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  "& .MuiPaper-root": {
    backgroundColor: "#1e1e1e",
    fontSize: "75%",
    padding: "35px 0 0 0",
  },
  "& .MuiList-root": {
    borderTop: "2px solid #393737",
    borderBottom: "2px solid #393737",
    "& .MuiLink-root": {
      width: "100%",
      textDecoration: "none",
      fontSize: "1.6em",
      "& .MuiTypography-root": {
        fontSize: "1.2em",
        padding: "0 0 0 15px",
        margin: "15px 0 0 0",
      },
    },
  },
};

export const SideBar = styled(Box)({
  "& .MuiButton-root": {
    p: {
      color: "#edbb61",
      textTransform: "none",
    },
  },
  "@media (min-width:675px)": {
    display: "none",
  },
});
