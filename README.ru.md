### **[ -> English <- ](README.md)**

# {Имя проекта}

Простой обзор использования/назначения.

## GitHub

Измените "TMM-Corporation/Mod-Template" на "Username/Repo-name"

![GitHub](https://img.shields.io/github/license/TMM-Corporation/Mod-Template?label=License&style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/TMM-Corporation/Mod-Template?label=Repo%20Size&style=flat-square)
![GitHub issues](https://img.shields.io/github/issues-raw/TMM-Corporation/Mod-Template?label=Opened%20issues&style=flat-square)
![GitHub issues](https://img.shields.io/github/issues-closed-raw/TMM-Corporation/Mod-Template?label=Closed%20issues&style=flat-square)

![GitHub last commit](https://img.shields.io/github/last-commit/TMM-Corporation/Mod-Template?label=Latest%20changes&style=flat-square)
![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/TMM-Corporation/Mod-Template?include_prereleases&label=Latest%20Release&style=flat-square)
![GitHub all releases](https://img.shields.io/github/downloads/TMM-Corporation/Mod-Template/total?label=Downloads&style=flat-square)

## ICMods

Если вы загрузули мод на icmods:
Измените "id%3D22" на "id%3D" + id мода. 

![Name](https://img.shields.io/badge/dynamic/json?color=green&label=Downloads&query=%24.downloads&url=https%3A%2F%2Ficmods.mineprogramming.org%2Fapi%2Fdescription.php%3Fid%3D22?style=flat-square)
![Downloads](https://img.shields.io/badge/dynamic/json?color=green&label=Downloads&query=%24.downloads&url=https%3A%2F%2Ficmods.mineprogramming.org%2Fapi%2Fdescription.php%3Fid%3D22?style=flat-square)
![Version](https://img.shields.io/badge/dynamic/json?color=green&label=Version&query=%24.version_name&url=https%3A%2F%2Ficmods.mineprogramming.org%2Fapi%2Fdescription.php%3Fid%3D22?style=flat-square)
![Likes](https://img.shields.io/badge/dynamic/json?color=green&label=Likes&query=%24.likes&url=https%3A%2F%2Ficmods.mineprogramming.org%2Fapi%2Fdescription.php%3Fid%3D22?style=flat-square)
![Latest update](https://img.shields.io/badge/dynamic/json?color=green&label=Latest%20update&query=%24.last_update&url=https%3A%2F%2Ficmods.mineprogramming.org%2Fapi%2Fdescription.php%3Fid%3D22?style=flat-square)

## Описание

Подробное описание о вашем проекте и обзор использования.

Это порт для Minecraft Bedrock Edition, работающий под управлением InnerCore для Horizon Modding Kernel.

---

## Начало работы

Перейдите на [вики тулчейна](https://github.com/TMM-Corporation/innercore-mod-toolchain/wiki) и настройте проект

### Строение папок с тулчейном

```
.
├ mods
│ ├ ...
│ ├ Project Name                # Имя проекта
│ │ ├ src                       # Исходный код
│ │ │ ├ assets                  # Ресурсы
│ │ │ │ ├ behavior_packs        # Behavior паки
│ │ │ │ ├ res                   # Ресурсы модификации
│ │ │ │ │ ├ items-opaque        # Тектуры предметов
│ │ │ │ │ ├ terrain-atlas       # Текстуры блоков
│ │ │ │ ├ resource_packs        # Ресурс паки
│ │ │ │ ├ ui                    # Текстуры интерфейся
│ │ │ │ ├ mod_icon.png          # Иконка мода
│ │ │ ├ build                   # Папка для сборки мода
│ │ │ │ ├ dev                   # Основная часть сборки мода
│ │ │ │ │ ├ header.js           
│ │ │ │ │ ├ ...                 
│ │ │ │ │ ├ .includes           # Включение файлов в список для сборки
│ │ │ │ ├ java                  # Сборка Java части
│ │ │ │ │ ├ project-name        # Имя проекта
│ │ │ │ │ │ ├ lib               # Библиотеки
│ │ │ │ │ │ ├ src               # Исходный код
│ │ │ │ │ │ └ manifest          # Манифест для сборки
│ │ │ │ ├ native                # Сборка C++/нативной части
│ │ │ │ │ ├ project-name        # Имя проекта
│ │ │ │ │ │ ├ shared_headers    # Заголовочные файлы
│ │ │ │ │ │ │ ├ callbacks.h     
│ │ │ │ │ │ │ ├ ...             
│ │ │ │ │ │ ├ main.cpp          # Главный файл сборки
│ │ │ │ │ │ └ manifest          # Манифест для сборки
│ │ │ │ ├ preloader             # Сборка предзагрузчика, стартует до minecraft
│ │ │ │ │ ├ ...                 
│ │ │ │ │ ├ .includes           # Включение файлов в список для сборки
│ │ │ │ ├ launcher.js           # Файл конфигурации запуска
│ │ │ │ └ ...                   
│ │ │ ├ lib                     # JS библиотеки для мода
│ │ │ ├ config.info.json        # Файл описания конфигурации
│ │ │ └ config.json             # Файл конфигурации, см. CONFIG.md
│ │ ├ CHANGELOG.md              # Список изменений мода
│ │ ├ make.json                 # Главный файл описания мода, описывает всю информацию для сборки
│ │ └ README.md                 # Файл Readme
│ ├ ...                         
├ output                        # Папка для выхода готовых сборок
│ ├ release                     # Релизные сборки
│ ├ debug                       # Отладочные сборки
├ toolchain                     # Папка Тулчейна (сборщика)
│ ├ ...                         
├ .classpath                    # Java файл для подключения библиотек
├ projects.json                 # Файл со списком всех проектов для сборки
└ ...                           
```

### Сборка мода

1. Присоедините телефон с помощью ADB.
2. Выберите задачу `Build Everything` из меню сборки `ctrl+shift+b` или используйте расширение для VS Code `Task Explorer`.

---

## Авторы

Имена участников и контактная информация

ToxesFoxes - 
[Twitter](https://twitter.com/ToxesFoxes),
[Vk](https://vk.com/ToxesFoxes)

## Заметка

Я не связан с командой разработчиков {Имя проекта}, которая разрабатывает оригинальный мод для ПК, это неофициальный порт их мода для Minecraft на Android.
Все права на текстуры из {Имя проекта} для ПК зарезервированы командой разработчиков {Имя проекта}.

## Заслуга

Спасибо:
* Евгению Смирнову за загрузчик модов InnerCore.
* Всем [участникам](https://github.com/TMM-Corporation/Mod-Template/graphs/contributors)

## Лицензия
Этот проект лицензирован под лицензией [НАЗВАНИЕ ЗДЕСЬ] - см. LICENSE.md файл для получения подробной информации.
