# Single Page Application boilerplate
A single page application that can read from and write to a database by communicating with a web api.

## Building blocks
The perfect stack template consists of 

* [Durandal](http://durandaljs.com/)
* [ASP.NET Web API 2](http://www.asp.net/web-api)
* [ASP.NET MVC 5](http://www.asp.net/mvc)
* [StructureMap IoC](https://github.com/structuremap/structuremap)

### Prerequisites
* [Visual Studio 2013](http://www.visualstudio.com/)
* [Web Essentials 2013](http://www.vswebessentials.com)
* [NodeJS](http://nodejs.org)

### Installation
    git clone http://..... 

    npm install -g weyland

### Directory Layout
    SinglePageApplication.Web/
            App/               	=> The application javascript
            App/viewmodels 		=> Knockout view models
            App/views 			=> HTML view files
            App/services        => Data service for asyncronous API calls
            Controllers/		=> MVC Controllers
            Controllers/Api/	=> Web APIs
            Content/			=> CSS and LESS files
            Models/				=> MVC view models
            Repositories/		=> Repository classes and interfaces
            Scripts/			=> Javascript libraries
            Views/				=> Razor view files


## Strengths
* A template to quickly get you started building a single page application
* The project follows known patterns and conventions


## Weaknesses
* Not so many good examples on what you can do with it, like full CRUD functionality
* No database integration

## Possible improvements and extensions
* Connect the repository to a real database
* Add update and delete functionality to the example API