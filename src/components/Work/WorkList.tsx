import { ReactElement } from "react";

export interface ProjectInterface {
  id: number;
  title: string;
  description: string;
  image: string;
  stack: string[];
  link_link: ReactElement;
}

const projList = (
  id: number,
  title: string,
  description: string,
  image: string,
  stack: string[],
  link_link: string
): ProjectInterface => {
  return {
    id,
    title,
    description,
    image,
    stack,
    link_link: (
      <a href={link_link} target="_blank" rel="noreferrer">
        {title}
      </a>
    ),
  };
};

export const workArray: ProjectInterface[] = [
  projList(
    0,
    "Medcross RIXAP",
    "In dev in current time , Medcross is a direct referral service for patients for treatment, diagnosis and hospitalization. A project for people working in the medical field - in private clinics, ready to offer their services on behalf of the clinic or independently, with the possibility of registering Clinics, media agents, contractors, paying for services, etc.",
    "",
    [
      "Webpack5",
      "Mui-styled",
      "TS",
      "React",
      "Redux",
      "Redux-toolkit",
      "React-hooks",
      "Yandex Cloud",
    ],
    "https://rixap.ru/"
  ),
  projList(
    1,
    "Copy YouTube",
    "Full-stack project , in dev in current time",
    "https://github.com/Lubava7/portfolio/blob/main/src/images/screenshots/BobTube.jpg?raw=true ",
    [
      "React",
      "JS, TS",
      "Css",
      "Html",
      "Node",
      "nodemon",
      "Express",
      "PostgreSQL",
      "pgAdmin4",
      "http query methods",
      "gh-pages",
    ],
    "https://github.com/Lubava7"
  ),
  projList(
    2,
    "Solar System",
    "Simple landing with JS Classes",
    "https://github.com/Lubava7/portfolio/blob/main/src/images/screenshots/solar_system.jpg?raw=true",

    ["JS", "Css", "Html", "JS Classes , OOP", "gh-pages"],
    "https://lubava7.github.io/solar-system/"
  ),

  projList(
    3,
    "Markup Landing",
    "Simple landing with html and css",
    "https://github.com/Lubava7/portfolio/blob/main/src/images/screenshots/land.jpg?raw=true",

    ["Css", "Html", "gh-pages"],
    "https://lubava7.github.io/landing-page/"
  ),
  projList(
    4,
    "Portfolio",
    "Portfolio for a photographer. Layout was built based on a design in Photoshop. WIP",
    "https://github.com/Lubava7/port2/blob/master/src/images/img/dmitry.png?raw=true",

    ["Css", "Html", "Flexbox", "JS", "JS classes", "gh-pages"],
    "https://lubava7.github.io/dmitry-zakaz/"
  ),
  projList(
    5,
    "My first CRA project",
    "GOT wiki.Small Wiki built using React and GOT character API.",
    "https://github.com/Lubava7/port2/blob/master/src/images/img/GOT.png?raw=true",

    ["Css", "Html", "Figma", "JS", "CRA", "React", "React-routing", "gh-pages"],
    "https://lubava7.github.io/react-got/"
  ),
  projList(
    6,
    "Book List ",
    "An app to store your books. Built with React. Saving implemented with Local Storage Web API.",
    "https://github.com/Lubava7/port2/blob/master/src/images/img/booklist.png?raw=true",

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
];

export const textTestComp = workArray.map(
  (el) =>
    `
## ${el.title}


\`\`\` shell  
${el.description}
\`\`\`

stack: 
${el.stack.join("\n")}
 
`
);

///
export const cra = `
## My first CRA project
  

  \`\`\` shell  
    GOT wiki. Small Wiki built using React and GOT character API.
  \`\`\`

  stack:
      Css,
      Html,
      Figma,
      JS,
      CRA,
      React,
      React-routing,
      gh-pages,
  ,
 
`;
export const solar = `
## Solar System
    
    
      \`\`\` shell 
      Simple landing with JS Classes.
      \`\`\`

stack:
     JS, 
     Css, 
     Html, 
     JS Classes , OOP,
     gh-pages
       
 
`;
export const ytcopy = `
## YouTube copy
   
   
    \`\`\` shell 
    Full-stack project , in dev in current time.
    \`\`\` 

stack:
      React,
      JS, TS,
      Css,
      Html,
      Node,
      nodemon,
      Express,
      PostgreSQL,
      pgAdmin4,
      http query methods,
      gh-pages,
 
`;
export const portfolio = `
## Portfolio
      
      
\`\`\` shell  
          Portfolio for a photographer. 
          Layout was built based on a design in
          Photoshop. WIP.
          \`\`\`

stack:
        Css, 
        Html, 
        Flexbox, 
        JS, 
        JS classes, 
        gh-pages
 
`;
export const booklist = `
## Booklist


\`\`\` shell  
An app to store your books. Built with React. Saving
implemented with Local Storage Web API.
\`\`\`

stack: 
      Css,
      Html,
      LocalStorage,
      JS,
      CRA,
      React,
      React Hooks,
      gh-pages,
 
`;
export const rixap = `
## Medcross RIXAP


\`\`\` shell  
In dev in current time , Medcross is a direct referral 
service for patients for treatment, diagnosis and hospitalization. A 
project for people working in the medical field - in private clinics,
ready to offer their services on behalf of the clinic or 
independently, with the possibility of registering Clinics, media
agents, contractors, paying for services, etc.
\`\`\`

stack: 
      Webpack5,
      Mui-styled,
      TS,
      React,
      Redux,
      Redux-toolkit,
      React-hooks,
      Yandex Cloud,
 
`;

// component: (
//   <Box>
//     ## Medcross RIXAP
//     <br />
//     <br />
//     ```shell <br /> In dev in current time , Medcross is a direct referral
//     service for patients for treatment, diagnosis and hospitalization. A
//     project for people working in the medical field - in private clinics,
//     ready to offer their services on behalf of the clinic or
//     independently, with the possibility of registering Clinics, media
//     agents, contractors, paying for services, etc.
//     <br /> ```
//     {[
//       "Webpack5",
//       "Mui-styled",
//       "TS",
//       "React",
//       "Redux",
//       "Redux-toolkit",
//       "React-hooks",
//       "Yandex Cloud",
//     ].map((el, index) => (
//       <span key={index}>{el}</span>
//     ))}
//   </Box>
// ),
