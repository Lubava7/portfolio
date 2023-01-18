import React from "react";
import main from "./Main.module.css";
import { Icon } from "@iconify/react";

const Main = () => {
  return (
    <div className={main.main_body}>
      <div className={main.header}>
        <p>Liubava dev</p>
        <div className={main.phone}>
          <a href="tel:+79773255335">
            <Icon icon="material-symbols:phone-callback" /> <p>+7 9773255335</p>
          </a>
          <a target="_blank" rel="noreferrer" href="https://t.me/liubava_dev">
            <Icon icon="icon-park-outline:telegram" />
            <p> @liubava_dev</p>
          </a>
        </div>
      </div>
      <div className={main.content}>
        <h1>Developer.</h1>
      </div>
      <div className={main.footer}>
        <a href="#case_data">
          <button className={main.btn}>See more</button>
        </a>
        <a href="#my_works">
          <button className={main.btn}>my works</button>
        </a>
        <div>
          <Icon icon="pixelarticons:arrow-down" />
          <Icon icon="pixelarticons:arrow-down" />
          <Icon icon="pixelarticons:arrow-down" />
        </div>
      </div>
    </div>
  );
};

export default Main;
