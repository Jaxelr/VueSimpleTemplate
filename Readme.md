[![Build status](https://ci.appveyor.com/api/projects/status/infk8356yyag6im4?svg=true)](https://ci.appveyor.com/project/Jaxelr/vuetemplate)

# Vue Simple Template

This template was created to use vue .Js with asp.net core using the SPA services. It tries to be minimalistic with its approach. It also favors Vue's single component files over Typescript. 

For the full fledge Vue Spa Service template, check [here](https://github.com/aspnet/JavaScriptServices/tree/release/2.0.0/templates/VueSpa)

To install the template locally, clone the repository and execute the following command with the dotnet command, using the path of the repo:

`dotnet new -i $PATH_OF_REPO`

or you can use the nuget version:

`dotnet new -i Vue.Simple.Template::*`

where * is the nomenclature for the latest version of the template. 

Once downloaded you can properly create the project from the template with:

`dotnet new simplevue -o MyAppName` 

Then proceed to:

`cd MyAppName`
`npm install`

Using the SpaServices from AspNet Core it will execute the webpack configurations once you build the site.
