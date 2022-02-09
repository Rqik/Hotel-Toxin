# Демо сайт гостиницы Toxin

Сайт для демонстрации верстки компонентов, интерфейса и страниц.

Проект создан в целях обучения.

<a href="https://www.npmjs.com/"><img src="https://img.shields.io/badge/npm-v7.13.0-blue"></a>
<a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/node->=15.10.0-ff0062"></a>

## 🏷️ Содержание

- [Demo](https://rqik.github.io/Hotel-Toxin)
- [Технологии](#technology)
- [Pages](#pages)
- [Установка](#installation)
- [Команды](#commands)
- [Структура проекта](#structure)

## <a name="technology"></a> 🤖 Использованные технологии

`JavaScript`
`JQ`
`PUG`
`SCSS`
`Webpack`
`Eslint`
`Prettier`
`Babel`

## <a name="pages"></a> 📝 Pages

[**components**](https://rqik.github.io/Hotel-Toxin/components-page.html) </br>

[**color-fonts**](https://rqik.github.io/Hotel-Toxin/color-fonts.html)

[**cards**](https://rqik.github.io/Hotel-Toxin/cards.html)

[**header-footer**](https://rqik.github.io/Hotel-Toxin/header-footer.html)

[**pick-room**](https://rqik.github.io/Hotel-Toxin/pick-room.html)

[**auth**](https://rqik.github.io/Hotel-Toxin/auth.html)

[**registration**](https://rqik.github.io/Hotel-Toxin/registration.html)

[**search-room**](https://rqik.github.io/Hotel-Toxin/search-room.html)

[**room-details**](https://rqik.github.io/Hotel-Toxin/room-details.html)

---

## <a name="installation"></a> 💾 Установка

Инcтрукции данного раздела следует выполнять в командной строке.

1.Clone

```console
// Скачайте репозиторий
git clone https://github.com/Rqik/Hotel-Toxin.git

// или
git clone git@github.com:Rqik/Hotel-Toxin.git
```

2.Open

```console
// Перейдите в папку с репозиторием
cd Hotel-Toxin
```

3.Init

```console
// Установите зависимости
npm install
```

## <a name="commands"></a> 📗 Команды

### `npm run dev`

Запускает _development_ сборку и сохраняет результат в папку `/dist`.

### `npm run watch`

Запускает _development_ сборку и сохраняет результат в папку `/dist `. Следит за изменениями в коде и переносит изменения в сборку.

### `npm run start`

Запускает _development_ сборку поднимает локальный сервер с результатом cборки. Не сохраняет результат в файловой системе. Запускает ваш браузер по умолчанию (если он не запущен), создает вкладку с адресом лок. сервера и переходит к ней.

### `npm run build`

Запускает _production_ сборку и сохраняет результат в папку `/dist`.

### `npm run lint`

Запускает eslint проверку на ошибки в коде. Результат вызова отобразится в консоли.

### `npm run lintfix`

Запускает eslint проверку на ошибки в коде и автоматически исправит проблемный код. Результат вызова отобразится в консоли.

### `npm run stylelint`

Запускает stylelint проверку на ошибки в css/scss и автоматически исправит проблемный код. Результат вызова отобразится в консоли.

### `npm run deploy`

Развертывает содержимое папки `/dist` в `git` ветку _gh-pages_.

## <a name="structure"></a> 🗂️ Структура проекта

**/src** - служит для хранения исходников. - **assets:** вспомогательные файлы проекта - **components:** компоненты проекта - **layouts:** макеты для страниц - **libs:** абстрагированные подключаемые библиотеки - **pages:** страницы - **styles:** общие стили

**/dist** - хранит результат сборки проекта.

---
