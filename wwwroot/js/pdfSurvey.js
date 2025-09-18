window.initializeSurveyPdf = function (surveyJsonString, surveyDataJsonString, dotnetHelper) {
    try {
        const json = JSON.parse(surveyJsonString);
        const surveyData = surveyDataJsonString ? JSON.parse(surveyDataJsonString) : {};

        // Create Survey model
        const survey = new Survey.Model(json);
        survey.data = surveyData;

        // Render survey in container
        const container = document.getElementById("surveyPdfContainer");
        if (!container) {
            console.error("Survey PDF container not found");
            return;
        }
        survey.render(container);

        // Add a toolbar/navigation item to save as PDF
        survey.addNavigationItem({
            id: "survey_save_as_file",
            title: "Save as PDF",
            action: () => {
                const options = {
                    fontSize: 14,
                    margins: { left: 10, right: 10, top: 10, bot: 10 },
                    format: [210, 297] // A4 size
                };
                const surveyPDF = new SurveyPDF.SurveyPDF(json, options);
                surveyPDF.data = survey.data;
                surveyPDF.save("surveyResult.pdf");
            }
        });

        console.log("Survey PDF initialized successfully");

        if (dotnetHelper) {
            dotnetHelper.invokeMethodAsync("OnSurveyPdfRendered");
        }
    } catch (error) {
        console.error("Error initializing Survey PDF:", error);
    }
};
