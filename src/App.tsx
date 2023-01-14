import "./App.css";
import CVdata from "./components/CVdata/CVdata";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Main from "./components/MainPage/Main";
import MatrixPage from "./components/MatrixPage/MatrixPage";

function App() {
  return (
    <>
      <div className="main-content">
        <div className="one">
          <Main />
        </div>
        <div className="two">
          <CVdata name={"Liubava Kanivetc"} age={22} exp={"1.5"} />
        </div>
        <div className="three">
          <MatrixPage />
        </div>
        <div className="four">
          <Work />
        </div>
        <div className="five">
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
