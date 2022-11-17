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
    link: <a href={link}>go to site</a>,
  };
};

export const workArray: ProjectInterface[] = [
  ProjList(
    "Landing",
    "landing description change the link!landing description change the link!landing description change the link!landing description change the link!",
    ["../../images/fingerprint.jpg"],
    ["Css", "Html"],
    "https://lubava7.github.io/dmitry-zakaz/"
  ),
  ProjList(
    "Markup on Figma layout",
    "landing description change the link!landing description change the link!landing description change the link!landing description change the link!",
    ["../../images/fingerprint.jpg"],
    ["Css", "Html", "Figma"],
    "https://lubava7.github.io/dmitry-zakaz/"
  ),
  ProjList(
    "VueCLI-app",
    "landing description change the link!landing description change the link!landing description change the link!landing description change the link!",
    ["../../images/fingerprint.jpg"],
    ["Css", "Html"],
    "https://lubava7.github.io/vue-test-task-LeadHit/"
  ),
  ProjList(
    "Markup on Figma Layout",
    "landing description change the link!landing description change the link!landing description change the link!landing description change the link!",
    ["../../images/fingerprint.jpg"],
    ["Css", "Html"],
    "https://lubava7.github.io/lend/"
  ),
  ProjList(
    "Todo List React-app",
    "landing description change the link!landing description change the link!landing description change the link!landing description change the link!",
    ["../../images/fingerprint.jpg"],
    ["Css", "Html"],
    "https://lubava7.github.io/react-todo-new/"
  ),
  ProjList(
    "Book List React-app",
    "landing description change the link!landing description change the link!landing description change the link!landing description change the link!",
    ["../../images/fingerprint.jpg"],
    ["Css", "Html"],
    "https://lubava7.github.io/react-booklist/"
  ),
  ProjList(
    "My first HTML-markup",
    "landing description change the link!landing description change the link!landing description change the link!landing description change the link!",
    ["../../images/fingerprint.jpg"],
    ["Css", "Html"],
    "https://lubava7.github.io/google-page/"
  ),
  ProjList(
    "Venarus ad Page",
    "landing description change the link!landing description change the link!landing description change the link!landing description change the link!",
    ["../../images/fingerprint.jpg"],
    ["Css", "Html"],
    "https://lubava7.github.io/venarus/"
  ),
  ProjList(
    "Test Task for Onpoint",
    "landing description change the link!landing description change the link!landing description change the link!landing description change the link!",
    ["../../images/fingerprint.jpg"],
    ["Css", "Html"],
    "https://lubava7.github.io/onpoint-test/"
  ),
  ProjList(
    "Test Task for Yamaguchi comp",
    "landing description change the link!landing description change the link!landing description change the link!landing description change the link!",
    ["../../images/fingerprint.jpg"],
    ["Css", "Html"],
    "https://lubava7.github.io/yamaguchi/"
  ),
  ProjList(
    "Test Task for Yamaguchi",
    "landing description change the link!landing description change the link!landing description change the link!landing description change the link!",
    ["../../images/fingerprint.jpg"],
    ["Css", "Html"],
    "https://lubava7.github.io/vc-yamaguchi/"
  ),
  ProjList(
    "Markup on Figma layout",
    "landing description change the link!landing description change the link!landing description change the link!landing description change the link!",
    ["../../images/fingerprint.jpg"],
    ["Css", "Html"],
    "https://lubava7.github.io/test2-maket/"
  ),
];
