# Integrate pure HTML/JS/CSS SurveyJS libraries into Blazor 

SurveyJS is a set of JavaScript components that allow you and your users to build surveys / forms, store them in your database, and visualize survey results for data analysis. This quick start template shows how to integrate pure HTML/JS/CSS SurveyJS components into a Blazor application:

- [SurveyJS Form Library](https://surveyjs.io/form-library/documentation/overview)
- [Survey Creator / Form Builder](https://surveyjs.io/survey-creator/documentation/overview)
- [SurveyJS PDF Generator](https://surveyjs.io/pdf-generator/documentation/overview)
- [SurveyJS Dashboard](https://surveyjs.io/dashboard/documentation/overview)

This project uses SurveyJS Vanilla JS packages without any specific frontend framework. If you wish to use a particular frontend framework, refer to corresponding integration tutorial for your JavaScript platform.

## Run the application

```bash
git clone https://github.com/surveyjs/surveyjs-vanillajs-blazor.git
cd surveyjs-vanillajs-blazor
npm i
dotnet run
```

Open http://localhost:7219/ in your web browser.

> NOTE: This application uses [.NET 8.0](https://dotnet.microsoft.com/en-us/download/dotnet/8.0). Make sure that you have ASP.NET Core Runtime 8.0 installed on your machine.

## Template structure

This template covers most basic use cases. You can find code examples for them in the following files:

- Create a standalone survey
  - [wwwroot/js/survey.js](wwwroot/js/survey.js)
- Add Survey Form Builder to a page
  - [wwwroot/js/formBuilder.js](wwwroot/js/formBuilder.js)
- Export a survey to a PDF document
  - [wwwroot/js/pdfSurvey.js](wwwroot/js/pdfSurvey.js)
- Visualize survey results
  - As charts
    - [wwwroot/js/survey.js](wwwroot/js/dashboard.js)
  - As a table
    - [wwwroot/js/tabulator.js](wwwroot/js/tabulator.js)

Razor components that render SurveyJS components:
- Create a standalone survey
  - [Form.razor](Components/Pages/Form.razor)
- Add Survey Form Builder to a page
  - [FormBuilder.razor](Components/Pages/FormBuilder.razor)
- Export a survey to a PDF document
  - [SurveyPDF.razor](Components/Pages/SurveyPDF.razor)
- Visualize survey results
  - As charts
    - [Dashboard.razor](Components/Pages/Dashboard.razor)
  - As a table
    - [Tabulator.razor](Components/Pages/Tabulator.razor)

## How to integrate SurveyJS components into your Blazor application

SurveyJS components can be used in a frameworkless application or within an Angular, React, and Vue.js. You can integrate SurveyJS into a Blazor application that already uses one of these JavaScript frameworks/libraries or into one that doesn't use any of them. In this demo, we do not use any specific JS framework.

- [JavaScript Form Library](https://surveyjs.io/form-library/documentation/get-started-html-css-javascript)
- [Add Survey Creator / Form Builder to a JavaScript Application](https://surveyjs.io/survey-creator/documentation/get-started-html-css-javascript)
- [Add SurveyJS Dashboard to a JavaScript Application](https://surveyjs.io/dashboard/documentation/get-started-html-css-javascript)
- [Table View for Survey Results in a JavaScript Application](https://surveyjs.io/dashboard/documentation/set-up-table-view/html-css-javascript)
- [Export Survey to PDF in a JavaScript Application](https://surveyjs.io/pdf-generator/documentation/get-started-html-css-javascript)

## SurveyJS Resources

- [Website](https://surveyjs.io/)
- [Documentation](https://surveyjs.io/form-library/documentation/overview)
- [Starter Demos](https://surveyjs.io/form-library/examples/overview)
- [What's New](https://surveyjs.io/stay-updated/major-updates/2024)