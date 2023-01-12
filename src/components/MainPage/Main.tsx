import React from "react";
import main from "./Main.module.css";

const Main = () => {
  return (
    <div className={main.main_body}>
      <div className={main.header}>
        <p>Liubava dev</p>
        <div className={main.phone}>
          <a href="tel:+79773255335">+7 9773255335</a>
          <a target="_blank" rel="noreferrer" href="https://t.me/liubava_dev">
            @liubava_dev
          </a>
        </div>
      </div>
      <div className={main.content}>
        <h1>Developer</h1>
        <a href="#case_data">
          <button>See more</button>
        </a>
      </div>
    </div>
  );
};

export default Main;
