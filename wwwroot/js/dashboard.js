window.initializeSurveyDashboard = function (surveyJsonString, surveyDataArray, dotnetHelper) {
    try {
        const json = JSON.parse(surveyJsonString);
        const dataFromServer = Array.isArray(surveyDataArray) ? surveyDataArray : JSON.parse(surveyDataArray);

        const survey = new Survey.Model(json);

       const vizPanel = new SurveyAnalytics.VisualizationPanel(
                survey.getAllQuestions(),
                dataFromServer
       );
       vizPanel.render("surveyDashboardContainer");

       if (dotnetHelper) dotnetHelper.invokeMethodAsync("OnDashboardRendered");
       
        console.log("Survey Dashboard initialized successfully");
    } catch (error) {
        console.error("Error initializing Survey Dashboard:", error);
    }
};
