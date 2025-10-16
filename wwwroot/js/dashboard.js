
window.initializeSurveyDashboard = async function (surveyJsonUrl, dotnetHelper) {
    try {        
        const response = await fetch(surveyJsonUrl);
        if (!response.ok) throw new Error(`Failed to load ${surveyJsonUrl}`);
        const surveyJson = await response.json();
        
        const survey = new Survey.Model(surveyJson);

        const vizPanel = new SurveyAnalytics.VisualizationPanel(
            survey.getAllQuestions(),
            window.surveyResults
        );
        vizPanel.render("surveyDashboardContainer");

        if (dotnetHelper) {
            dotnetHelper.invokeMethodAsync("OnDashboardRendered");
        }

        console.log("Survey Dashboard initialized successfully");
    } catch (error) {
        console.error("Error initializing Survey Dashboard:", error);
    }
};
