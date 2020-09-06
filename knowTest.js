var quiztitle = "Technical Requirement Writing Knowledge Test";



 var quiz = [
    {
        "question" : "Q1: Technical requirements define what is required in the design, they do not define how to create the design?",
        "image" : "",
        "choices" : [
                                "C1 Necessary", "C2 Appropriate", "C3 Unambiguous", "C4 Complete"
                    ],
        "correct" : "C2 Appropriate",
        "explanation" : "Placed in the correct requirement set. Additionally, technical requirements define what is required in the design. They do not define how to create the design as is done with procedures.",
    },

    {
        "question" : "Q2: A requirement is necessary (needed in the set of requirements) if",
        "image" : "",
        "choices" : [
                        "A – the requirement can be removed and the remaining set will still result in the entity needs being satisfied.",
                        "B – the intent of the requirement will be met by the implementation of other requirements", 
                        "C – the author cannot communicate the reason for the requirement",
                        "D – a requirement must be able to be traced to a source which could be one or more entity need(s) or higher-level allocated requirement"
                    ],
        "correct" : "D – a requirement must be able to be traced to a source which could be one or more entity need(s) or higher-level allocated requirement",
        "explanation" : "If requirement can be removed, met by implementation of other requirements or cannot be communicated then this requirement is not necessary",
    },
    {
        "question" : "Q3: Which rule in the following requirement is violated (The Identity of the Customer shall be confirmed)?",
        "image" : "",
        "choices" : [
                        "R2 Use an Active Voice", "R4 Use Defined Terms", "R14 Use Correct Spelling", "R24 Do Not Use Generalizations"
                    ],
        "correct" : "R2 Use an Active Voice",
        "explanation" : "When an action is required, start with the verb. ...",
    },
    {
        "question" : "Q4: What is the issue with the following requirement: (The Operation Logger shall record any warning messages produced by the system)?",
        "image" : "",
        "choices" : [
                        "R10 Avoid Open-Ended Clauses", "R17 Do Not Use (And/Or)", "R19 Use a Single Sentence", "R34 Use (EACH)"
                    ],
        "correct" : "R34 Use (EACH)",
        "explanation" : "The use of (all), (both), or (any) is confusing because it is hard to distinguish applicability to the whole set or to each element of the set. The word (each) is more explicit",
    },
    {
        "question" : "Q5: You should Avoid Words that words that join clauses, such as  (and) ,(or) ,(then) ,(unless) ,(but) ,(/) ,(as well as) ,(but also) ,(however) ,(whether) ,(meanwhile) ,(whereas) ,(on the other hand) and  ,(otherwise) because ",
        "image" : "",
        "choices" : [
                        "requirements should be quantified precisely.", "they always can be used", "their presence in a requirement usually indicates that multiple requirements should be written", "shall use (EACH) only"
                    ],
        "correct" : "their presence in a requirement usually indicates that multiple requirements should be written",
        "explanation" : "their presence in a requirement usually indicates that multiple requirements should be written. See Rule 20 for elaboration",
    },
    {
        "question" : "Q6: The requirement is stated in such a way that it can be interpreted in only one way. Describe the the following CHARACTERISTICS OF REQUIREMENT",
        "image" : "",
        "choices" : [
                        "C1 NECESSARY", "C2 APPROPRIATE", "C3 UNAMBIGUOUS", "C4 COMPLETE"
                    ],
        "correct" : "C3 UNAMBIGUOUS",
        "explanation" : "C3 UNAMBIGUOUS: Stated such that it can be interpreted in only one way. Use standard terms defined in the tables provided in the Files tab of the Tables Channel",
    },
    {
        "question" : "Q7: The set of requirements contains individual requirements that are unique, do not conflict with or overlap with other requirements in the set, and the units and measurement systems they use are homogeneous, Describe the the following CHARACTERISTICS OF REQUIREMENT?",
        "image" : "",
        "choices" : [
                        "C10 Complete", "C11 Consistent", "C12 Feasible", "C13 Comprehensible"
                    ],
        "correct" : "C11 Consistent",
        "explanation" : "The set of requirements contains individual requirements that are unique, do not conflict with or overlap with other requirements in the set, and the units and measurement systems they use are homogeneous. The language used within the set of requirements is consistent",
    },
    {
        "question" : "Q8:Adjectives modify nouns such as the subject of a requirement. Avoid adjectives such as “ancillary,” “relevant,” “routine,” ”common,” “generic,” and “customary because they are ",
        "image" : "",
        "choices" : [
                        "Descriptive Adjectives", "Quantitative Adjectives", "Proper Adjectives", "Vague Adjectives"
                    ],
        "correct" : "Vague Adjectives",
        "explanation" : "Adjectives can lead to ambiguous, unverifiable requirements that do not reflect accurately the stakeholder expectations. See RULE 8",
    },
    {
        "question" : "Q9: What is the issue with the following requirement: (The Operation Logger shall record any warning messages produced by the system)?",
        "image" : "",
        "choices" : [
                        "R10 Avoid Open-Ended Clauses", "R17 Do Not Use (And/Or)", "R19 Use a Single Sentence", "R34 Use (EACH)"
                    ],
        "correct" : "R34 Use (EACH)",
        "explanation" : "The use of (all), (both), or (any) is confusing because it is hard to distinguish applicability to the whole set or to each element of the set. The word (each) is more explicit",
    },
    {
        "question" : "References in the new format must following the following hierarchy?",
        "image" : "",
        "choices" : [
                        "1) KSA codes on top (e.g. SBC, HCIS) 2) Regional Codes (e.g. MARAFIQ, SEC), and 3) adopted standards in alphabetical order according to the publisher abbreviation",
                        "1) International codes, 2) KSA Codes 3) Regional Code (e.g. MARAFIQ, SEC)", 
                        "1) Regional Code (e.g. MARAFIQ, SEC), 2) KSA Codes, 3) Adopted standards in alphabetical order according to the publisher abbreviation.",
                        "1) KSA Code 2) International Codes and Standards, 3) Regional Codes"
                    ],
        "correct" : "1) KSA codes on top (e.g. SBC, HCIS) 2) Regional Codes (e.g. MARAFIQ, SEC), and 3) adopted standards in alphabetical order according to the publisher abbreviation",
        "explanation" : "1) KSA codes on top (e.g. SBC, HCIS) 2) Regional Codes (e.g. MARAFIQ, SEC), and 3) adopted standards in alphabetical order according to the publisher abbreviation",
    },
    {
        "question" : "Q11: In the new template, the submittals are divided to the following:",
        "image" : "",
        "choices" : [
                        "Action, Product Data, Drawings, Informational, Quality", 
                        "Action, Informational, Closeout, and Maintenance Material", 
                        "Quality, Product, Datasheet, Report, Records", 
                        "Action, Managerial, Drawings, Informational, Quality"
                    ],
        "correct" : "Action, Informational, Closeout, and Maintenance Material",
        "explanation" : "[ Action, Informational, Closeout, and Maintenance Material See attached template Section 1.5, 1.6, 1.7, 1.8]",
    },
    {
        "question" : "Q12: What is the issue with the following requirement: To ensure that the surcharge is correct, the final level shall be checked after completion of the first few meters and then at frequent intervals. ?",
        "image" : "",
        "choices" : [
                        "R3 Assign to the Correct Level of Detials", "R5 Quantify Precisely", "R6 Use Appropriate Unit", "R4 Use Defined Terms"
                    ],
        "correct" : "R5 Quantify Precisely",
        "explanation" : "Quantify Precisely avoid the use of any some several few. Mention the required Distance.  Review Rule 5) Quantify Precisely",
    },
    {
        "question" : "Q13: What is the issue with the following requirement:",
        "image" : "",
        "choices" : [
                        "R10 Avoid Open-Ended Clauses", "R13 Use Correct Grammar", "R19 Use a Single Sentence", "R21 Use Bracket to Combine Conditions"
                    ],
        "correct" : "R13 Use Correct Grammar",
        "explanation" : "The use of correct grammer Rule 13. be they structural or non-structural",
    },
    {
        "question" : "Q14: What is the issue with the following requirement:?",
        "image" : "",
        "choices" : [
                        "C3 ambiguous", "R17 Do Not Use (And/Or)", "R19 Use a Single Sentence", "R34 Use (EACH)"
                    ],
        "correct" : "C3 ambiguous",
        "explanation" : "The use of not always be practical or necessary is confusing and ambiguous",
    },
    {
        "question" : "[The insulated cables are to be furnished in accordance with the cable specification sheets covered under this clause, and the other codes and standards mentioned therein [Jubail 26 05 13.16]], Which characteristic or rule does this NOT violate?",
        "image" : "",
        "choices" : [
                        "C3 - Unambiguous. Which clause?  Each requirement in a specification amounts to a legal clause in a construction contract.",
                        "R1 - Use the Definitive Term (the).  A cable sheet does not define which cable sheet.",
                        "R2 - Use an active voice. The word “are to be” is passive.",
                        "R32 - Express Once Only.  We don’t need to say that the material must meet requirements when such is stated in the construction contract, Division 01, and the specification sheets."
                    ],
        "correct" : "C3 ambiguous",
        "explanation" : "The use of not always be practical or necessary is confusing and ambiguous",
    },

 {
        "question" : "[Example: The impact of the higher ambient temperature on ampacity will be factored in cable selection and application during system design [Jubail 26 05 13.16]], Which characteristic or rule does this NOT violate?",
        "image" : "",
        "choices" : [
                        "C2 - Appropriate. Design requirements belong in the Engineering Manual.",
                        "C3 - Unambiguous: This could be telling the contractor to design the cable or verify design.",
                        "C7 - Verifiable: Cannot prove that the impact by measurement or objective observation.",
                        "R2 - Use an active voice. “Will be” does not direct the contractor to do something."
                    ],
        "correct" : "C3 ambiguous",
        "explanation" : "The use of not always be practical or necessary is confusing and ambiguous",
    },




{
        "question" : "[Example: The duct for underground cables shall not be located in the main (busy lane) of the street or road and should be at least 1.5 m from the median bay.], Which characteristic or rule does this NOT violate?",
        "image" : "",
        "choices" : [
                        "C2 - Appropriate. Design requirements belong in the Engineering Manual.",
                        "C3 - Unambiguous: The word “should” is not a requirement.",
                        "C12 - Feasible.  It is not possible to locate an underground cable as stated.",
                        "R11 - Do Not Add Unnecessary Words. The word “shall” is unnecessary in the context of requirements."
                    ],
        "correct" : "C3 - Unambiguous: The word “should” is not a requirement.",
        "explanation" : "C3 - Unambiguous: The word “should” is not a requirement.",
    },
{
        "question" : "[Example: The insulation tubing shall be generally suitable for indoor and outdoor installation, be ultra-violet and chemical resistant and with or without adhesive coating.  It shall be capable of being stored without damage at temperatures not exceeding 50°C], Which characteristic or rule does this NOT violate?",
        "image" : "",
        "choices" : [
                        "C3 - Unambiguous: The words “generally suitable” are not definitive.",
                        "C5 – Singular. This paragraph identifies several requirements.",
                        "R35 - Use Ranges for Values.  The value 50 is not a range.",
                        "R40 - Avoid Abbreviations. The degree symbol should be spelled out as in “degrees”"
                    ],
        "correct" : "C5 – Singular. This paragraph identifies several requirements.",
        "explanation" : "C5 – Singular. This paragraph identifies several requirements.",
    },

  



];


 var currentquestion = 0,
 score = 0,
 submt = true,
 picked;

 $(document).ready(function(){
   $("#submitbutton").hide();

 function htmlEncode(value) {
     return $(document.createElement('div')).text(value).html();
 }


 function addChoices(choices) {
     if (typeof choices !== "undefined" && $.type(choices) == "array") {
         $('#choice-block').empty();
         for (var i = 0; i < choices.length; i++) {
             $(document.createElement('li')).addClass('choice choice-box').attr('data-index', i).text(choices[i]).appendTo('#choice-block');
         }
     }
 }

 function nextQuestion() {
     submt = true;
   //  alert("nQ");
     $('#explanation').empty();
     $('#question').text(quiz[currentquestion]['question']);
     $('#pager').text('Question ' + Number(currentquestion + 1) + ' of ' + quiz.length);
     if (quiz[currentquestion].hasOwnProperty('image') && quiz[currentquestion]['image'] != "") {
         if ($('#question-image').length == 0) {
             $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[currentquestion]['image']).attr('alt', htmlEncode(quiz[currentquestion]['question'])).insertAfter('#question');
         } else {
             $('#question-image').attr('src', quiz[currentquestion]['image']).attr('alt', htmlEncode(quiz[currentquestion]['question']));
         }
     } else {
         $('#question-image').remove();
     }
     addChoices(quiz[currentquestion]['choices']);
     setupButtons();


 }


 function processQuestion(choice) {
    // alert(choice);
     currentquestion++;
    //  alert(currentquestion);
     $("#submitbutton").hide();

         if (currentquestion == quiz.length) {
             endQuiz();
         } else {

             nextQuestion();
         }

 }


 function setupButtons() {
     $('.choice').on('mouseover', function () {
         $(this).css({
             'background-color': '#e1e1e1'
         });
     });
     $('.choice').on('mouseout', function () {
         $(this).css({
             'background-color': '#fff'
         });
     })
     $('.choice').on('click', function () {
        // alert("");
         choice = $(this).attr('data-index');
         $('.choice').removeAttr('style').off('mouseout mouseover');
         $(this).css({
             'border-color': '#222',
             'font-weight': 700,
             'background-color': '#c1c1c1'
         });
         if (quiz[currentquestion]['choices'][choice] == quiz[currentquestion]['correct']) {
         $('.choice').eq(choice).css({
             'background-color': '#50D943'
         });
         $('#explanation').html('<strong>Correct!</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
         score++;
     } else {
         $('.choice').eq(choice).css({
             'background-color': '#D92623'
         });
         $('#explanation').html('<strong>Incorrect.</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
     }
            $("#submitbutton").show();
         if (submt) {
            // alert("submit");
             submt = false;
             $('#submitbutton').css({
                 'color': '#000'

             });
             $("#submitbutton").click(function(){
              // alert("click");
                  $('.choice').off('click');
                 $(this).off('click');
                 processQuestion(choice);
             });
         }
     })
 }


 function endQuiz() {
     $('#explanation').empty();
     $('#question').empty();
     $('#choice-block').empty();
     $('#submitbutton').remove();
     $('.container').remove();
     $('#question').text("You got " + score + " out of " + quiz.length + " correct.");
     $(document.createElement('h2')).css({
         'text-align': 'center',
         'font-size': '4em'
     }).text(Math.round(score / quiz.length * 100) + '%').insertAfter('#question');
 }


 function init() {
     //add title
     if (typeof quiztitle !== "undefined" && $.type(quiztitle) === "string") {
         $(document.createElement('h1')).text(quiztitle).appendTo('#frameH');
         
     } else {
         $(document.createElement('h1')).text("Quiz").appendTo('#frame');
     }

     //add pager and questions
     if (typeof quiz !== "undefined" && $.type(quiz) === "array") {
         //add pager
         $(document.createElement('p')).addClass('pager').attr('id', 'pager').text('Question 1 of ' + quiz.length).appendTo('#frame');
         //add first question
         $(document.createElement('h2')).addClass('question').attr('id', 'question').text(quiz[0]['question']).appendTo('#frame');
         //add image if present
         if (quiz[0].hasOwnProperty('image') && quiz[0]['image'] != "") {
             $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[0]['image']).attr('alt', htmlEncode(quiz[0]['question'])).appendTo('#frame');
         }
         $(document.createElement('p')).addClass('explanation').attr('id', 'explanation').html('&nbsp;').appendTo('#frame');

         //questions holder
         $(document.createElement('ul')).attr('id', 'choice-block').appendTo('#frame');

         //add choices
         addChoices(quiz[0]['choices']);

         //add submit button
         $(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Next Question').css({
             'font-weight': 700,
             'color': '#222',
             'padding': '30px 0',
          }).appendTo('#frame');


       $("#submitbutton").hide();
         setupButtons();
     }
 }

 init();
});
