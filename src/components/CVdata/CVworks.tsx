import React from "react";
import cv from "./CVdata.module.css";

import { CVarray } from "./CVinterface";

import { Icon } from "@iconify/react";

const CVworks = () => {
  return (
    <div>
      {CVarray.map((el) => (
        <div className={cv.work_card} key={el.id}>
          <h2>Web Developer</h2>
          <p>{el.compName}</p>
          <div className={cv.month_format}>
            <p>
              <Icon icon="fa-solid:calendar-alt" color="#333" /> {el.monthFrom}
              {el.yearFrom} - {el.monthTo} {el.yearTo}
            </p>
            <p>
              <Icon icon="ic:outline-location-on" color="#333" /> remote
            </p>
          </div>
          {el.tasks.map((task) => (
            <p key={Math.random().toString(36).substring(2, 9)}> • {task}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CVworks;
