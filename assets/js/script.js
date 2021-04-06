const quizContainer = document.getElementById('quiz');
const result = document.getElementById('result');
const submitButton = document.getElementById('submit');



//add global variables
//var petsize=2;
//var petActive=2;
//var petType=2;
//var searchUrl;


//-----------------------STEP ONE -------------------------//
//start quiz button event listener
//button should call startQuiz() function


//-----------------------STEP TWO -------------------------//
//startQuiz function {
//set variables 'petSize=2', 'petActive=2', 'petType=2'
//set variable quizNumber = 0;
//clearPage();
//setQuestion(0);
//}


//----------------------STEP THREE------------------------//
// setQuestion function {
// clearPage();
// add question element to page 
// add response buttons to page
// on button click: 
//  clearPage()
//  add +1 to var quizNumber
//  if quiz number = 5, run setResults(), else:
//  setQuestion(quizNumber)
// }



//----------------------STEP FOUR-------------------------//
// setResults function {
// clearPage()
//  run fetch()
//  show reults of fetch
// }

        
//----------------------QUIZ TRACKING---------------//
//quizTracking function
//listens for clicks on buttons with id "dog" - adds +1 to petType
//listens for clicks on butons with id "cat" - takes -1 from petType
//listens for clicks on buttons with id "big" - adds +1 to petSize
//listens for clicks on buttons with id "small" - takes -1 from petSize
//listens for clicks on buttons with id "active" - adds +1 to petActivity
//listens for clicks on buttoins iwth id "notActive" - takes -1 from petActivity

document.getElementById('#dog').addEventListener('click', function() {
    petType++
})
document.getElementById('#cat').addEventListener('click', function() {
    petType--
})
document.getElementById('#big').addEventListener('click', function() {
    petSize++
})
document.getElementById('#small').addEventListener('click', function() {
    petSize--
})
document.getElementById('#active').addEventListener('click', function() {
    petActivity++
})
document.getElementById('#notActive').addEventListener('click', function() {
    petActivity--
})



//----------------------CLEAR PAGE FUNCTION---------------//
//clearPage function;
//removes main div contents from page







//quiz array
//object with question, response1, response2
//example:
//Love getting outdoors and exploring    Yeah, bring it on!(active dog breeds dog+  active+)  I watch nature shows all the time! (cat+  notActive+)
//I like to curl up on a couch and cuddle    Yep, that sounds perfect    Not really, I like my space...
//I want a pet that holds down the fort while I'm at work   
var quizArray = [
    {question: 'Lorem ipsum 0', response1:'Response 1', response2:'Response 2'}, 
    {question: 'Lorem ipsum 1', response1:'Response 1', response2:'Response 2'}, 
    {question: 'Lorem ipsum 2', response1:'Response 1', response2:'Response 2'}, 
    {question: 'Lorem ipsum 3', response1:'Response 1', response2:'Response 2'}, 
    {question: 'Lorem ipsum 4', response1:'Response 1', response2:'Response 2'}, 
];
