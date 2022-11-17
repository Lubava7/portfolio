import "./Work.css";

import { workArray } from "./WorkList";

const Work = () => {
  return (
    <div className="work-content">
      {workArray.map((item) => (
        <div className="project-card">
          <div className="layout-card"></div>
          <div className="header-cont">
            <div>
              <h1> {item.title} </h1>
              <p> {item.description} </p>
              <div>
                {item.stack.map((el) => (
                  <span> {el} </span>
                ))}
                <address>{item.link}</address>
              </div>
            </div>
            <div>
              {item.image.map((img) => (
                <div className="image">
                  <div className="clip"></div>
                  <div className="img-cont">
                    <img src={img} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
