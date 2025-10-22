# SurveyJS + Blazor + Vanilla JS Quickstart Template

SurveyJS is a set of JavaScript components that allow you and your users to build surveys / forms, store them in your database, and visualize survey results for data analysis. This quick start template shows how to integrate the following SurveyJS components into a Blazor application without using any front-end framework:

- [SurveyJS Form Library](https://surveyjs.io/form-library/documentation/overview)
- [Survey Creator / Form Builder](https://surveyjs.io/survey-creator/documentation/overview)
- [SurveyJS PDF Generator](https://surveyjs.io/pdf-generator/documentation/overview)
- [SurveyJS Dashboard](https://surveyjs.io/dashboard/documentation/overview)

> SurveyJS also supports integrations with React, Angular, Vue 3, and jQuery. Refer to the following repository for an example with React: [SurveyJS + Blazor + React Quickstart Template](https://github.com/surveyjs/surveyjs-blazor).

## Run the application

```bash
git clone https://github.com/surveyjs/surveyjs-blazor-vanillajs.git
cd surveyjs-blazor-vanillajs
dotnet run
```

Open http://localhost:5008/ in your web browser.

> NOTE: This application uses [.NET 8.0](https://dotnet.microsoft.com/en-us/download/dotnet/8.0). Make sure that you have ASP.NET Core Runtime 8.0 installed on your machine.

## Template structure

This template covers most basic use cases. You can find code examples for them in the following files:

- Create a standalone survey
  - [wwwroot/data/survey_json.js](wwwroot/data/survey_json.js)
  - [wwwroot/js/survey.js](wwwroot/js/survey.js)
  - [Components/Pages/FormLibrary.razor](Components/Pages/FormLibrary.razor)
- Add Survey Creator to a page
  - [wwwroot/js/creator.js](wwwroot/js/creator.js)
  - [Components/Pages/Creator.razor](Components/Pages/Creator.razor)
- Export a survey to a PDF document
  - [wwwroot/js/pdf-generator.js](wwwroot/js/pdf-generator.js)
  - [Components/Pages/Pdf.razor](Components/Pages/Pdf.razor)
- Visualize survey results
  - As charts
    - [wwwroot/data/dashboard_json.js](wwwroot/data/dashboard_json.json)
    - [wwwroot/data/survey_data.js](wwwroot/data/survey_data.js)
    - [wwwroot/js/dashboard.js](wwwroot/js/dashboard.js)
    - [Components/Pages/Dashboard.razor](Components/Pages/Dashboard.razor)
  - As a table
    - [wwwroot/data/dashboard_json.js](wwwroot/data/dashboard_json.json)
    - [wwwroot/data/survey_data.js](wwwroot/data/survey_data.js)
    - [wwwroot/js/tabulator.js](wwwroot/js/tabulator.js)
    - [Components/Pages/Table.razor](Components/Pages/Table.razor)

## How to integrate SurveyJS components into your Blazor application

Refer to the following SurveyJS help topics:

- [Form Library](https://surveyjs.io/form-library/documentation/get-started-html-css-javascript)
- [Survey Creator / Form Builder](https://surveyjs.io/survey-creator/documentation/get-started-html-css-javascript)
- [Dashboard](https://surveyjs.io/dashboard/documentation/get-started-html-css-javascript)
- [Table View for Survey Results](https://surveyjs.io/dashboard/documentation/set-up-table-view/html-css-javascript)
- [PDF Generator](https://surveyjs.io/pdf-generator/documentation/get-started-html-css-javascript)

## SurveyJS Resources

- [Website](https://surveyjs.io/)
- [Documentation](https://surveyjs.io/form-library/documentation/overview)
- [Starter Demos](https://surveyjs.io/form-library/examples/overview)
- [What's New](https://surveyjs.io/stay-updated/major-updates/2024)