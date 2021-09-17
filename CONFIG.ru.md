### **[ -> English <- ](CONFIG.md)**

# Файл конфигурации 

Это файлы конфигурации, которые нужны для настройки модификации внутри лаунчера. 
О строении формата документов JSON посмотрите 
[тут](https://developer.mozilla.org/ru/docs/Learn/JavaScript/Objects/JSON).

## В чём разница файлов `config.info.json` и `config.json`?

Файл `config.info.json` отвечает заописание каждой настройки и её тип, а также условие отображения. 
А файл `config.json` только хранит настройки которые изменяет пользователь.

## Строение файла с информацией о каждой настройке

Файл `config.info.json`

```json
{
	"description": {                 // Описание конфига/заголовок
		"en": "Some",                // Описание на английском
		"ru": "Что-то"               // Описание на русском
	},                                  
	"properties": {                  // Список настроек
		"uniquie_name": {            // Уникальное имя настройки
			"name": {                // Имя настройки
				"en": "Some",        // Название на английском
				"ru": "Что-то"       // Название на русском
			},                         
			"description": {         // Описание настройки
				"en": "Some",        // Описание на английском
				"ru": "Что-то"       // Описание на русском
			},                          
			"type": "SeekBar",       // Тип настройки
			"min": 0,                // Минимальное значение
			"max": 0,                // Максимальное значение
			"value": 0,              // Значение настройки по умолчанию
			"displayIf": "enabled",  // Условие отображения настройки, принимает логические значения из значения любой настройки "uniquie_name"
			"collapsible": true,     // Сворачиваемый спиcок/группа элементов
			"index": 4               // Желаемый индекс положения элемента в списке
		}
	}
}
```

## Строение главного файла настроек

Файл `config.json`

```json
{
	"enabled": true,                  // Обязательная настройка, отвечает за состояние мода, включен/выключен
	"first_group": {                  // Можно группировать элементы в одну группу
		"sub_element_1": 15,          // Первый элемент группы
		"sub_element_2": 10           // Второй элемент группы
	},                                   
	"some_element_1": "abc",          // Элемент со значением текста
	"some_element_condition_1": 1.23  // Элемент со значением дробного числа
}
```

## Примеры

Файл `config.info.json`
```json
{
	"description": {
		"en": "This is a configuration of Template mod",
		"ru": "Это конфигурация шаблонного мода"
	},
	"properties": {
		"enabled": {
			"name": { 
				"en": "Enable mod", 
				"ru": "Включить мод" 
			},
			"index": 0
		},
		"first_group": {
			"name": { 
				"en": "First group", 
				"ru": "Первая группа" 
			},
			"collapsible": true,
			"index": 1
		},
		"first_group.sub_element_1": {
			"name": { 
				"en": "Some sub element 1", 
				"ru": "Какой-то под элемент 1" 
			},
			"description": { 
				"en": "Some sub element 1 description", 
				"ru": "Описание под элемента 1" 
			},
			"index": 2,
			"type": "SeekBar",
			"min": 0,
			"value": 10,
			"max": 200
		},
		"first_group.sub_element_2": {
			"name": { 
				"en": "Some sub element 2", 
				"ru": "Какой-то под элемент 2" 
			},
			"description": { 
				"en": "Some sub element 2 description", 
				"ru": "Описание под элемента 2" 
			},
			"index": 3
		},
		"some_element_1": {
			"name": { 
				"en": "Some", 
				"ru": "Что-то" 
			},
			"description": { 
				"en": "Some description", 
				"ru": "Описание чего-то" 
			},
			"index": 4
		},
		"some_element_condition_1": {
			"name": { 
				"en": "Some", 
				"ru": "Что-то" 
			},
			"description": { 
				"en": "Some description", 
				"ru": "Описание чего-то" 
			},
			"displayIf": "enabled"
		}
	}
}
```