import { styled } from "@mui/material";
import Container from "@mui/material/Container";

export const CVWrapper = styled(Container)({
  width: "100%",
  // height: "100%",
  overflowY: "scroll",
  padding: "0 0 100px 0",
  "&::-webkit-scrollbar": {
    width: 0,
    height: 0,
  },
});
