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
    " Ведущий Frontend-разработчик,",
    " В качестве frontend-разработчика я занималась разработкой веб-приложения для врачей ",
    "и частных клиник, с такими ",
    " возможностями как: запись к врачу, оплата услуг, просмотр направлений/врачей/клиник, ",
    " регистрация, авторизация.",
    " После испытательного срока показала себя как уверенный, надежный разработчик, ",
    "  вследствие чего заняла должность ведущего frontend-разработчика.",

    " Работала от начала проекта по настоящее время, часть реализованных мной задач:",
    "- Настройка конфигурации приложения , бойлерплейта с помощью Webpack 5",
    "- Разработка структуры приложения, стиля кода для всей команды, документирование кода",
    " - Верстка многостраничного адаптивного (мобильный + десктоп) приложения согласно макетам Фигма",
    " - Работа в условиях отсутствия команды/поддержки без потери в скорости сдачи тасков",
    " - Связка приложения с бэком посредством АПИ с нуля",
    "- Авторизация/регистрация по ролям в приложении, условный рендеринг на основе роли",
    " - Валидация форм с помощью Регексп (Имя, Фамилия, Почта, Пароль etc)",
    " - Внесла и реализовала идею отображения новых направлений с визуальным отличием от прочитанных,",
    " логику Новое направление - переход на страницу направления - направление прочитано, также ",
    "  отображение количества новых напрвлений в меню-сайдбаре",
    " - Загрузка фото, изменение данных пользователя в режиме редактирования",
    " - работа в команде с frontend / backend разработчиками",
    "- Отбор и курирование новых разработчиков , организация работы в команде",
    "распределение тасков внутри команды, код-ревью, рефакторинг приложения,",
    " участие в разработке бизнес-логики приложения",
    "  - Работа с гитхаб- actions, настройка команд на клонирование приложения, ",
    "   проверку наличия файлов ,уставновку зависимостей и билд приложения в папку ",
    " после мерджа в головную ветку,",
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

 Ведущий Frontend-разработчик,
 В качестве frontend-разработчика я занималась разработкой веб-приложения для врачей 
 и частных клиник, с такими ,
 возможностями как: запись к врачу, оплата услуг, просмотр направлений/врачей/клиник, 
 регистрация, авторизация.,
 После испытательного срока показала себя как уверенный, надежный разработчик, 
 вследствие чего заняла должность ведущего frontend-разработчика.,

Работала от начала проекта по настоящее время, часть реализованных мной задач:,
- Настройка конфигурации приложения , бойлерплейта с помощью Webpack 5,
- Разработка структуры приложения, стиля кода для всей команды, документирование кода,
- Верстка многостраничного адаптивного (мобильный + десктоп) приложения согласно макетам Фигма,
- Работа в условиях отсутствия команды/поддержки без потери в скорости сдачи тасков,
- Связка приложения с бэком посредством АПИ с нуля,
- Авторизация/регистрация по ролям в приложении, условный рендеринг на основе роли,
- Валидация форм с помощью Регексп (Имя, Фамилия, Почта, Пароль etc),
- Внесла и реализовала идею отображения новых направлений с визуальным отличием от прочитанных, 
  логику Новое направление - переход на страницу направления - направление прочитано, также 
  отображение количества новых напрвлений в меню-сайдбаре,
- Загрузка фото, изменение данных пользователя в режиме редактирования,
- работа в команде с frontend / backend разработчиками,
- Отбор и курирование новых разработчиков , организация работы в команде, 
  распределение тасков внутри команды, код-ревью, рефакторинг приложения, 
  участие в разработке бизнес-логики приложения,
- Работа с гитхаб- actions, настройка команд на клонирование приложения, 
  проверку наличия файлов ,уставновку зависимостей и билд приложения в папку 
  после мерджа в головную ветку,

## #Marsh

Frontend-разработчик
Работала над веб-приложением для создания мероприятий в Москве и Питере 
в качестве frontend-разработчика.

Разрабатывала новые компоненты но основе фигма-прототипов, 
такие как: Компоненты для личного кабинета, функционал загрузки фото-аватара, 
дашборд мероприятий, списки участников, и иные UI-элементы приложения.

Внедрила смену тему и языка.

Отрефакторила код, вследствие чего вес файлов после билда сократился 
в два раза, приложение ускорилось, многие компоненты стали переиспользоваться 
а не просто вручную повторяться

Применяемые навыки JS, CSS, HTML, Адаптивная верстка, React, 
Redux, React hooks
  

## ИП Дмитрий Зимницкий

Frontend-разработчик
Работа с одним из моих постоянных заказчиков.
Сайт-портфолио для фотографа.

- Осуществила верстку с макета в Figma/Photoshop
- Создала переиспользуемые компоненты на нативном JS
- Реализовала роутинг сайта
- Реализовала анимацию на CSS/JS
- Внесла коррективы по дизайну и логике сайта на основе пожеланий заказчика
`;
