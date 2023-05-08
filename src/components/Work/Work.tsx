import { useState, useCallback } from "react";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import { WrapperBox } from "./styled";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import {
  // cra,
  // solar,
  // ytcopy,
  portfolio,
  // booklist,
  rixap,
  textTestComp,
} from "./WorkList";

const Work = () => {
  const [activeTab, setActiveTab] = useState(() => {
    const storedValue = localStorage.getItem("activeTab");
    return storedValue !== null ? parseInt(storedValue) : 0;
  });

  const handleClick = useCallback((index: any) => {
    setActiveTab(index);
    localStorage.setItem("activeTab", index);
  }, []);

  const tabs = [
    {
      label: "Solar System",
      // component: solar,
      component: textTestComp[2],
      img: "https://github.com/Lubava7/portfolio/blob/main/src/images/screenshots/solar_system.jpg?raw=true",
      link: "https://lubava7.github.io/solar-system/",
    },

    {
      label: "YouTube copy",
      // component: ytcopy,
      component: textTestComp[1],
      img: "https://github.com/Lubava7/portfolio/blob/main/src/images/screenshots/BobTube.jpg?raw=true ",
      link: "https://github.com/Lubava7",
    },
    {
      label: "Portfolio",
      component: portfolio,
      // component: textTestComp[4],
      img: "https://github.com/Lubava7/port2/blob/master/src/images/img/dmitry.png?raw=true",
      link: "https://lubava7.github.io/dmitry-zakaz/",
    },
    {
      label: "Medcross RIXAP",
      component: rixap,
      // component: textTestComp[4],
      img: "",
      link: "https://rixap.ru/",
    },
  ];

  return (
    <WrapperBox>
      <Container>
        {tabs.map((el, index) => (
          <Button
            onClick={() => handleClick(index)}
            key={el.label}
            sx={{
              borderTop: "1px solid #393737",
              borderRight: " 1px solid #393737",
              borderBottom: " 1px solid #393737",
            }}
          >
            <Link
              sx={{
                color: activeTab === index ? `#efca88` : `#a1a09d`,
              }}
              component={RouterLink}
              to={""}
            >
              <span>TS</span>
              {el.label}
            </Link>
          </Button>
        ))}
      </Container>
      <Container>
        <SyntaxHighlighter
          language="javascript"
          style={vscDarkPlus}
          showLineNumbers={true}
        >
          {tabs[activeTab].component}
        </SyntaxHighlighter>
        <a href={tabs[activeTab].link} target="_blank" rel="noreferrer">
          &lt;&gt;See_project&lt;/&gt;
        </a>
      </Container>
    </WrapperBox>
  );
};

export default Work;
