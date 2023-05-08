import Box from "@mui/material/Box";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import { ContactWrapper } from "./styled";

import { code } from "./codeVar";

const Contact = () => {
  return (
    <ContactWrapper>
      <Box>
        <SyntaxHighlighter
          language="javascript"
          style={vscDarkPlus}
          showLineNumbers={true}
        >
          {code}
        </SyntaxHighlighter>
      </Box>
    </ContactWrapper>
  );
};

export default Contact;
