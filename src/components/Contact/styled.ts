import { styled } from "@mui/system";

import Box from "@mui/material/Box";

export const ContactWrapper = styled(Box)({
  width: "95%",
  height: "100vh",
  maxWidth: "900px",
  borderTop: "2px solid #393737",
  borderRight: "2px solid #393737",
  backgroundColor: "#1e1e1e",
  pre: {
    backgroundColor: "transparent",
    "&::-webkit-scrollbar": {
      width: 0,
      height: 0,
    },
  },
});

export const styles = {
  pre: {
    backgroundColor: "#1e1e1e",
    "&::-webkit-scrollbar": {
      width: 0,
      height: 0,
    },
  },
};
