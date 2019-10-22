let myQuestions = [
    {
      question: "Why so JavaScript and Java have similar name?",
      answers: {
        a: "JavaScript is a stripped-down version of Java",
        b: "JavaScript's syntax is loosely based on Java's",
        c: "They both originated on the island of Java",
        d: "None of the above"
      },
      correctAnswer: "b"
    },
    {
      question: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
      answers: {
        a: "The User's machine running a Web browser",
        b: "The Web server",
        c: "A central machine deep within Netscape's corporate offices",
        d: "None of the above"
      },
      correctAnswer: "a"
    },
    {
      question: "______ JavaScript is also called client-side JavaScript.",
      answers: {
        a: "Microsoft",
        b: "Navigator",
        c: "LiveWire",
        d: "Native"
      },
      correctAnswer: "b"
    },
    {
      question: "__________ JavaScript is also called server-side JavaScript.",
      answers: {
        a: "Microsoft",
        b: "Navigator",
        c: "LiveWire",
        d: "Native"
      },
      correctAnswer: "c"
    },
    {
      question: "What are variables used for in JavaScript Programs?",
      answers: {
        a: "Storing numbers, dates, or other values ",
        b: "Varying randomly",
        c: "Causing high-school algebra flashbacks",
        d: "None of the above"
      },
      correctAnswer: "a"
    },
    {
      question: " _____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
      answers: {
        a: "Client-side",
        b: "Server-side",
        c: "Local",
        d: "Native"
      },
      correctAnswer: "a"
    },
    {
      question: "What should appear at the very end of your JavaScript?",
      answers: {
        a: "The </script>",
        b: "The <script>",
        c: "The END statement",
        d: "None of the above"
      },
      correctAnswer: "a"
    },
    {
      question: "Which of the following can't be done with client-side JavaScript?",
      answers: {
        a: "Validating a form",
        b: "Sending a form's contents by email",
        c: "Storing the form's contents to a database file on the server",
        d: "None of the above"
      },
      correctAnswer: "c"
    },
    {
      question: "Which of the following are capabilities of functions in JavaScript?",
      answers: {
        a: "Return a value",
        b: "Accept parameters and Return a value",
        c: "Accept parameters",
        d: "None of the above"
      },
      correctAnswer: "c"
    },
    {
      question: "Which of the following is not a valid JavaScript variable name?",
      answers: {
        a: "2names",
        b: "_first_and_last_names",
        c: "FirstAndLast",
        d: "None of the above"
      },
      correctAnswer: "a"
    },

  ];

// $(document).ready(function() {
//   var myElements = $("#quiz-body");
//   $("h1").text("The text from the id01 paragraph is: ");
// });

let quizBody = $("#quiz-body");
let submitBtn = $("#submit");
let result = $("#result");
let totalQuestionsToShow = 3;

submitBtn.click(showResult);

function fillQuizBody() {
  let mcqsDiv = document.createElement("div");
  // quizBody.push("<h1>Hy</h1>>")
  let mcqsHeading = document.createElement("h1");
  let mcqsOptions = document.createElement("input");


  const questionHtml = [];

  // let randomArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let randomQuestions = [];
  let totalNumberOfQuestions = myQuestions.length;
  let selectedQuestions = 0;
  while(totalQuestionsToShow != selectedQuestions){
    let randNum = getRndInteger(0, totalNumberOfQuestions);

    if (!randomQuestions.includes(randNum)){
      randomQuestions.push(randNum);
      selectedQuestions++;
    }

  }

  for(let i in randomQuestions){
    console.log(randomQuestions[i]);
  }

  randomQuestions.forEach(insertQuestion);

}

function insertQuestion(questionIndex, index, arr) {
// quizBody.append(`${val}`);
  quizBody.append(`<h1> ${index}: ${myQuestions[questionIndex].question}</h1>`);
// <input type="radio" name="i" class="i"><br>B:
// <input type="radio" name="i" class="i"><br>C:
// <input type="radio" name="i" class="i"><br>

  for (let mcq in myQuestions[questionIndex].answers) {
    quizBody.append(`<input type="radio" name="${questionIndex}" value="${mcq}"> ${mcq} -  ${myQuestions[questionIndex].answers[mcq]} <br>`);
  }

}

function showResult() {
console.log("hello world")
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

fillQuizBody();
