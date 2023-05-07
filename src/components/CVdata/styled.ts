import { styled } from "@mui/material";
import Container from "@mui/material/Container";

export const CVWrapper = styled(Container)({
  width: "100%",
  height: "100vh",
  fontFamily: "Roboto",
  color: "#FFFFFF",
  pre: {
    overflow: "scroll",
    height: "100vh",
    "&::-webkit-scrollbar": {
      width: 0,
      height: 0,
    },
  },
});
