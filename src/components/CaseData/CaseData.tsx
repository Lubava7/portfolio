import React, { useEffect, useState } from "react";
import "./CaseData.css";

type Props = {
  name: string;
  age: number;
  exp: string;
};

const CaseData = ({ name, age, exp }: Props) => {
  useEffect(() => {}, []);

  return (
    <>
      <div className="data-container" id="case_data">
        <div className="data-header">
          <h1>Case № 3</h1>
        </div>
        <div className="data-body">
          <div className="scroll-data">
            <div className="bold_text">
              <p>name :</p>
              <p>{name}</p>
            </div>
            <div className="bold_text">
              <p>age : </p>
              <p> {age}</p>
            </div>
            <div className="bold_text">
              <p>work experience : </p>
              <p>{exp} years</p>
            </div>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Lubava7"
              >
                GitHub
              </a>
            </div>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://hh.ru/applicant/resumes/view?resume=d5f45eb6ff08d8d9930039ed1f69654b635352"
              >
                Resume HH
              </a>
            </div>
            <div className="bold_text_2">
              <p>Core technologies :</p>
              <section>
                <span>HTML, Css</span>
                <span>React</span>
                <span>Sass, Scss</span>
                <span>JavaScript, TypeScript</span>
                <span>Node, Express</span>
                <span>PostgreSQL</span>
                <span>Git, Linux</span>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseData;
