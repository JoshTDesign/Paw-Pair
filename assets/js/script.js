//add global variables
var start = document.querySelector("#startQuiz");
var petsize = 2;
var petActive = 2;
var petType = 2;
//var searchUrl;


//quiz array
//object with question, response1, response2
//example:
//Love getting outdoors and exploring    Yeah, bring it on!(active dog breeds dog+  active+)  I watch nature shows all the time! (cat+  notActive+)
//I like to curl up on a couch and cuddle    Yep, that sounds perfect    Not really, I like my space...
//I want a pet that holds down the fort while I'm at work   
var quizArray = [
    { question: 'Lorem ipsum 0', response1: 'Response 1', response2: 'Response 2' },
    { question: 'Lorem ipsum 1', response1: 'Response 1', response2: 'Response 2' },
    { question: 'Lorem ipsum 2', response1: 'Response 1', response2: 'Response 2' },
    { question: 'Lorem ipsum 3', response1: 'Response 1', response2: 'Response 2' },
    { question: 'Lorem ipsum 4', response1: 'Response 1', response2: 'Response 2' },
];



//-----------------------STEP ONE -------------------------//
//start quiz button event listener
start.addEventListener("click", startQuiz());
//button should call startQuiz() function


//-----------------------STEP TWO -------------------------//
function startQuiz() {
    //set variables 
    var petSize = 2;
    var petActive = 2;
    var petType = 2;
    var quizNumber = 0;
    clearPage();
    setQuestion(0);
}


//----------------------STEP THREE------------------------//
function setQuestion(number) {
clearPage();
console.log(quizArray);
$('<div/>').attr('class', 'container box').attr('id', 'test').appendTo('#main');
$('<h1/>').attr('id', 'question').text('Question ' + number + ' Placeholder').appendTo('#test');
$('<button/>').attr('class', 'button').attr('id', 'response1').text('Response 1').appendTo('#test');
$('<button/>').attr('class', 'button').attr('id', 'response2').text('Response2').appendTo('#test');

$('.button').on('click', function(){
    questionNumber++;
    clearPage();
    if (questionNumber === 5) {
        setResults();
    } else {
    setQuestion(questionNumber);
    }
})
}
var questionNumber = 0;
setQuestion(questionNumber);

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
//listens for clicks on butons with id "cat" - takes -1 from petType
//listens for clicks on buttons with id "big" - adds +1 to petSize
//listens for clicks on buttons with id "small" - takes -1 from petSize
//listens for clicks on buttons with id "active" - adds +1 to petActivity
//listens for clicks on buttoins iwth id "notActive" - takes -1 from petActivity


//----------------------CLEAR PAGE FUNCTION---------------//
function clearPage() {
    $("section").children().remove();
    console.log('hello');
}







