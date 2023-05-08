import { useState, useCallback } from "react";

import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

import Button from "@mui/material/Button";

import { MainWrapper } from "./styled";

const Main = () => {
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
      label: "_about",
      path: "/portfolio/about",
    },
    {
      label: "_contacts",
      path: "/portfolio/contacts",
    },
    {
      label: "_works",
      path: "/portfolio/works",
    },
    {
      label: "_CV",
      path: "/portfolio/cv",
    },
  ];

  return (
    <MainWrapper>
      {tabs.map((el, index) => (
        <Button
          onClick={() => handleClick(index)}
          key={el.label}
          sx={{
            borderTop:
              activeTab === index ? `1px solid #ffe919` : `1px solid #393737`,
          }}
        >
          <Link
            sx={{
              color: activeTab === index ? `#FFFFFF` : `#393737`,
            }}
            component={RouterLink}
            to={el.path}
          >
            {el.label}
          </Link>
        </Button>
      ))}
    </MainWrapper>
  );
};

export default Main;
