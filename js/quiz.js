let myQuestions = [
    {
      question: "Why so JavaScript and Java have similar name?",
      answers: {
        a: "JavaScript is a stripped-down version of Java",
        b: "JavaScript's syntax is loosely based on Java's",
        c: "They both originated on the island of Java",
        d: "None of the above",
        e: "All are true"
      },
      correctAnswer: "b"
    },
    {
      question: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
      answers: {
        a: "The User's machine running a Web browser",
        b: "The Web server",
        c: "A central machine deep within Netscape's corporate offices",
        d: "None of the above",
        e: "All are true"
      },
      correctAnswer: "a"
    },
    {
      question: "______ JavaScript is also called client-side JavaScript.",
      answers: {
        a: "Microsoft",
        b: "Navigator",
        c: "LiveWire",
        d: "Native",
        e: "All are true"
      },
      correctAnswer: "b"
    },
    {
      question: "__________ JavaScript is also called server-side JavaScript.",
      answers: {
        a: "Microsoft",
        b: "Navigator",
        c: "LiveWire",
        d: "Native",
        e: "All are true"
      },
      correctAnswer: "c"
    },
    {
      question: "What are variables used for in JavaScript Programs?",
      answers: {
        a: "Storing numbers, dates, or other values ",
        b: "Varying randomly",
        c: "Causing high-school algebra flashbacks",
        d: "None of the above",
        e: "All are true"
      },
      correctAnswer: "a"
    },
    {
      question: " _____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
      answers: {
        a: "Client-side",
        b: "Server-side",
        c: "Local",
        d: "Native",
        e: "All are true"
      },
      correctAnswer: "a"
    },
    {
      question: "What should appear at the very end of your JavaScript?",
      answers: {
        a: "The /script",
        b: "The script",
        c: "The END statement",
        d: "None of the above",
        e: "All are true"
      },
      correctAnswer: "a"
    },
    {
      question: "Which of the following can't be done with client-side JavaScript?",
      answers: {
        a: "Validating a form",
        b: "Sending a form's contents by email",
        c: "Storing the form's contents to a database file on the server",
        d: "None of the above",
        e: "All are true"
      },
      correctAnswer: "c"
    },
    {
      question: "Which of the following are capabilities of functions in JavaScript?",
      answers: {
        a: "Return a value",
        b: "Accept parameters and Return a value",
        c: "Accept parameters",
        d: "None of the above",
        e: "All are true"
      },
      correctAnswer: "c"
    },
    {
      question: "Which of the following is not a valid JavaScript variable name?",
      answers: {
        a: "2names",
        b: "_first_and_last_names",
        c: "FirstAndLast",
        d: "None of the above",
        e: "All are true"
      },
      correctAnswer: "a"
    },

  ];

let quizBody = $("#quiz-body");
let submitBtn = $("#submit");
let result = $("#result");
let totalQuestionsToShow = 3;
let randomQuestions = [];
let startQuizBtn = $("#startQuizBtn");
let minQuestionToBeCorrected = 1;

submitBtn.click(showResult);
startQuizBtn.click(onStartQuiz);


const quizMethods = [
  'fillQuizBody', 'generateArrayOfRandom', 'insertQuestion', 'nextChar', 'convertIntToCharMap', 'showResult',
  'getRndInteger', 'onStartQuiz',
];

function fillQuizBody() {
  let totalNumberOfQuestions = myQuestions.length;
  randomQuestions = generateArrayOfRandom(0, totalNumberOfQuestions, totalQuestionsToShow, []);
  randomQuestions.forEach(insertQuestion);
}


function generateArrayOfRandom(min, max, totalNumberToGenerate, receivedArray) {
  let selectedQuestions = 0;
  let myRandNumList = receivedArray;
  while(totalNumberToGenerate != selectedQuestions){
    let randNum = getRndInteger(min, max);
    if (!myRandNumList.includes(randNum)){
      myRandNumList.push(randNum);
      selectedQuestions++;
    }
  }
  return myRandNumList;
}

function insertQuestion(questionIndex, index, arr) {
  quizBody.append(`<h1 id=${questionIndex}> ${index}: ${myQuestions[questionIndex].question}</h1>`);

  let optionsOfEachQuestion = [ myQuestions[questionIndex].correctAnswer.charCodeAt(0) ];
  optionsOfEachQuestion =generateArrayOfRandom(97, 101, 2, optionsOfEachQuestion);
  optionsOfEachQuestion = optionsOfEachQuestion.map(convertIntToCharMap);

  let optionChar = 'a';
  for (let mcq in optionsOfEachQuestion) {
    mcq = optionsOfEachQuestion[mcq];
    quizBody.append(`<input type="radio" name=${questionIndex} value=${mcq}> ${optionChar} -  ${myQuestions[questionIndex].answers[mcq]} <br>`);
    optionChar = nextChar(optionChar);
  }
}

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}

function convertCharToInt(myChar, index) {
  return myChar.charCodeAt(0);
}

function convertIntToCharMap(myCharNum, index) {
  return String.fromCharCode(myCharNum);
}

function showResult() {
    let correct = 0;
    $('input:radio:checked').each(function() {
      if(this.value == myQuestions[this.name].correctAnswer){
        $(`h1#${this.name}`).addClass("text-success");
        console.log(this.value);
        correct++;
      }
    });

  if(correct >= minQuestionToBeCorrected){
    Swal.fire(
      'Good job!',
      'Correct Answers are '+correct,
      'success'
    );
  }
  else{
    Swal.fire( "Oops" ,  'Correct Answers are '+correct ,  "error" );
  }

}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function onStartQuiz() {
  $("#quiz-container").removeClass("invisible");
  $("#welcome-div").addClass("invisible d-none");
  fillQuizBody();
}
