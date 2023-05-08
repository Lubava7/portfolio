import React, { useState, useCallback } from "react";

import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import Contact from "src/components/Contact/Contact";
import AboutMe from "src/components/AboutMe/AboutMe";
import CVdata from "src/components/CVdata/CVdata";
import Work from "src/components/Work/Work";

import { DrawerWrapper, SideBar } from "./styled";

type Anchor = "left";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(() => {
    const storedValue = localStorage.getItem("activeTab1");
    return storedValue !== null ? parseInt(storedValue) : 0;
  });

  const handleClick = useCallback((index: any) => {
    setActiveTab(index);
    localStorage.setItem("activeTab1", index);
  }, []);

  const [left, setLeft] = useState(false);

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setLeft(open);
    };

  const tabs = [
    {
      label: "_about",
      component1: <AboutMe />,
      path: "/portfolio/about",
    },
    {
      label: "_contacts",
      component1: <Contact />,
      path: "/portfolio/contacts",
    },
    {
      label: "_works",
      component1: <Work />,
      path: "/portfolio/works",
    },
    {
      label: "_CV",
      component1: <CVdata />,
      path: "/portfolio/cv",
    },
  ];

  return (
    <SideBar>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <p>&lt;&gt;openSidebar()&lt;/&gt;</p>
          </Button>
          <Drawer
            sx={DrawerWrapper}
            anchor={anchor}
            open={left}
            onClose={toggleDrawer(anchor, false)}
          >
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              <List>
                {tabs.map((el, index) => (
                  <Link
                    onClick={() => handleClick(index)}
                    sx={{
                      color: activeTab === index ? `#edbb61` : `#FFFFFF`,
                    }}
                    key={el.label}
                    to={el.path}
                    component={RouterLink}
                  >
                    <ListItem disablePadding>
                      <ListItemText primary={el.label} />
                    </ListItem>
                  </Link>
                ))}
              </List>
              <Divider />
            </Box>
          </Drawer>
        </React.Fragment>
      ))}
    </SideBar>
  );
};

export default Sidebar;
