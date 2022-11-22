import "./CaseData.css";

type Props = {
  name: string;
  age: number;
  exp: string;
};

const CaseData = ({ name, age, exp }: Props) => {
  return (
    <div className="data-container">
      <div className="data-header">
        <h1>Case № 3</h1>
      </div>
      <div className="data-body">
        <div className="scroll-data">
          <div>
            <p>name : {name} </p>
          </div>
          <div>
            <p>age : {age} </p>
          </div>
          <div>
            <p>work experience : {exp} years</p>
          </div>
          <div>
            <p>Core technologies :</p>
            <section>
              <span>HTML</span>
              <span>React</span>
              <span>Css</span>
              <span>JavaScript</span>
              <span>StoryBook</span>
              <span>i18-next</span>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseData;
