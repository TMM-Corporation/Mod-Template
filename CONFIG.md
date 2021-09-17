### **[ -> Russian <- ](CONFIG.ru.md)**

# Config file 

This is the configuration files that is needed to configure the modification inside the launcher.
For the structure of the JSON document format, see 
[here](https://developer.mozilla.org/ru/docs/Learn/JavaScript/Objects/JSON).

## What is the difference between `config.info.json` and `config.json` files?

File `config.info.json` is responsible for describing each setting and its type, as well as the display condition. 
And the file `config.json` only stores the settings that the user changes.

## The structure of the file with information about each setting

File `config.info.json`

```json
{
	"description": {                 // Config description/header
		"en": "Some",                // Description on English
		"ru": "Что-то"               // Description on Russian
	},                               // 
	"properties": {                  // Settings list
		"uniquie_name": {            // Unique name of the property
			"name": {                // Name of the property
				"en": "Some",        // Name on English
				"ru": "Что-то"       // Name on Russian
			},                       // 
			"description": {         // Description of the property
				"en": "Some",        // Description on English
				"ru": "Что-то"       // Description on Russian
			},                       // 
			"type": "SeekBar",       // Type of property
			"min": 0,                // Min value of the property
			"max": 0,                // Max value of the property
			"value": 0,              // Default value of the property
			"displayIf": "enabled",  // The condition for displaying the setting, takes logical values from the value of any setting "uniquie_name"
			"collapsible": true,     // Collapsible list/group of elements
			"index": 4               // The desired index of the position of the item in the list
		}
	}
}
```

## Structure of the main settings file

File `config.json`

```json
{
	"enabled": true,                  // Mandatory setting, responsible for the state of the mod, enabled/disabled.
	"first_group": {                  // You can group multiple items into one group.
		"sub_element_1": 15,          // The first element of the group.
		"sub_element_2": 10           // The second element of the group.
	},                                   
	"some_element_1": "abc",          // An element with the text value.
	"some_element_condition_1": 1.23  // An element with the value of a fractional number.
}
```

## Examples

File `config.info.json`
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