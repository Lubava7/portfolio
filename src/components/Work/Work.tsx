import "./Work.css";

import { workArray } from "./WorkList";

const Work = () => {
  return (
    <div className="all-data">
      <h1 className="evidence"> Evidence :</h1>
      <div className="work-content">
        {workArray.map((item) => (
          <div className="project-card">
            <div className="header-cont">
              <div className="proj-info">
                <div className="img-cont">
                  {item.image.map((img) => (
                    <div className="image">
                      <div className="clip"></div>
                      <div>
                        <img src={img} />
                      </div>
                    </div>
                  ))}
                </div>
                <h1> {item.title} </h1>
                <p> {item.description} </p>
                <div>
                  {item.stack.map((el) => (
                    <span> {el} </span>
                  ))}
                  <address>{item.link}</address>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
