import "./App.css";
import CaseData from "./components/CaseData/CaseData";

function App() {
  return (
    <div className="container">
      <div className="cont-after"></div>
      <div className="coffee-mark"></div>
      <div className="effects">
        <div className="before"></div>
        <div className="after"></div>
      </div>
      <CaseData />
    </div>
  );
}

export default App;
