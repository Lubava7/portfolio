import "./App.css";
import PageLayout from "./layouts/PageLayout";
import CaseData from "./components/CaseData/CaseData";
import Work from "./components/Work/Work";

function App() {
  return (
    <PageLayout>
      <div className="main-content">
        <CaseData />
        <Work />
      </div>
    </PageLayout>
  );
}

export default App;
