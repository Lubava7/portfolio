import "./App.css";
import PageLayout from "./layouts/PageLayout";
import CaseData from "./components/CaseData/CaseData";
import Work from "./components/Work/Work";

import MatrixLayout from "../src/layouts/MatrixLayout";

function App() {
  return (
    <PageLayout>
      {/* <div className="main-content">
          <CaseData name={"Liubava Kanivetc"} age={22} exp={"1.5"} />
          <Work />
        </div> */}
      <div className="main-content">
        <div className="one">
          <CaseData name={"Liubava Kanivetc"} age={22} exp={"1.5"} />
        </div>
        <div className="two">
          <MatrixLayout timeout={100} />
        </div>
        <div className="three">
          <Work />
        </div>
        <div className="four">
          <Work />
        </div>
      </div>
    </PageLayout>
  );
}

export default App;
