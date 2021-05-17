# FSD
<img src="https://img.shields.io/badge/npm-v7.7.6-blue">
<img src="https://img.shields.io/badge/node->=15.10.0-ff0062">

## 🏷️ Содержание
- [Demo](https://rqik.github.io/FSD)
- [Pages](#pages)
- [Установка](#installation)
- [Команды](#commands)
- [Структура проекта](#structure)

## <a name="pages"></a> Pages

[**components**](https://rqik.github.io/FSD/components-page.html) </br>

[**color-fonts**](https://rqik.github.io/FSD/color-fonts.html) 

[**cards**](https://rqik.github.io/FSD/cards.html) 

[**header-footer**](https://rqik.github.io/FSD/header-footer.html)

[**pick-room**](https://rqik.github.io/FSD/pick-room.html)

[**auth**](https://rqik.github.io/FSD/auth.html)

[**registration**](https://rqik.github.io/FSD/registration.html)

[**search-room**](https://rqik.github.io/FSD/search-room.html)

[**room-details**](https://rqik.github.io/FSD/room-details.html) 

---

## <a name="installation"></a> 💾 Установка

Инcтрукции данного раздела следует выполнять в командной строке.

1. Clone

```bash 
// Скачайте репозиторий
git clone https://github.com/Rqik/FSD.git

// или
git clone git@github.com:Rqik/FSD.git
```

2. Open

```console
// Перейдите в папку с репозиторием
cd FSD
```

3. Init

```console
// Установите зависимости
npm install
```

## <a name="commands"></a> 📗 Команды

### `npm run dev` 
Запускает *development* сборку и сохраняет результат 
в папку `/dist`. Детали работы в [webpack.dev.js](./config/webpack.dev.js).

### `npm run watch` 
Запускает *development* сборку и сохраняет результат в папку `/dist
`. Следит за изменениями в коде и переносит изменения в сборку. 

### `npm run start`  
Запускает *development* сборку поднимает локальный сервер с результатом cборки. Не сохраняет результат в файловой системе. Запускает ваш браузер по умолчанию (если он не запущен), создает вкладку с адресом лок. сервера и переходит к ней.

### `npm run build`
Запускает *production* сборку и сохраняет результат в папку `/dist`. Детали работы в [webpack.prod.js](./config/webpack.prod.js).

### `npm run lint` 
Запускает eslint проверку на ошибки в коде. Результат вызова отобразится в консоли.

### `npm run lintfix` 
Запускает eslint проверку на ошибки в коде и автоматически исправит проблемный код. Результат вызова отобразится в консоли.

### `npm run deploy`
Развертывает содержимое папки `/dist` в `git` ветку *gh-pages*.

##  <a name="structure"></a> 🗂️ Структура проекта

**/src** - служит для хранения исходников.
    - **assets:** вспомогательные файлы проекта
    - **components:** компоненты проекта
    - **layouts:** макеты для страниц
    - **libs:** абстрагированные подключаемые библиотеки 
    - **pages:** страницы
    - **styles:** общие стили

**/dist** - хранит результат сборки проекта.

---
