import { ReactElement } from "react";

export interface ProjectInterface {
  title: string;
  description: string;
  image: string[];
  stack: string[];
  link: ReactElement;
}

const ProjList = (
  title: string,
  description: string,
  image: string[],
  stack: string[],
  link: string
): ProjectInterface => {
  return {
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
    "VueCLI-app",
    "Vue-CLI app. ID for login : 5f8475902b0be670555f1bb3 . (test) ",
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
    "Markup Landing",
    "Just simple landing with html and css",
    [
      "https://github.com/Lubava7/portfolio/blob/main/src/images/screenshots/land.jpg?raw=true",
    ],
    ["Css", "Html", "gh-pages"],
    "https://lubava7.github.io/landing-page/"
  ),
  ProjList(
    "Portfolio website for a photographer",
    "Site for a photographer. Layout was carried out from a maket in Photoshop, still in development",
    [
      "https://github.com/Lubava7/port2/blob/master/src/images/img/dmitry.png?raw=true",
    ],
    ["Css", "Html", "Flexbox", "JS", "JS classes", "gh-pages"],
    "https://lubava7.github.io/dmitry-zakaz/"
  ),
  ProjList(
    "My first CRA project",
    "My first time with create-react-app",
    [
      "https://github.com/Lubava7/port2/blob/master/src/images/img/GOT.png?raw=true",
    ],
    ["Css", "Html", "Figma", "JS", "CRA", "React", "React-routing", "gh-pages"],
    "https://lubava7.github.io/react-got/"
  ),

  ProjList(
    "Landing",
    "Markup on Figma Layout , test try markup for online-shop.(test)",
    [
      "https://github.com/Lubava7/port2/blob/master/src/images/img/jasmine.png?raw=true",
    ],
    ["Css", "Html", "anchor", "Flexbox", "JS", "gh-pages"],
    "https://lubava7.github.io/lend/"
  ),
  ProjList(
    "Todo List",
    "React-app Todo-list first try.",
    [
      "https://github.com/Lubava7/portfolio/blob/main/src/images/screenshots/todolist.jpg?raw=true",
    ],
    [
      "Css",
      "Html",
      "React",
      "CRA",
      "JS",
      "LocalStorage",
      "React Hooks",
      "gh-pages",
    ],
    "https://lubava7.github.io/react-todo-new/"
  ),
  ProjList(
    "Book List ",
    "React app for store your books with local storage",
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
  ProjList(
    "My first HTML-markup",
    "My first try copy the Google page",
    [
      "https://github.com/Lubava7/port2/blob/master/src/images/img/googlepage.jpg?raw=true",
    ],
    ["Css", "Html", "gh-pages"],
    "https://lubava7.github.io/google-page/"
  ),
  ProjList(
    "Venarus ad Page",
    "Advertising page for Venarus(test) ",
    [
      "https://github.com/Lubava7/portfolio/blob/main/src/images/screenshots/venarus.jpg?raw=true",
    ],
    ["Css", "Html", "Sass", "@keyframes", "gh-pages"],
    "https://lubava7.github.io/venarus/"
  ),
  ProjList(
    "Tablet App for Onpoint",
    "Test Task for Onpoint, with cra. ONLY for Tablet 1024x768 screen extension",
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
  ProjList(
    "Yamaguchi test task",
    "Test Task for Yamaguchi. Design page with their ads",
    [
      "https://github.com/Lubava7/portfolio/blob/main/src/images/screenshots/yamaguchiTable.jpg?raw=true",
    ],
    ["Css", "Html", "JS", "gh-pages"],
    "https://lubava7.github.io/yamaguchi/"
  ),
  ProjList(
    "Voice Control Yamaguchi",
    "Test Task for Yamaguchi. Design page with Yamaguchi corporate character for voice control options promotion",
    [
      "https://github.com/Lubava7/portfolio/blob/main/src/images/screenshots/yamaguchi.jpg?raw=true",
    ],
    ["Css", "Html", "JS", "@keyframes", "gh-pages"],
    "https://lubava7.github.io/vc-yamaguchi/"
  ),
  ProjList(
    "Welbex test",
    "Test task for Welbex comp. ",
    [
      "https://github.com/Lubava7/portfolio/blob/main/src/images/screenshots/welbex.jpg?raw=true",
    ],
    ["Css", "Html", "gh-pages"],
    "https://lubava7.github.io/test2-maket/"
  ),
];
