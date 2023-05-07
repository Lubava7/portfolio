import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { ContactWrapper, styles } from "./styled";

import { code } from "./codeVar";

const Contact = () => {
  const lines = code.split("\n");
  const formattedCode = lines
    .map((line, index) => `${index + 1} ${line}`)
    .join("\n");

  return (
    <ContactWrapper>
      <Box>
        <SyntaxHighlighter
          language="javascript"
          style={vscDarkPlus}
          // sx={styles}
          showLineNumbers={true}
        >
          {code}
        </SyntaxHighlighter>
      </Box>
    </ContactWrapper>
  );
};

export default Contact;
