# 🦄⚡ VITE template

[comment]: <> (startof installation instruction)

## 💾Установка

PowerShell

```Powershell
git clone https://github.com/Neca-development/react-template.git <ИМЯ ПАКЕТА> ; cd <ИМЯ ПАКЕТА> ; git remote remove origin ; npm i ; node scripts/post-build.js
```

Bash

```Bash
git clone https://github.com/Neca-development/react-template.git <ИМЯ ПАКЕТА> && cd <ИМЯ ПАКЕТА> && git remote remove origin && npm i && node scripts/post-build.js
```

[comment]: <> (endof installation instruction)

## 💽Скрипты

1. `"dev"`: запуск dev сервера приложения
2. `"build"`: билд приложения
3. `"preview"`: старт последней версии собранного приложения
4. `"https-preview"`: старт последней версии собранного приложения в https режиме
5. `"lint"`: запуск линтера без автофикса
6. `"lint:fix"`: запуск линтера и автофикса
7. `"check-types"`: проверка типов TS
8. `"test"`: запуск unit тестов
9. `"test:ci"`: запуск unit тестов для CI
10. `"commit"`: коммит зарегестрированных в гит изменений
11. `"generate-images"`: генерация responsive изображений
12. `"ac"`: комлексная команда которая запустит линтер, проверит типы, добавит все изменения в гит и сделает коммит

## 🆔Naming

1. **cebab-case, dot notaion**
   - слова разделяются дефисом
   - все маленькие буквы
   - _названия файла_ . _тип файла_ . _(ts | scss) ..._
2. **File types**
   - `.hook, .service, .util, .helper, .component, .types, .model, .config, .page`
   - Для файлов констант и enums `**scope**.constants.ts`

## 📜Conventions

1. Все импорты между модулями делаем через **alias**, при необходимости можно добавить новые alias в проект
2. Для идентичности проектов `React` и `Next` пришлось выбрать вариант наименования страниц где в каждой папке со страницей лежит файл `index.page.ts`
3. Используется методология, которая не советует разделять файлы по их типам, следовательно если у вас есть хук `use-create-user` не надо создавать папку `entities/user/hooks`, а в ней файл `use-create-user.hook.ts`. Правильно будет создать файл `use-create-user.hook.ts` в папке `entities/user/model` или `features/create-user/model`
4. Обязательно Используем реэкспотры для реализации [public api](https://feature-sliced.design/ru/docs/reference/public-api)
5. Не используем `any`, используем `as` и `satisfies` где необходимо
6. Каталог `pages`: В каждой папке со страницей должен присутстовать файл `index.page.ts` в котором находится сам компонент страницы => _пример_ `pages/about/index.page.ts`

## Работа с изображениями

1. Добавляем изображения в папку `public/assets/**`
2. Используем команду `npm run generate-images`
3. Используем тэг `<Image />` со свойством `responsive=true`

```TypeScript
import { Image } from "@shared/ui/image";

<Image
  alt=""
  sizes={{
    lg: '40rem',
  }}
  responsive
  src="/assets/random/random.jpg"
  loading="lazy"
/>
```
