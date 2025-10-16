window.loadSurveyFromFile = async function (url, dotnetHelper) {
    try {
        const response = await fetch(url);        
        if (!response.ok) throw new Error(`Failed to load ${url}`);
        const surveyJson = await response.json();
        const survey = new Survey.Model(surveyJson);

        survey.onComplete.add(result => {
            const resultsJson = JSON.stringify(result.data);
            console.log("Survey complete:", resultsJson);
            if (dotnetHelper) dotnetHelper.invokeMethodAsync("OnSurveyComplete", resultsJson);
        });

        const container = document.getElementById("surveyContainer");
        if (container) survey.render(container);
        else console.error("Survey container not found");
    } catch (e) {
        console.error("Error loading survey:", e);
    }
};