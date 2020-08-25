
Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    title: "Technical Requirement Format Knowledge Test",
    showProgressBar: "bottom",
    
   
    
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",
    pages: [
        {
            questions: [
                {
                    type: "html",
                    html: "You are about to take SpecFormat knowledge test. <br/>You 10 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready."
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Technical",
                    title: "What requirement is violated (Hollow Brick: ASTM C 652, Grade SW, Class H40V (void areas between 25 and 40 percent of gross cross-sectional area, Type HBX.)?",
                    choices: [
                        "C1", "C2", "C3", "C4"
                    ],
                    correctAnswer: "C2"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Technical",
                    title: "What requirement is violated (Hollow Brick: ASTM C 652, Grade SW, Class H40V (void areas between 25 and 40 percent of gross cross-sectional area, Type HBX.)?",
                    choices: [
                        "C1", "C2", "C3", "C4"
                    ],
                    correctAnswer: "C2"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Technical",
                    title: "What requirement is violated (Hollow Brick: ASTM C 652, Grade SW, Class H40V (void areas between 25 and 40 percent of gross cross-sectional area, Type HBX.)?",
                    choices: [
                        "C1", "C2", "C3", "C4"
                    ],
                    correctAnswer: "C2"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Technical",
                    title: "What requirement is violated (Hollow Brick: ASTM C 652, Grade SW, Class H40V (void areas between 25 and 40 percent of gross cross-sectional area, Type HBX.)?",
                    choices: [
                        "C1", "C2", "C3", "C4"
                    ],
                    correctAnswer: "C2"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Technical",
                    title: "What requirement is violated (Hollow Brick: ASTM C 652, Grade SW, Class H40V (void areas between 25 and 40 percent of gross cross-sectional area, Type HBX.)?",
                    choices: [
                        "C1", "C2", "C3", "C4"
                    ],
                    correctAnswer: "C2"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Technical",
                    title: "What requirement is violated (Hollow Brick: ASTM C 652, Grade SW, Class H40V (void areas between 25 and 40 percent of gross cross-sectional area, Type HBX.)?",
                    choices: [
                        "C1", "C2", "C3", "C4"
                    ],
                    correctAnswer: "C2"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Technical",
                    title: "What requirement is violated (Hollow Brick: ASTM C 652, Grade SW, Class H40V (void areas between 25 and 40 percent of gross cross-sectional area, Type HBX.)?",
                    choices: [
                        "C1", "C2", "C3", "C4"
                    ],
                    correctAnswer: "C2"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Technical",
                    title: "What requirement is violated (Hollow Brick: ASTM C 652, Grade SW, Class H40V (void areas between 25 and 40 percent of gross cross-sectional area, Type HBX.)?",
                    choices: [
                        "C1", "C2", "C3", "C4"
                    ],
                    correctAnswer: "C2"
                }
            ]
        }, {
            
            questions: [
                {
                    type: "radiogroup",
                    name: "Technical",
                    title: "What requirement is violated (Hollow Brick: ASTM C 652, Grade SW, Class H40V (void areas between 25 and 40 percent of gross cross-sectional area, Type HBX.)?",
                    choices: [
                        "C1", "C2", "C3", "C4"
                    ],
                    correctAnswer: "C2"
                }
            ]
        }, {
            maxTimeToFinish: 15,
            questions: [
                {
                    type: "radiogroup",
                    name: "magnacarta",
                    title: "What requirement is violated (Hollow Brick: ASTM C 652, Grade SW, Class H40V (void areas between 25 and 40 percent of gross cross-sectional area, Type HBX.)?",
                    choices: [
                        "C1", "C2", "C3", "C4"
                    ],
                    correctAnswer: "C2"
                }
            ]
        }
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            // .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

$("#surveyElement").Survey({model: survey});
