import React from "react";
import matrix from "./MatrixPage.module.css";
import MatrixLayout from "src/layouts/MatrixLayout";

const MatrixPage = () => {
  return (
    <MatrixLayout timeout={100}>
      <div className={matrix.body}>
        {/* <h2>&lt; Matrix /&gt;</h2> */}

        <h3>&lt; WORK IS UNDERWAY /&gt;</h3>
      </div>
    </MatrixLayout>
  );
};

export default MatrixPage;
