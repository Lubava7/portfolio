import React from "react";

import { CVarray } from "./CVinterface";

import { Icon } from "@iconify/react";

import { CVWrapper } from "./styled";

const CVworks = () => {
  return (
    <CVWrapper>
      {CVarray.map((el) => (
        <div key={el.id}>
          {/* <h2>Web Developer</h2> */}
          <p>{el.compName}</p>
          <div>
            {/* <p>
              <Icon icon="fa-solid:calendar-alt" color="#333" /> {el.monthFrom}
              {el.yearFrom} - {el.monthTo} {el.yearTo}
            </p> */}
            {/* <p>
              <Icon icon="ic:outline-location-on" color="#333" /> remote
            </p> */}
          </div>
          {el.tasks.map((task) => (
            <p key={Math.random().toString(36).substring(2, 9)}> • {task}</p>
          ))}
        </div>
      ))}
    </CVWrapper>
  );
};

export default CVworks;
