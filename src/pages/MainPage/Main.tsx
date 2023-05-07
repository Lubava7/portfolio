import React, { useState, useCallback } from "react";
import { useLocation } from "react-router-dom";

import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { Icon } from "@iconify/react";

import { MainWrapper, globalStyle } from "./styled";

import AboutMe from "src/components/AboutMe/AboutMe";
import Contact from "src/components/Contact/Contact";
import Work from "src/components/Work/Work";
import CVdata from "src/components/CVdata/CVdata";

const Main = () => {
  const [activeTab, setActiveTab] = useState(() => {
    const storedValue = localStorage.getItem("activeTab");
    return storedValue !== null ? parseInt(storedValue) : 0;
  });

  const location = useLocation();
  const { pathname } = location;

  const handleClick = useCallback((index: any) => {
    setActiveTab(index);
    localStorage.setItem("activeTab", index);
  }, []);

  const tabs = [
    {
      label: "_about",
      path: "/portfolio/about",
      // component: <AboutMe />,
    },
    {
      label: "_contacts",
      path: "/portfolio/contacts",
      // component: <Contact />,
    },
    {
      label: "_works",
      path: "/portfolio/works",
      // component: <Work />,
    },
    {
      label: "_CV",
      path: "/portfolio/cv",
      // component: <CVdata />,
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
      {/* <Container>{tabs[activeTab].component}</Container> */}
    </MainWrapper>
  );
};

export default Main;
