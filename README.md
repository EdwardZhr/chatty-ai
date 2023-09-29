# Chatty AI

## О проекте:
Chatty AI - это голосовой помощник на основе искусственного интеллекта, который улучшит речь и сделает ее по-настоящему грамотной и красивой.
Проект состоит из страницы онбординга и чата. На странице онбординга пользователь может ознакомиться с проектом. В чате пользователь может отправить голосовое сообщение и получить обработанный текст в виде ответного сообщения.

#### С проектом можно ознакомиться по [ссылке](https://edwardzhr.github.io/chatty-ai)

## Инструкция по сборке и запуску
Проект собран с помощью  Create React App.

**Клонируем репозиторий c помощью команды**
```
 $ git clone https://github.com/EdwardZhr/chatty-ai.git
```
**Устанавливаем зависимости** 
```
$ npm i
```
 **Локальная найстройка**
 ```
Необходимо создать .env файл и указать собственный ключ API https://platform.openai.com/account/api-keys
В файле utils/OpenAIApi.js необходимо заменить 5 строку на "const API_KEY = process.env.REACT_APP_APISECRET"

 ```
 **Запуск сервера в режиме разработки**
 ```
 $ npm start
 ```
  **Создание билда**
 ```
 $ npm build
 ```

## Методы и технологий используемые на сайте
* React
* React-Router
* Axios
* JS
* CSS

## Ссылки на стороние фреймворки, библиотеки и шрифты

* [Фреймворк React](https://react.dev/)
* [Библиотека React-router-dom ](https://www.npmjs.com/package/react-router-dom)
* [Библиотека wavesurfer.js](https://wavesurfer-js.org/)
* [Шрифт Inter](https://fonts.google.com/specimen/Inter?query=Inter)
* [Шрифт NT Somic](https://fontesk.com/nt-somic-typeface/)

## API котрые используются на сайте

1. https://api.openai.com/v1/audio/transcriptions - преобразует голос в текст
2. https://api.openai.com/v1/chat/completions - взаимодействие с чатом нейросети

___
## О команде участвовавшая в проекте
1. Шификова Лиана **Проджект-менеджер.** Закончила курс «Менеджер-проектов в IT» от Яндекс.Практикум
2. Самойлова Камила **Дизайнер.** Закончила курс «Продуктовый-дизайн» от Яндекс.Практикум
3. Швецова Евгения **Дизайнер.** Закочила курст «Продуктовый-дизайн» от Яндекс.Практикум
4. [Жребец Эдвард](https://github.com/EdwardZhr) **Фронтенд-разработчик.** Закачил курс «Фронтенд-разработчик» от Яндекс.Практикум
5. [Морарь Василий](https://github.com/Vasilii-0009) **Фронтенд-разработчик.** Закчил курс «Фронтенд-разработчик» от Яндекс.Практикум 
