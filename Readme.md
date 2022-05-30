# Vue Simple Template [![Mit License][mit-img]][mit]

This template was created to interact with a vue.js project inside an asp.net core app using the [Spa Services](https://github.com/aspnet/AspNetCore/tree/7269dbb73f4aa0ebf5ebb8bc07a076ee181851be/src/Middleware/SpaServices) library. It aims to be minimalistic with its approach. It also favors Vue's single file component over Typescript, since one of the efforts is to minimize friction when transitioning from a vue-cli project into this template.

This template targets net 6.0

## Builds

| Appveyor  | Branch |
| :---:     | :---: |
| [![Build status][build-master-img]][build-master] | master |

## Packages

| NuGet (Stable) | MyGet (Prerelease) | Gh Packages (Mirror) | 
| :---: | :---: | :---: |
| [![NuGet][nuget-img]][nuget] | [![MyGet][myget-img]][myget] | [![Github][ghpkg-img]][ghpkg] |

## Prerequisites

You must have net 6.0 installed. It also depends on Node.js (version 14) and npm (version 6) must exist in order to use the Vue Client App. The project will not compile if Node.js or Npm aren't present.

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
│   ├── jsconfig.json
│   ├── babel.config.js
│   ├── vue.config.js
│   ├── /public
│   │    ├── favicon.ico
│   │    └── index.html
│   ├── /src
│   │    ├── main.js
│   │    ├── App.vue
│   │    ├── /assets
│   │    │    └── logo.png
│   │    └── /views
│   │         └── HelloWorld.vue
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

Vue-Cli also has the ability to scaffold an app using [vue ui](https://scotch.io/tutorials/creating-vue-apps-with-the-vue-ui-tool) which is an alternative to the command line vue installation.

---

## Uninstalling

The syntax for uninstalling from the command line is the following:

`dotnet new -u "Vue.Simple.Template"`

Or

`dotnet new -u "$PATH_OF_NUPKG_FILE"`

## Previous Versions

The table below includes the latest template version alongside the netcore version which it targets

| net(core) version | template version |
| -- | -- |
| 6.0 | 0.7.0 | 
| 5.0 | 0.6.1 |
| 3.1 | 0.5.0 |
| 3.0 | 0.4.1 |
| 2.2 | 0.3.6 |
| 2.1 | 0.2.3 |

These are all available on nuget

### Further info

For More information on how to manage dotnet custom templates see the [docs.microsoft documentation](https://docs.microsoft.com/en-us/dotnet/core/tools/custom-templates)

## Contributing

Check the [contribution guide](https://github.com/Jaxelr/VueSimpleTemplate/blob/master/.github/CONTRIBUTING.md)

[mit-img]: http://img.shields.io/badge/License-MIT-blue.svg
[mit]: https://github.com/Jaxelr/VueSimpleTemplate/blob/master/LICENSE
[build-master-img]: https://github.com/Jaxelr/VueSimpleTemplate/actions/workflows/ci.yml/badge.svg
[build-master]: https://github.com/Jaxelr/VueSimpleTemplate/actions/workflows/ci.yml
[nuget-img]: https://img.shields.io/nuget/v/Vue.Simple.Template.svg
[nuget]: https://www.nuget.org/packages/Vue.Simple.Template/
[myget-img]: https://img.shields.io/myget/vue-simple-template/v/Vue.Simple.Template.svg
[myget]: https://www.myget.org/feed/vue-simple-template/package/nuget/Vue.Simple.Template
[ghpkg-img]: https://img.shields.io/myget/vue-simple-template/v/Vue.Simple.Template.svg
[ghpkg]: https://github.com/Jaxelr/VueSimpleTemplate/packages/1447090