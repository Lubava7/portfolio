import React, { ReactElement } from "react";
import layout from "./PageLayout.module.css";

import Sidebar from "src/components/Sidebar/Sidebar";
import Main from "src/pages/MainPage/Main";

type Props = {
  children: ReactElement;
};

const PageLayout = ({ children }: Props) => {
  return (
    <div className={layout.layout}>
      <Sidebar />
      <Main />
      {children}
    </div>
  );
};

export default PageLayout;
