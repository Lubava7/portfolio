import "./App.css";
import PageLayout from "./layouts/PageLayout";
import CaseData from "./components/CaseData/CaseData";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Main from "./components/MainPage/Main";

import MatrixLayout from "../src/layouts/MatrixLayout";

function App() {
  return (
    <>
      {/* <PageLayout> */}
      <div className="main-content">
        <div className="one">
          <Main />
        </div>
        <div className="two">
          <CaseData name={"Liubava Kanivetc"} age={22} exp={"1.5"} />
        </div>
        <div className="three">
          <MatrixLayout timeout={100} />
        </div>
        <div className="four">
          <Work />
        </div>
        <div className="five">
          <Contact />
        </div>
      </div>
      {/* </PageLayout> */}
    </>
  );
}

export default App;
