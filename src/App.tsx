import "./App.css";
import PageLayout from "./layouts/PageLayout";
import CaseData from "./components/CaseData/CaseData";
import Work from "./components/Work/Work";

function App() {
  return (
    <PageLayout>
      <div className="main-content">
        <CaseData name={"Liubava Kanivetc"} age={22} exp={"1 - 3"} />
        <Work />
      </div>
    </PageLayout>
  );
}

export default App;
