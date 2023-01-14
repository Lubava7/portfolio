import wc from "./Work.module.css";
import { workArray } from "./WorkList";

const Work = () => {
  return (
    <div id="my_works" className={wc.work_content}>
      {workArray.map((item) => (
        <div key={item.id} className={wc.project_card}>
          {item.image.map((img) => (
            <div
              style={{
                backgroundImage: `url(${img})`,
              }}
              className={wc.img_back}
              key={item.id}
            >
              <div className={wc.text_box}>
                <div className={wc.text}>
                  <h1> {item.title} </h1>
                  <p> {item.description} </p>

                  <div className={wc.span_box}>
                    {item.stack.map((el) => (
                      <span key={el}>{el}</span>
                    ))}
                  </div>
                  <p className={wc.link}>{item.link}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Work;
