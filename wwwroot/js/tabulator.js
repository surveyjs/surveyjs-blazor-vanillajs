window.initializeSurveyTabulator = function (surveyJsonString, surveyDataJsonString, dotnetHelper) {
    try {
        const json = JSON.parse(surveyJsonString);
        const dataFromServer = Array.isArray(surveyDataJsonString) ? surveyDataJsonString : JSON.parse(surveyDataJsonString);

        const survey = new Survey.Model(json);

        // Simulate async server load
        setTimeout(() => {
            const vizPanel = new SurveyAnalyticsTabulator.Tabulator(survey, dataFromServer);
            const loadingEl = document.getElementById("loadingIndicator");
            if (loadingEl) loadingEl.style.display = "none";

            vizPanel.render("surveyTabulatorContainer");

            if (dotnetHelper) {
                dotnetHelper.invokeMethodAsync("OnTabulatorRendered");
            }
        }, 500);

        console.log("Survey Tabulator initialized successfully");
    } catch (error) {
        console.error("Error initializing Survey Tabulator:", error);
    }
};
