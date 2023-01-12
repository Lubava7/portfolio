import React from "react";
import matrix from "./MatrixPage.module.css";
import MatrixLayout from "src/layouts/MatrixLayout";

const MatrixPage = () => {
  return (
    <MatrixLayout timeout={100}>
      <div className={matrix.body}>
        <body>
          <code>
            <p>&lt; Matrix /&gt;</p>
          </code>
        </body>
      </div>
    </MatrixLayout>
  );
};

export default MatrixPage;
