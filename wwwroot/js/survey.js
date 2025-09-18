window.initializeSurvey = function (surveyJsonString, dotnetHelper) {
    try {
        const surveyJson = JSON.parse(surveyJsonString);
        const survey = new Survey.Model(surveyJson);
        survey.onComplete.add(function (result) {
            const surveyData = result.data;
            const resultsJson = JSON.stringify(surveyData);
            console.log('Survey complete, sending results:', resultsJson);
            if (dotnetHelper) {
                dotnetHelper.invokeMethodAsync('OnSurveyComplete', resultsJson);
            } else {
                console.error('dotnetHelper is undefined');
            }
        });
        
        const surveyContainer = document.getElementById('surveyContainer');
        if (surveyContainer) {
            survey.render(surveyContainer);
        } else {
            console.error('Survey container not found');
        }
        console.log('Survey initialized successfully');
    } catch (error) {
        console.error('Error initializing survey:', error);
    }
};