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
    "Portfolio website for a photographer",
    "Site for a photographer. Layout was carried out from a maket in Photoshop, still in development",
    ["../../images/fingerprint.jpg"],
    ["Css", "Html", "Flexbox", "JS", "JS classes", "gh-pages"],
    "https://lubava7.github.io/dmitry-zakaz/"
  ),
  // ProjList(
  //   "Markup on Figma layout",
  //   "landing description change the link!landing description change the link!landing description change the link!landing description change the link!",
  //   ["../../images/fingerprint.jpg"],
  //   ["Css", "Html", "Figma"],
  //   "https://lubava7.github.io/dmitry-zakaz/"
  // ),
  ProjList(
    "VueCLI-app",
    "Vue-CLI app. ID for login : 5f8475902b0be670555f1bb3 . (test) ",
    ["../../images/fingerprint.jpg"],
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
    "Landing",
    "Markup on Figma Layout , test try markup for online-shop.(test)",
    ["../../images/fingerprint.jpg"],
    ["Css", "Html", "anchor", "bootsrap", "Flexbox", "JS", "gh-pages"],
    "https://lubava7.github.io/lend/"
  ),
  ProjList(
    "Todo List",
    "React-app Todo-list first try.",
    ["../../images/fingerprint.jpg"],
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
    ["../../images/fingerprint.jpg"],
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
    ["../../images/fingerprint.jpg"],
    ["Css", "Html", "gh-pages"],
    "https://lubava7.github.io/google-page/"
  ),
  ProjList(
    "Venarus ad Page",
    "Advertising page for Venarus(test) ",
    ["../../images/fingerprint.jpg"],
    ["Css", "Html", "Sass", "@keyframes", "gh-pages"],
    "https://lubava7.github.io/venarus/"
  ),
  ProjList(
    "Test Task for Onpoint",
    "Test Task for Onpoint, with cra",
    ["../../images/fingerprint.jpg"],
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
    ["../../images/fingerprint.jpg"],
    ["Css", "Html", "JS", "gh-pages"],
    "https://lubava7.github.io/yamaguchi/"
  ),
  ProjList(
    "Voice Control Yamaguchi",
    "Test Task for Yamaguchi. Design page with Yamaguchi corporate character for voice control options promotion",
    ["../../images/fingerprint.jpg"],
    ["Css", "Html", "JS", "@keyframes", "gh-pages"],
    "https://lubava7.github.io/vc-yamaguchi/"
  ),
  ProjList(
    "Welbex test",
    "Test task for Welbex comp. ",
    ["../../images/fingerprint.jpg"],
    ["Css", "Html", "gh-pages"],
    "https://lubava7.github.io/test2-maket/"
  ),
];
