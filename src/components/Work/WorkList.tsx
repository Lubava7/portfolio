import { ReactElement } from "react";

export interface ProjectInterface {
  id: number;
  title: string;
  description: string;
  image: string[];
  stack: string[];
  link: ReactElement;
}

const ProjList = (
  id: number,
  title: string,
  description: string,
  image: string[],
  stack: string[],
  link: string
): ProjectInterface => {
  return {
    id,
    title,
    description,
    image,
    stack,
    link: (
      <a href={link} target="_blank">
        go to site
      </a>
    ),
  };
};

export const workArray: ProjectInterface[] = [
  ProjList(
    1,
    "VueCLI-app",
    "ID for login: 5f8475902b0be670555f1bb3 . App with login form and Graph.",
    [
      "https://github.com/Lubava7/portfolio/blob/main/src/images/screenshots/vue-cli.jpg?raw=true",
    ],
    [
      "Vue",
      "Css",
      "amcharts",
      "vue-router",
      "vuex",
      "vue-cli",
      "Sass",
      "Sass-loaer",
      "JS",
      "LocalStorage",
      "gh-pages",
    ],
    "https://lubava7.github.io/vue-test-task-LeadHit/"
  ),
  ProjList(
    2,
    "Markup Landing",
    "Simple landing with html and css",
    [
      "https://github.com/Lubava7/portfolio/blob/main/src/images/screenshots/land.jpg?raw=true",
    ],
    ["Css", "Html", "gh-pages"],
    "https://lubava7.github.io/landing-page/"
  ),
  ProjList(
    3,
    "Portfolio",
    "Portfolio for a photographer. Layout was built based on a design in Photoshop. WIP",
    [
      "https://github.com/Lubava7/port2/blob/master/src/images/img/dmitry.png?raw=true",
    ],
    ["Css", "Html", "Flexbox", "JS", "JS classes", "gh-pages"],
    "https://lubava7.github.io/dmitry-zakaz/"
  ),
  ProjList(
    4,
    "My first CRA project",
    "GOT wiki.Small Wiki built using React and GOT character API.",
    [
      "https://github.com/Lubava7/port2/blob/master/src/images/img/GOT.png?raw=true",
    ],
    ["Css", "Html", "Figma", "JS", "CRA", "React", "React-routing", "gh-pages"],
    "https://lubava7.github.io/react-got/"
  ),

  ProjList(
    5,
    "Landing",
    "Landing Page For An E-Commerce.Built based on a Figma Design.",
    [
      "https://github.com/Lubava7/port2/blob/master/src/images/img/jasmine.png?raw=true",
    ],
    ["Css", "Html", "anchor", "Flexbox", "JS", "gh-pages"],
    "https://lubava7.github.io/lend/"
  ),
  // ProjList(
  //   "Todo List",
  //   "React-app Todo-list first try.",
  //   [
  //     "https://github.com/Lubava7/portfolio/blob/main/src/images/screenshots/todolist.jpg?raw=true",
  //   ],
  //   [
  //     "Css",
  //     "Html",
  //     "React",
  //     "CRA",
  //     "JS",
  //     "LocalStorage",
  //     "React Hooks",
  //     "gh-pages",
  //   ],
  //   "https://lubava7.github.io/react-todo-new/"
  // ),
  ProjList(
    6,
    "Book List ",
    "An app to store your books. Built with React. Saving implemented with Local Storage Web API.",
    [
      "https://github.com/Lubava7/port2/blob/master/src/images/img/booklist.png?raw=true",
    ],
    [
      "Css",
      "Html",
      "LocalStorage",
      "JS",
      "CRA",
      "React",
      "React Hooks",
      "gh-pages",
    ],
    "https://lubava7.github.io/react-booklist/"
  ),
  // ProjList(
  //   "My first HTML-markup",
  //   "My first try copy the Google page",
  //   [
  //     "https://github.com/Lubava7/port2/blob/master/src/images/img/googlepage.jpg?raw=true",
  //   ],
  //   ["Css", "Html", "gh-pages"],
  //   "https://lubava7.github.io/google-page/"
  // ),
  ProjList(
    7,
    "Venarus ad Page",
    "Advertising page for Venarus",
    [
      "https://github.com/Lubava7/portfolio/blob/main/src/images/screenshots/venarus.jpg?raw=true",
    ],
    ["Css", "Html", "Sass", "@keyframes", "gh-pages"],
    "https://lubava7.github.io/venarus/"
  ),
  ProjList(
    8,
    "Tablet App for Onpoint",
    "ONLY for Tablet 1024x768 screen extension",
    [
      "https://github.com/Lubava7/portfolio/blob/main/src/images/screenshots/onpoint.jpg?raw=true",
    ],
    [
      "Css",
      "Sass",
      "React",
      "JS",
      "CRA",
      "React-routing",
      "@keyframes",
      "gh-pages",
    ],
    "https://lubava7.github.io/onpoint-test/"
  ),
  // ProjList(
  //   "Yamaguchi test task",
  //   "Test Task for Yamaguchi. Design page with their ads",
  //   [
  //     "https://github.com/Lubava7/portfolio/blob/main/src/images/screenshots/yamaguchiTable.jpg?raw=true",
  //   ],
  //   ["Css", "Html", "JS", "gh-pages"],
  //   "https://lubava7.github.io/yamaguchi/"
  // ),
  ProjList(
    9,
    "Voice Control Yamaguchi",
    "Design page with Yamaguchi corporate character for voice control options promotion",
    [
      "https://github.com/Lubava7/portfolio/blob/main/src/images/screenshots/yamaguchi.jpg?raw=true",
    ],
    ["Css", "Html", "JS", "@keyframes", "gh-pages"],
    "https://lubava7.github.io/vc-yamaguchi/"
  ),
  ProjList(
    10,
    "Welbex",
    "Markup page ",
    [
      "https://github.com/Lubava7/portfolio/blob/main/src/images/screenshots/welbex.jpg?raw=true",
    ],
    ["Css", "Html", "gh-pages"],
    "https://lubava7.github.io/test2-maket/"
  ),
];
