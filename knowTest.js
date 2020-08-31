
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
                    html: "You are about to take SpecFormat knowledge test. <br/>You have 10 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready."
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Technical",
                    title: "Technical requirements define what is required in the design, they do not define how to create the design?",
                    choices: [
                        "C1 Necessary", "C2 Appropriate", "C3 Unambiguous", "C4 Complete"
                    ],
                    correctAnswer: "C2 Appropriate"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Technical",
                    title: "A requirement is necessary (needed in the set of requirements) if",
                    choices: [
                        "A – the requirement can be removed and the remaining set will still result in the entity needs being satisfied.",
                        "B – the intent of the requirement will be met by the implementation of other requirements", 
                        "C – the author cannot communicate the reason for the requirement",
                        "D – a requirement must be able to be traced to a source which could be one or more entity need(s) or higher-level allocated requirement"
                    ],
                    correctAnswer: "D – a requirement must be able to be traced to a source which could be one or more entity need(s) or higher-level allocated requiremen"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Technical",
                    title: "Which rule the following requirement is violated (The Identity of the Customer shall be confirmed)?",
                    choices: [
                        "R2 Use an Active Voice", "R4 Use Defined Terms", "R14 Use Correct Spelling", "R24 Do Not Use Generalizations"
                    ],
                    correctAnswer: "R2 Use an Active Voice"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Technical",
                    title: "What is the issue with the following requirement: (The Operation Logger shall record any warning messages produced by the system)?",
                    choices: [
                        "R10 Avoid Open-Ended Clauses", "R17 Do Not Use (And/Or)", "R19 Use a Single Sentence", "R34 Use (EACH)"
                    ],
                    correctAnswer: "R34 Use (EACH)"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "Technical",
                    title: "What requirement is violated (Hollow Brick: ASTM C 652, Grade SW, Class H40V (void areas between 25 and 40 percent of gross cross-sectional area, Type HBX.)?",
                    choices: [
                        "R1", "C2", "C3", "C4"
                    ],
                    correctAnswer: "R1"
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
                    correctAnswer: "C1"
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
                    correctAnswer: "C3"
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
                    correctAnswer: "C4"
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
                        "C1", "C2", "R3", "C4"
                    ],
                    correctAnswer: "R3"
                }
            ]
        }
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4> <p>Technical requirements define what is required in the design, they do not define how to create the design?</p> <p>C2 Appropriate</p>"
   
   
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
