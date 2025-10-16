window.initializeSurveyCreator = async function (url, dotnetHelper) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to load ${url}`);
        const surveyJson = await response.json();

        SurveyCreatorCore.registerCreatorTheme(SurveyCreatorTheme);

        const creator = new SurveyCreator.SurveyCreator({
            showLogicTab: true,
            isAutoSave: false
        });

        creator.JSON = surveyJson;

        const creatorContainer = document.getElementById("surveyCreatorContainer");
        if (creatorContainer) {
            creator.render(creatorContainer);
        } else {
            console.error("Survey Creator container not found");
        }

        creator.saveSurveyFunc = (no, callback) => {
            const jsonString = JSON.stringify(creator.JSON);
            console.log("Survey saved:", jsonString);

            if (dotnetHelper) {
                dotnetHelper.invokeMethodAsync("OnSurveySaved", jsonString)
                    .then(() => callback(no, true))
                    .catch(err => {
                        console.error("Error calling .NET OnSurveySaved:", err);
                        callback(no, false);
                    });
            } else {
                console.error("dotnetHelper is undefined");
                callback(no, false);
            }
        };

        console.log("Survey Creator initialized successfully from file");
    } catch (error) {
        console.error("Error loading Survey Creator:", error);
    }
};
