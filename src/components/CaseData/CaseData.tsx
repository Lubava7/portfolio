// import React, { useEffect, useState } from "react";
import style from "./CaseData.module.css";

import { Icon } from "@iconify/react";

type Props = {
  name: string;
  age: number;
  exp: string;
};

const CaseData = ({ name, age, exp }: Props) => {
  return (
    <>
      <div className={style.data_container} id="case_data">
        <div className={style.data_block}>
          <h2>{name}</h2>
          <p className={style.i}>Web Developer</p>
          <div className={style.info}>
            <p>
              <Icon icon="bi:envelope-heart" color="#fbfcfc" />
              <a href="#send_email">liubava.k@bk.ru</a>
            </p>
            <p>
              <Icon icon="ic:round-local-phone" color="#fbfcfc" />
              <a href="tel:+79773255335">+7 9773255335</a>
            </p>
            <p>
              <Icon icon="ic:outline-location-on" color="#fbfcfc" />
              <a href="#">planet Earth</a>
            </p>
            <p>
              <Icon icon="dashicons:admin-site-alt3" color="#fbfcfc" />
              <a
                href=" https://lubava7.github.io/portfolio/"
                target="_blank"
                rel="noreferrer"
              >
                site portfolio
              </a>
            </p>
            <p>
              <Icon icon="carbon:logo-github" color="#fbfcfc" />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Lubava7"
              >
                GitHub
              </a>
            </p>
            <p>
              <Icon icon="carbon:letter-hh" color="#fbfcfc" />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://hh.ru/applicant/resumes/view?resume=d5f45eb6ff08d8d9930039ed1f69654b635352"
              >
                Resume HH
              </a>
            </p>
          </div>
        </div>
        <div className={style.data_body}>
          <p>
            &lt; Software engineer with a proven ability to adapt in both
            self-starting and collaborative environments while staying focused
            on achieving high-quality results under strict deadlines. Eager to
            obtain a challenging position at a prestigious company that will
            expand my learning and build upon my developer skills. /&gt;
          </p>
          <p>expirience : more than {exp} years</p>
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
          <p>Additional courses:</p>
          <section>
            <span>CS50 - Computer Science</span>
          </section>
        </div>
      </div>
    </>
  );
};

export default CaseData;
