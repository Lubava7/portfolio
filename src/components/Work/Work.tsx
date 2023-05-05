import React, { useState } from "react";

import { workArray } from "./WorkList";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { styles, boxStyles } from "./styled";

const Work = () => {
  return (
    <Box sx={styles}>
      {workArray.map((item) => (
        <Box key={item.id} sx={boxStyles}>
          <Typography>{item.link}</Typography>
          {item.stack.map((el) => (
            <Box key={el}>{el}</Box>
          ))}
          <Typography> {item.description} </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Work;
