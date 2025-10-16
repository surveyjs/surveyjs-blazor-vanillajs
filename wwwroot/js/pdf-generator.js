window.initializeSurveyPdf = async function (surveyJsonUrl, dotnetHelper) {
    try {
        const surveyResponse = await fetch(surveyJsonUrl);
        if (!surveyResponse.ok) throw new Error(`Failed to load ${surveyJsonUrl}`);
        const surveyJson = await surveyResponse.json();
        
        const survey = new Survey.Model(surveyJson);
        survey.data = surveyData;

        const container = document.getElementById("surveyPdfContainer");
        if (!container) {
            console.error("Survey PDF container not found");
            return;
        }

        survey.render(container);

        survey.addNavigationItem({
            id: "survey_save_as_file",
            title: "Save as PDF",
            action: () => {
                const options = {
                    fontSize: 14,
                    margins: { left: 10, right: 10, top: 10, bot: 10 },
                    format: [210, 297]
                };
                const surveyPDF = new SurveyPDF.SurveyPDF(surveyJson, options);
                surveyPDF.data = survey.data;
                surveyPDF.save("surveyResult.pdf");
            }
        });

        if (dotnetHelper) {
            dotnetHelper.invokeMethodAsync("OnSurveyPdfRendered");
        }
    } catch (error) {
        console.error("Error loading Survey PDF:", error);
    }
};
