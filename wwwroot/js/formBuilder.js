window.initializeSurveyCreator = function (surveyJsonString, dotnetHelper) {
    try {
        // Register Survey Creator theme
        SurveyCreatorCore.registerCreatorTheme(SurveyCreatorTheme);

        // Create Survey Creator instance
        const creator = new SurveyCreator.SurveyCreator({
            showLogicTab: true,
            isAutoSave: false
        });
        creator.text = surveyJsonString;
        // Render it inside container
        const creatorContainer = document.getElementById("surveyCreatorContainer");
        if (creatorContainer) {
            creator.render(creatorContainer);
        } else {
            console.error("Survey Creator container not found");
        }

        // Callback when survey definition changes
        creator.saveSurveyFunc = (no, callback) => {
            const surveyJson = JSON.stringify(creator.JSON);
            console.log("Survey saved:", surveyJson);

            if (dotnetHelper) {
                dotnetHelper.invokeMethodAsync("OnSurveySaved", surveyJson)
                    .then(() => {
                        // Let Creator know the save succeeded
                        callback(no, true);
                    })
                    .catch(err => {
                        console.error("Error calling .NET OnSurveySaved:", err);
                        callback(no, false);
                    });
            } else {
                console.error("dotnetHelper is undefined");
                callback(no, false);
            }
        };

        console.log("Survey Creator initialized successfully");
    } catch (error) {
        console.error("Error initializing Survey Creator:", error);
    }
};
