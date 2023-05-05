import { LazyExoticComponent } from "react";

import {
  MAIN_PAGE,
  PORT_PAGE,
  ABOUT_PAGE,
  CONTACTS_PAGE,
  CV_PAGE,
  WORKS_PAGE,
} from "./pages";
import {
  MAIN_PATH,
  PORT_PATH,
  ABOUT_PATH,
  CONTACTS_PATH,
  CV_PATH,
  WORKS_PATH,
} from "./path";

interface PrivateRoute {
  path: string;
  component: LazyExoticComponent<any>;
}

export const PrivateRoutesArray: PrivateRoute[] = [
  {
    path: MAIN_PATH,
    component: MAIN_PAGE,
  },
  {
    path: PORT_PATH,
    component: PORT_PAGE,
  },
  {
    path: ABOUT_PATH,
    component: ABOUT_PAGE,
  },
  {
    path: CONTACTS_PATH,
    component: CONTACTS_PAGE,
  },
  {
    path: CV_PATH,
    component: CV_PAGE,
  },
  {
    path: WORKS_PATH,
    component: WORKS_PAGE,
  },
];
