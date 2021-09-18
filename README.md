### **[ -> Руссский <- ](README.ru.md)**

# {Project Name}

Simple overview of use/purpose.

## GitHub

Change "TMM-Corporation/Mod-Template" to "Username/Repo-name"

![GitHub](https://img.shields.io/github/license/TMM-Corporation/Mod-Template?label=License&style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/TMM-Corporation/Mod-Template?label=Repo%20Size&style=flat-square)
![GitHub issues](https://img.shields.io/github/issues-raw/TMM-Corporation/Mod-Template?label=Opened%20issues&style=flat-square)
![GitHub issues](https://img.shields.io/github/issues-closed-raw/TMM-Corporation/Mod-Template?label=Closed%20issues&style=flat-square)

![GitHub last commit](https://img.shields.io/github/last-commit/TMM-Corporation/Mod-Template?label=Latest%20changes&style=flat-square)
![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/TMM-Corporation/Mod-Template?include_prereleases&label=Latest%20Release&style=flat-square)
![GitHub all releases](https://img.shields.io/github/downloads/TMM-Corporation/Mod-Template/total?label=Downloads&style=flat-square)

## ICMods

If you uploaded mod to icmods:
Change "id%3D22" to "id%3D" + mod id number. 

![Name](https://img.shields.io/badge/dynamic/json?color=green&label=Downloads&query=%24.downloads&url=https%3A%2F%2Ficmods.mineprogramming.org%2Fapi%2Fdescription.php%3Fid%3D22?style=flat-square)
![Downloads](https://img.shields.io/badge/dynamic/json?color=green&label=Downloads&query=%24.downloads&url=https%3A%2F%2Ficmods.mineprogramming.org%2Fapi%2Fdescription.php%3Fid%3D22?style=flat-square)
![Version](https://img.shields.io/badge/dynamic/json?color=green&label=Version&query=%24.version_name&url=https%3A%2F%2Ficmods.mineprogramming.org%2Fapi%2Fdescription.php%3Fid%3D22?style=flat-square)
![Likes](https://img.shields.io/badge/dynamic/json?color=green&label=Likes&query=%24.likes&url=https%3A%2F%2Ficmods.mineprogramming.org%2Fapi%2Fdescription.php%3Fid%3D22?style=flat-square)
![Latest update](https://img.shields.io/badge/dynamic/json?color=green&label=Latest%20update&query=%24.last_update&url=https%3A%2F%2Ficmods.mineprogramming.org%2Fapi%2Fdescription.php%3Fid%3D22?style=flat-square)

## Description

A detailed description about your project and an overview of the use.

This is port for Minecraft Bedrock Edition, working under InnerCore for Horizon Modding Kernel.

---

## Getting Started

### To setup properly requires:

1. [Toolchain](https://github.com/ToxesFoxes/innercore-mod-toolchain) to build mod
2. [Python](https://www.python.org/) 3.6 or higher
3. [node.js](https://nodejs.org/en/) 10.15.1 or higher, you need to have `typescript` installed 
4. [Java Development Kit 1.8](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html) or higher

### Environment setup:
1. Clone this repo into `/toolchain-mod/mods/`
2. Configure make.json from root folder of mod
3. Configure projects.json of the toolchain for selecting the project

The `make.json` file should look like this:

```json
{
  "current": "project-name",
  "projects": {
    "project-name": {
      "folder": "mods/Mod-Template",
      "make_config": "make.json"
    }
  }
}
```

4. Configure ADB path if you have problems with connections.

### Folder structure with Toolchain

```
.
├ mods
│ ├ ...
│ ├ Project Name                # Name project
│ │ ├ src                       # Source code
│ │ │ ├ assets                  # Assets
│ │ │ │ ├ behavior_packs        # Behavior packs
│ │ │ │ ├ res                   # Resources of mod
│ │ │ │ │ ├ items-opaque        # Item textures
│ │ │ │ │ ├ terrain-atlas       # Block textures
│ │ │ │ ├ resource_packs        # Resource packs
│ │ │ │ ├ ui                    # UI textures
│ │ │ │ ├ mod_icon.png          # Mod icon
│ │ │ ├ build                   # Build folders
│ │ │ │ ├ dev                   # Main development build
│ │ │ │ │ ├ header.js           
│ │ │ │ │ ├ ...                 
│ │ │ │ │ ├ .includes           # Include files into build
│ │ │ │ ├ java                  # Java build
│ │ │ │ │ ├ project-name        # Project name
│ │ │ │ │ │ ├ lib               # Libraries
│ │ │ │ │ │ ├ src               # Source code
│ │ │ │ │ │ └ manifest          # Build manifest
│ │ │ │ ├ native                # C++/Native build
│ │ │ │ │ ├ project-name        # Project name
│ │ │ │ │ │ ├ shared_headers    # Header files
│ │ │ │ │ │ │ ├ callbacks.h     
│ │ │ │ │ │ │ ├ ...             
│ │ │ │ │ │ ├ main.cpp          # Main file
│ │ │ │ │ │ └ manifest          # Build manifest
│ │ │ │ ├ preloader             # Preloader build, starts before minecraft
│ │ │ │ │ ├ ...                 
│ │ │ │ │ ├ .includes           # Include files
│ │ │ │ ├ launcher.js           # Launcher configuration file
│ │ │ │ └ ...                   
│ │ │ ├ lib                     # JS Libraries for mod
│ │ │ ├ config.info.json        # Configuration description file
│ │ │ └ config.json             # Configuration file, see CONFIG.md
│ │ ├ CHANGELOG.md              # Changelog of mod
│ │ ├ make.json                 # The main mod description file, describes all the information for the build
│ │ └ README.md                 # Readme file
│ ├ ...                         
├ output                        # Output folder
│ ├ release                     # Release build folder
│ ├ debug                       # Debug build folder
├ toolchain                     # Toolchain folder
│ ├ ...                         
├ .classpath                    # Java classpath file
├ projects.json                 # A file with a list of all projects to build
└ ...                           
```

### Build mod

1. Connect to phone using ADB.
2. Choose task `Build Everything` from build menu `ctrl+shift+b` or use VS Code `Task Explorer` extension.

---

## Authors

Contributors names and contact info

ToxesFoxes - 
[Twitter](https://twitter.com/ToxesFoxes),
[Vk](https://vk.com/ToxesFoxes)

## Note

I'm not associated with {Project Name} developer team which develop original mod for PC, this is unofficial port of their mod to Minecraft on Android.
All rights for textures from {Project Name} for PC reserved by {Project Name} developer team.

## Credits

Thanks to:
* Zheka Smirnov for InnerCore modloader.
* All [contributors](https://github.com/TMM-Corporation/Mod-Template/graphs/contributors)

## License

This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details