import React, { ReactElement } from "react";
import "./PageLayout.css";

type Props = {
  children: ReactElement;
};

const PageLayout = ({ children }: Props) => {
  return (
    <div className="container">
      <div className="cont-after"></div>
      <div className="coffee-mark"></div>
      <div className="effects">
        <div className="before"></div>
        <div className="after"></div>
      </div>
      {children}
    </div>
  );
};

export default PageLayout;
