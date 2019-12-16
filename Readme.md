# Vue Simple Template [![Mit License][mit-img]][mit]

This template was created to interact with a vue.js project inside an asp.net core app using the [Spa Services](https://github.com/aspnet/AspNetCore/tree/7269dbb73f4aa0ebf5ebb8bc07a076ee181851be/src/Middleware/SpaServices) library. It aims to be minimalistic with its approach. It also favors Vue's single file component over Typescript, since one of the efforts is to minimize friction when transitioning from a vue-cli project into this template.

This template targets netcore 3.1.

## Builds

| Appveyor  | Branch |
| :---:     | :---: |
| [![Build status][build-master-img]][build-master] | master |
| [![Build status][build-develop-img]][build-develop] | develop |

## Packages

| NuGet (Stable) | MyGet (Prerelease) |
| :---: | :---: |
| [![NuGet][nuget-img]][nuget] | [![MyGet][myget-img]][myget] |

## Prerequisites

You must have dotnetcore 3.1 or later installed.

## Installation

To install the template, via command line simply using nuget:

`dotnet new -i "Vue.Simple.Template::*"`

where * is the equivalent of the latest version of the template.

If you would like to tinker with the code locally, you can clone the repository and execute the following command with the dotnet command, using the path of the repo:

`dotnet new -i "$PATH_OF_NUPKG_FILE"`

Alternatively, you can use the myget prerelease package, by installing using the following command:

`dotnet new -i "Vue.Simple.Template::*" --nuget-source https://www.myget.org/F/vue-simple-template/api/v3/index.json`

Once installed as a template you can properly create your own custom projects using the template using the following command:

`dotnet new simplevue -o MyAppName`

It will generate the following folder structure:

``` tree
$
.
├── .editorconfig
├── appsettings.Development.json
├── appsettings.json
├── Program.cs
├── Startup.cs
├── {ProjectName}.csproj
├── {ProjectName}.sln
├── /ClientApp
│   ├── package.json
│   ├── package-lock.json
│   ├── babel.config.js
│   ├── vue.config.js
│   ├── /public
│   │    ├── favicon.ico
│   │    └── index.html
│   ├── /src
│   │    ├── store.js
│   │    ├── router.js
│   │    ├── main.js
│   │    ├── App.vue
│   │    ├── /assets
│   │    │    └── logo.png
│   │    ├── /components
│   │    │    └── HelloWorld.vue
│   │    └── /views
│   │         ├── Home.vue
│   │         └── About.vue
│   │
│   └── /node_modules
├── /Controllers
│   └── MainController.cs
└── /Views
    ├── _ViewStart.cshtml
    ├── _ViewImports.cshtml
    ├── /Shared
    │    └── _Layout.cshtml
    └── /Main
         └── Index.cshtml
```

Then proceed to:

``` bash
cd MyAppName
npm install
```

The ClientApp folder includes the default project created using the vue-cli 3.0. You can (optionally) replace the contents of the clientApp folder with your own custom vue project, since this template interacts directly with the vue commands, for building and debugging purposes.

For more information on how to interact with the new vue-cli 3.0, you can [check this tutorial](https://www.vuemastery.com/courses/real-world-vue-js/vue-cli/)

---

## Uninstalling

The syntax for uninstalling from the command line is the following:

`dotnet new -u "Vue.Simple.Template"`

Or

`dotnet new -u "$PATH_OF_NUPKG_FILE"`

## Previous Versions

The table below includes the latest template version alongside the netcore version which it targets

| netcore version | template version |
| -- | -- |
| 3.0 | 4.1 |
| 2.2 | 3.6 |
| 2.1 | 2.3 |

These are available on nuget

### Further info

For More information on how to manage dotnet custom templates see the [docs.microsoft documentation](https://docs.microsoft.com/en-us/dotnet/core/tools/custom-templates)

## Contributing

Check the [contribution guide](https://github.com/Jaxelr/VueSimpleTemplate/blob/master/.github/CONTRIBUTING.md)

[mit-img]: http://img.shields.io/badge/License-MIT-blue.svg
[mit]: https://github.com/Jaxelr/VueSimpleTemplate/blob/master/LICENSE
[build-master-img]: https://ci.appveyor.com/api/projects/status/vvnkjjckfv6v1dgk/branch/master?svg=true
[build-master]: https://ci.appveyor.com/project/Jaxelr/vuetemplate/branch/master
[build-develop-img]: https://ci.appveyor.com/api/projects/status/vvnkjjckfv6v1dgk/branch/develop?svg=true
[build-develop]: https://ci.appveyor.com/project/Jaxelr/vuetemplate/branch/develop
[nuget-img]: https://img.shields.io/nuget/v/Vue.Simple.Template.svg
[nuget]: https://www.nuget.org/packages/Vue.Simple.Template/
[myget-img]: https://img.shields.io/myget/vue-simple-template/v/Vue.Simple.Template.svg
[myget]: https://www.myget.org/feed/vue-simple-template/package/nuget/Vue.Simple.Template
