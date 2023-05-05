import { lazy } from "react";

const LazyPage = (path: string) => {
  const Component = lazy(() => import(`../../components/${path}`));
  return Component;
};

export const MAIN_PAGE = lazy(() => import("src/pages/MainPage/Main"));
export const PORT_PAGE = lazy(() => import("src/pages/MainPage/Main"));

export const ABOUT_PAGE = LazyPage("AboutMe/AboutMe");
export const CONTACTS_PAGE = LazyPage("Contact/Contact");
export const CV_PAGE = LazyPage("CVdata/CVworks");
export const WORKS_PAGE = LazyPage("Work/Work");
