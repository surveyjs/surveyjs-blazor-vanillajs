window.initializeSurveyTabulator = async function (surveyJsonUrl, surveyDataUrl, dotnetHelper) {
    try {
        const surveyResponse = await fetch(surveyJsonUrl);
        if (!surveyResponse.ok) throw new Error(`Failed to load ${surveyJsonUrl}`);
        const surveyJson = await surveyResponse.json();        

        const survey = new Survey.Model(surveyJson);
        const tabulator = new SurveyAnalyticsTabulator.Tabulator(survey, window.surveyResults);

        const loadingEl = document.getElementById("loadingIndicator");
        if (loadingEl) loadingEl.style.display = "none";

        tabulator.render("surveyTabulatorContainer");

        if (dotnetHelper) {
            dotnetHelper.invokeMethodAsync("OnTabulatorRendered");
        }

        console.log("Survey Tabulator initialized successfully");
    } catch (error) {
        console.error("Error initializing Survey Tabulator:", error);
    }
};
