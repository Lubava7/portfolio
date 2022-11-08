import "./CaseData.css";

const CaseData = () => {
  return (
    <div className="data-container">
      <div>
        <h1>Case № 3</h1>
      </div>
      <div>
        <div>
          <p>name :</p>
          <p>Lubava</p>
        </div>
        <div>
          <p>age :</p>
          <p>22</p>
        </div>
        <div>
          <p>work experience :</p>
          <p>1-3 years</p>
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
  );
};

export default CaseData;
