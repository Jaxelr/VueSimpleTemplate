# Vue Template

This template was created to use vue .Js with asp.net core using the SPA services. It tries to be minimalistic with the approach. It also favors Vue's single component files instead of using Typescript.

For the full fledge Vue Spa Service template, check [here](https://github.com/aspnet/JavaScriptServices/tree/dev/templates/Microsoft.AspNetCore.SpaTemplates/vue)

To install the template locally, clone the repository and execute the following command with the dotnet command, using the path of the repo:

`dotnet new -i $PATH_OF_REPO`

or you can use the nuget version:

`dotnet new -i Vue.Template::*`

where * is the nomenclature for the latest version of the template. 

Once downloaded the configuration instructions are to run:

`npm install`

Using the SpaServices from AspNet Core it will execute the webpack configurations once you build the site.