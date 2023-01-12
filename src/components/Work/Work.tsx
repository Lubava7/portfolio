import "./Work.css";
import PageLayout from "src/layouts/PageLayout";
import { workArray } from "./WorkList";

const Work = () => {
  return (
    <PageLayout>
      <div className="all-data">
        <h1 className="evidence"> Evidence :</h1>
        <div className="work-content">
          {workArray.map((item) => (
            <div className="project-card" key={item.description}>
              <div className="img-cont">
                {/* {item.image.map((img) => (
                <div className="image">
                  <div className="clip"></div>
                  <div>
                    <img src={img} />
                  </div>
                </div>
              ))} */}
              </div>
              <h1> {item.title} </h1>
              <p> {item.description} </p>
              <div>
                {item.stack.map((el) => (
                  <span key={el}> {el} </span>
                ))}
                <address>{item.link}</address>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Work;
