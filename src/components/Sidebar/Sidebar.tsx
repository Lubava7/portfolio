import React, { useState, useCallback, useEffect } from "react";

import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import Contact from "src/components/Contact/Contact";
import AboutMe from "src/components/AboutMe/AboutMe";
import CVworks from "src/components/CVdata/CVworks";
import Work from "src/components/Work/Work";

import { Icon } from "@iconify/react";

import { SidebarWrapper } from "./styled";

type Anchor = "left";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(() => {
    const storedValue = localStorage.getItem("activeTab");
    return storedValue !== null ? parseInt(storedValue) : 0;
  });

  const handleClick = useCallback((index: any) => {
    setActiveTab(index);
    localStorage.setItem("activeTab", index);
  }, []);

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

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

      setState({ ...state, [anchor]: open });
    };

  const tabs = [
    {
      label: "_about",
      component: <AboutMe />,
      path: "/portfolio/about",
    },
    {
      label: "_contacts",
      component: <Contact />,
      path: "/portfolio/contacts",
    },
    {
      label: "_works",
      component: <Work />,
      path: "/portfolio/works",
    },
    {
      label: "_CV",
      component: <CVworks />,
      path: "/portfolio/cv",
    },
  ];

  return (
    <SidebarWrapper>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <Icon icon="mdi:burger" color="white" width="35" height="35" />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
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
                  <ListItem key={el.label} disablePadding>
                    <Link to={el.path} component={RouterLink}>
                      <ListItemText primary={el.label} />
                    </Link>
                  </ListItem>
                ))}
              </List>
              <Divider />
            </Box>
          </Drawer>
        </React.Fragment>
      ))}
    </SidebarWrapper>
  );
};

export default Sidebar;
