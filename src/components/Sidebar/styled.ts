import { styled } from "@mui/material";
import Box from "@mui/material/Box";

export const SidebarWrapper = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  "@media (min-width:675px)": {
    display: "none",
  },
});
