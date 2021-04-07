
//add global variables
//var start = $('#startQuiz');
var petsize = 2;

const quizContainer = document.getElementById('quiz');
const result = document.getElementById('result');
const submitButton = document.getElementById('submit');



//add global variables
var start = document.querySelector("#startQuiz");
var petSize = 2;

var petActive = 2;
var petType = 2;
var questionNumber;

//var searchUrl;


//quiz array
var quizArray = [
    { question: 'Are you a people person?', response1: 'Response 1', response2: 'Response 2' },
    { question: 'Are you a nontraditional thinker?', response1: 'Response 1', response2: 'Response 2' },
    { question: 'Are you an outdoorsy person?', response1: 'Response 1', response2: 'Response 2' },
    { question: 'Are you artistic?', response1: 'Response 1', response2: 'Response 2' },
    { question: 'Are you easily stressed?', response1: 'Response 1', response2: 'Response 2' },
];


//-----------------------STEP ONE -------------------------//
//start quiz button event listener
$('#startQuiz').on('click', function () {
    startQuiz();
});


//-----------------------STEP TWO -------------------------//
function startQuiz() {
    //set variables 
    var petSize = 2;
    var petActive = 2;
    var petType = 2;
    questionNumber = 0;
    clearPage();
    setQuestion(0);
}


//----------------------STEP THREE------------------------//
function setQuestion(number) {
    clearPage();
    console.log(quizArray);
    console.log(number);
    $('<div/>').attr('class', 'container box').attr('id', 'test').appendTo('#main');
    $('<h1/>').attr('id', 'question').text(quizArray[number].question).appendTo('#test');
    $('<button/>').attr('class', 'button').attr('id', 'response1').text('Response 1').appendTo('#test');
    $('<button/>').attr('class', 'button').attr('id', 'response2').text('Response2').appendTo('#test');

    $('.button').on('click', function () {
        questionNumber++;
        clearPage();
        if (questionNumber === 5) {
            setResults();
        } else {
            setQuestion(questionNumber);
        }
    })
}
// var questionNumber = 0;
// setQuestion(questionNumber);

// on button click: 
//  clearPage()
//  add +1 to var quizNumber
//  if quiz number = 5, run setResults(), else:
//  setQuestion(quizNumber)
// }



//----------------------STEP FOUR-------------------------//
function setResults() {
    clearPage();
    $('<div/>').attr('class', 'container box').attr('id', 'test').appendTo('#main');
    $('<h1/>').attr('id', 'question').text('setResults Placeholder').appendTo('#test');
    //  run fetch()
    //  show reults of fetch
}




//----------------------QUIZ TRACKING---------------//
//quizTracking function

//listens for clicks on buttons with id "dog" - adds +1 to petType

document.getElementById('#dog').addEventListener('click', function () {
    petType++
})
//listens for clicks on buttons with id "cat" - takes -1 from petType
document.getElementById('#cat').addEventListener('click', function () {
    petType--
})
//listens for clicks on buttons with id "big" - adds +1 to petSize
document.getElementById('#big').addEventListener('click', function () {
    petSize++
})
//listens for clicks on buttons with id "small" - takes -1 from petSize
document.getElementById('#small').addEventListener('click', function () {
    petSize--
})
//listens for clicks on buttons with id "active" - adds +1 to petActivity
document.getElementById('#active').addEventListener('click', function () {
    petActivity++
})
//listens for clicks on buttons with id "notActive" - takes -1 from petActivity
document.getElementById('#notActive').addEventListener('click', function () {
    petActivity--
})

document.getElementById('#dog').addEventListener('click', function () {
    petType++
})
document.getElementById('#cat').addEventListener('click', function () {
    petType--
})
document.getElementById('#big').addEventListener('click', function () {
    petSize++
})
document.getElementById('#small').addEventListener('click', function () {
    petSize--
})
document.getElementById('#active').addEventListener('click', function () {
    petActivity++
})
document.getElementById('#notActive').addEventListener('click', function () {
    petActivity--
})



//----------------------CLEAR PAGE FUNCTION---------------//
function clearPage() {
    $("section").children().remove();

    console.log('hello');
}


