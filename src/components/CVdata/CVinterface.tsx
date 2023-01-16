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
  CVworkList(1, "W8 comp", "June", "Jan", 2022, 2023, [
    " Разрабатывала UI компоненты в изоляции с помощью StoryBook",
    " Осуществила верстку с макета в Figma/Photoshop",
    " Реализовала смену темы/языка в стеке Next , TS, i18-next",
    " Разрабатывала компоненты для админ-панели на основе MUI",
    "Участвовала в код-ревью , активно работала в команде",
    " Самостоятельно создала бойлер-плейт приложения в стеке TS , React , Redux",
    "Реализовала роутинг приложения с помощью React.Lazy",
    " Создала сущности и интерфейсы для дальнейшего их использования в проекте другими разработчиками",
    " Инициализировала Бэк приложение в стеке Node,js / Express",
    " Активная работа с git , git flow",
  ]),
  CVworkList(2, "#Marsh", "Nov", "May", 2021, 2022, [
    "Разработала компоненты для личного кабинета пользователя",
    "Разработала компоненты для дашборда мероприятий",
    "Участвовала во всех код-ревью и разработке архитектуры сайта",
    "Осуществила верстку с макета в Figma/Photoshop ",
    "Внедрила смену темы/языка на сайте ",
    "Настроила роутинг приложения ",
    "Подключила локальное хранилище",
  ]),
  CVworkList(3, "ИП Дмитрий Скворцов", "Oct", "Oct", 2021, 2021, [
    " Осуществила верстку с макета в Figma/Photoshop",
    " Создала переиспользуемые компоненты на нативном JS",
    " Реализовала роутинг сайта",
    " Реализовала анимацию на CSS/JS",
  ]),
  CVworkList(4, "Водный Калининград", "July", "Sept", 2021, 2021, [
    "  Принимала участие в разработке плана проекта по созданию сайта",
    "Самостоятельно создала бойлер-плейт приложения в стеке JS, React",
    "Осуществила верстку с макета в Figma/Photoshop",
    "Занималась разработкой компонентов , подключением виджетов, маршрутизацией",
    "Работала в команде с другими разработчиками",
  ]),
];