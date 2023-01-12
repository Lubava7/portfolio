import React, { useEffect, useRef } from "react";

// два сайта с которых я брала данные дял компонента:
// https://codepen.io/harryheman/pen/ZEEPRba?editors=1010
// https://pablo.gg/en/blog/coding/creating-a-matrix-source-code-effect-background-for-my-website-with-react/

const MatrixLayout = ({ timeout, children }) => {
  const canvas = useRef();

  useEffect(() => {
    const context = canvas.current.getContext("2d");

    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.current.width = width;
    canvas.current.height = height;

    const str =
      "簡単+に子供=喜ぶ美味?しい寿司飯の日に1おうちで4手巻き 7やちらし ホールや?カップで寿!司ケーキ 節分恵方巻きや1お弁 3当にも";
    const matrix = str.split("");

    let font = 11;
    const columns = width / font;
    const arr = [];

    for (let i = 0; i < columns; i++) arr[i] = 1;

    const matrixEffect = () => {
      context.fillStyle = "rgba(0,0,0,.05)";
      context.fillRect(0, 0, width, height);
      context.fillStyle = "#0f0";
      context.font = font + "px system-ui";

      for (let i = 0; i < arr.length; i++) {
        let txt = matrix[Math.floor(Math.random() * matrix.length)];
        context.fillText(txt, i * font, arr[i] * font);
        if (arr[i] * font > height && Math.random() > 0.975) arr[i] = 0;
        arr[i]++;
      }
    };

    const interval = setInterval(matrixEffect, timeout);
    return () => {
      clearInterval(interval);
    };
  }, [canvas, timeout]);
  return (
    <div
      style={{
        background: "#000000",
        position: "relative",
        height: "100%",
        width: "100%",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      {children}
      <div>
        <canvas ref={canvas} />
      </div>
    </div>
  );
};

export default MatrixLayout;
