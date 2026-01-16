# Vite + React Project

Цей проект є простим веб-додатком, створеним за допомогою Vite та React. Додаток дозволяє вводити текст у поле вводу та відображати його після натискання кнопки.

## Вимоги

- [Node.js](https://nodejs.org/) (версія 20 або вище)
- [npm](https://www.npmjs.com/) (входить до складу Node.js)

## Встановлення

1. Клонуйте репозиторій:

   git clone git@github.com:yaroslavnakonechniy/react-start.git
   cd 
2. Встановіть залежності:
    npm install

3. Запустіть проект:
    npm run dev

4. Відкрийте ваш браузер і перейдіть за адресою http://localhost:3000 для перегляду додатку.

## Структура проекту
/ваш_проект
│
├── /src                  # Каталог для вихідних файлів
│   ├── /components       # Компоненти React
│   │   ├── Button.jsx    # Компонент кнопки
│   │   └── Input.jsx     # Компонент вводу
│   ├── App.jsx           # Головний компонент додатку
│   └── main.jsx          # Точка входу
│
├── /assets               # Статичні ресурси
│   ├── react.svg         # Логотип React
│   └── vite.svg          # Логотип Vite
│
├── index.html            # HTML файл
│
├── App.css               # CSS стилі
│
├── package.json          # Файл з залежностями проекту
│
└── vite.config.js        # Конфігураційний файл Vite