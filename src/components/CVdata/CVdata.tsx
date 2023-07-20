import { CVWrapper } from "./styled";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import { my_cv_data } from "./CVinterface";

// expirience : more than 1.7 years

const my_data = `
Lubava Kanivetc - Web Developer 

Core technologies :
   - React,Redux
   - Mui styled,
   - JavaScript, TypeScript,
   - Node, Express,
   - PostgreSQL,
   - Git, Linux
   - HTML, Css,

 Additional courses:
   - CS50 - Computer Science
   - OSSU - CS

   ${my_cv_data}





`;

const CVdata = () => {
  return (
    <CVWrapper>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        showLineNumbers={true}
      >
        {my_data}
      </SyntaxHighlighter>
    </CVWrapper>
  );
};

export default CVdata;
