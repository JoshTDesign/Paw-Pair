



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
    { question: 'Are you a people person?', response1: ['I love a party', 'dog'], response2: ['My pet is my social life', 'notActive']},
    { question: 'Are you a nontraditional thinker?', response1: ['I think outside of the box', 'small'], response2: ['No ... is that the right answer?', 'large']},
    { question: 'Are you an outdoorsy person?', response1: ['Yes! Adventure awaits', 'active'], response2: ['Id rather relax at home', 'notActive']},
    { question: 'How do you live?', response1: ['big yard, space to run', 'big'], response2: ['Its a tiny box, but its my tiny box!', 'small']},
    { question: 'Are you easily stressed?', response1: ['Nah, nothing phases me', 'dog'], response2: ['This quiz is a bit much for me...', 'cat']},
];

//Are you a people person - size (1) dog (2) active (2)
//Are you a nontraditional thinker - size (0) cat (1), nonactive (-1), 
//Are you an outdoorsy person - size (0) dog (3) active (3)
//Are you artistic



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

    $('<div/>').attr('class', 'hero p-5 is-vcentered').attr('id', 'contain').appendTo(document.body);
    $('<div/>').attr('id', 'column').attr('class', 'column is-8 has-text-primary is-size-4').appendTo('#contain');
    $('<h1/>').attr('id', 'question').attr('class', '').text(quizArray[number].question).appendTo('#column');
    $('<button/>').attr('class', 'button my-2 is-primary is-outlined').attr('id', quizArray[number].response1[1]).text(quizArray[number].response1[0]).appendTo('#column');
    $('<button/>').attr('class', 'button my-2 is-primary is-outlined').attr('id', quizArray[number].response2[1]).text(quizArray[number].response2[0]).appendTo('#column');



$('.button').on('click', function(){

        console.log(petSize);
        console.log(petActive);
        console.log(petType);

        questionNumber++;
        clearPage();
        if (questionNumber === 5) {
            setResults();
        } else {
            setQuestion(questionNumber);
        }
    })
}




//----------------------STEP FOUR-------------------------//
function setResults() {
    clearPage();
    $('<div/>').attr('class', 'container box').attr('id', 'test').appendTo(document.body);
    $('<h1/>').attr('id', 'question').text('setResults Placeholder').appendTo('#test');    
//  run fetch()
//  show reults of fetch
}




//----------------------QUIZ TRACKING---------------//

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

<<<<<<< HEAD

=======
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
>>>>>>> 50117f509eeb3d02846ad2d81df560539f26a4ea



//----------------------CLEAR PAGE FUNCTION---------------//
function clearPage() {
    document.body.innerHTML = '';

    // body.innerHTML = ''.children().remove();
}