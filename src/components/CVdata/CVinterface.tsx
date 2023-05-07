interface CVinterface {
  id: number;
  compName: string;
  monthFrom: string;
  monthTo: string;
  yearFrom: number;
  yearTo: number;
  tasks: string[];
}

const CVworkList = (
  id: number,
  compName: string,
  monthFrom: string,
  monthTo: string,
  yearFrom: number,
  yearTo: number,
  tasks: string[]
): CVinterface => {
  return {
    id,
    compName,
    monthFrom,
    monthTo,
    yearFrom,
    yearTo,
    tasks,
  };
};

export const CVarray: CVinterface[] = [
  CVworkList(1, "RIXAP", "Jun", "c.t.", 2023, 2023, [
    "Приложение Medcross — сервис прямого направления пациентов на лечение, диагностику и госпитализацию.",
    " Разработала структуру поиска и сортировки ",
    " Осуществила верстку страниц с Figma макета ",
    " Сборка проекта с Webpack5 ",
    "Стэк React + TypeScript , React Hooks",
    " MUI styled",
    "RB-auth, апи для запросов к бэку с помощью axios",
    "Redux , Redux-toolkit",
    "LocalStorage",
    "Работа с Яндекс Cloud",
  ]),
  CVworkList(3, "#Marsh", "Nov", "May", 2021, 2022, [
    "Разработала компоненты для личного кабинета пользователя",
    "Разработала компоненты для дашборда мероприятий",
    "Осуществила верстку с макета в Figma/Photoshop ",
    "Настроила роутинг приложения ",
  ]),
  CVworkList(4, "ИП Дмитрий Зимницкий", "Oct", "Oct", 2021, 2021, [
    " Осуществила верстку с макета в Figma/Photoshop",
    " Создала переиспользуемые компоненты на нативном JS с помощью ООП паттернов",
    " Реализовала роутинг сайта",
    " Реализовала анимацию на CSS/JS",
  ]),
];

export const my_cv_data = `
 ## RIXAP 

 Приложение Medcross — сервис прямого направления пациентов на лечение, диагностику и госпитализацию,
  - Разработала структуру поиска и сортировки,
  - Осуществила верстку страниц с Figma макета,
  - Сборка проекта с Webpack5,
  - Стэк React + TypeScript , React Hooks
  - MUI styled
  - RB-auth, апи для запросов к бэку с помощью axios
  - Redux , Redux-toolkit
  - LocalStorage
  - Работа с Яндекс Cloud

## #Marsh

  - Разработала компоненты для личного кабинета пользователя",
  - Разработала компоненты для дашборда мероприятий",
  - Осуществила верстку с макета в Figma/Photoshop,
  - Настроила роутинг приложения,
  

## ИП Дмитрий Зимницкий
  - Осуществила верстку с макета в Figma/Photoshop,
  - Создала переиспользуемые компоненты на нативном JS с помощью ООП паттернов,
  - Реализовала роутинг сайта,
  - Реализовала анимацию на CSS/JS,
`;
