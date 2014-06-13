# Single Page Application boilerplate
A single page application boilerplate project based on ASP.NET on the backend and Durandal on the frontend. Weyland is used to build the JavaScript and HTML files used by the application. Example views for displaying and updating data is included.

## Building blocks
This project is built with the following components:

* [Durandal](http://durandaljs.com/) - a mix of popular JS frameworks to build SPA applications
* [ASP.NET Web API 2](http://www.asp.net/web-api)
* [ASP.NET MVC 5](http://www.asp.net/mvc)
* [StructureMap](https://github.com/structuremap/structuremap) - IoC/DI framework

### Prerequisites
* [Visual Studio 2013](http://www.visualstudio.com/)
* [Web Essentials 2013](http://www.vswebessentials.com)
* [NodeJS](http://nodejs.org)

### Installation
Clone the source from GitHub, like this:

    git clone https://github.com/lagerone/singlepageapplication.git

Install the Weyland package, that is used to build the Durandal files in Release mode:

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
