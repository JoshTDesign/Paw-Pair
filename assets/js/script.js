



//add global variables
//var start = $('#startQuiz');

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


    // listens for clicks on buttons with id "dog" - adds +1 to petType
    $('#dog').on('click', function () {
    petType++
    })
//listens for clicks on buttons with id "cat" - takes -1 from petType
    $('#cat').on('click', function () {
    petType--
    })
    //listens for clicks on buttons with id "big" - adds +1 to petSize
    $('#big').on('click', function () {
        petSize++
    })
    //listens for clicks on buttons with id "small" - takes -1 from petSize
    $('#small').on('click', function () {
        petSize--
    })
    //listens for clicks on buttons with id "active" - adds +1 to petActivity
    $('#active').on('click', function () {
        petActive++
    })
    //listens for clicks on buttons with id "notActive" - takes -1 from petActivity
    $('#notActive').on('click', function () {
        petActive--
    })

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


    $('<div/>').attr('class', 'container box').attr('id', 'contain').appendTo(document.body);
    $('<div/>').attr('class', 'container box').attr('id', 'test').appendTo(document.body);
    $('<h1/>').attr('id', 'question').text('setResults Placeholder').appendTo('#test');
    if (petSize == 0 && petActive <= 1 && petType > 2) {
        var type = "dog";
        var breed = "bolognese"
    } else if (petSize == 1 && petActive <= 1 && petType >= 2) {
        var type = "dog";
        var breed = "french bulldog"
    } else if (petSize == 2 && petActive <= 1 && petType >= 2) {
        var type = "dog";
        var breed = "basset hound"
    } else if (petSize == 3 && petActive <= 1 && petType >= 2) {
        var type = "dog";
        var breed = "tosa inu"
    } else if (petSize == 4 && petActive <= 1 && petType >= 2) {
        var type = "dog";
        var breed = "boerboel"
    } else if (petSize == 0 && petActive == 2 && petType >= 2) {
        var type = "dog";
        var breed = "chihuahua"
    } else if (petSize == 1 && petActive == 2 && petType >= 2) {
        var type = "dog";
        var breed = "dachshund"
    } else if (petSize == 2 && petActive == 2 && petType >= 2) {
        var type = "dog";
        var breed = "american bulldog"
    } else if (petSize == 3 && petActive == 2 && petType >= 2) {
        var type = "dog";
        var breed = "german shepard dog"
    } else if (petSize == 4 && petActive == 2 && petType >= 2) {
        var type = "dog";
        var breed = "mastiff"
    } else if (petSize == 0 && petActive > 2 && petType >= 2) {
        var type = "dog";
        var breed = "toy fox terrier"
    } else if (petSize == 1 && petActive > 2 && petType >= 2) {
        var type = "dog";
        var breed = "beagle"
    } else if (petSize == 2 && petActive > 2 && petType >= 2) {
        var type = "dog";
        var breed = "border collie"
    } else if (petSize == 3 && petActive > 2 && petType >= 2) {
        var type = "dog";
        var breed = "golden retriever"
    } else if (petSize == 4 && petActive > 2 && petType >= 2) {
        var type = "dog";
        var breed = "great dane"
    } else {
        var type = "cat";
        var breed = "domestic short hair";
    }
    var petToFetch = `https://api.petfinder.com/v2/animals?type=${type}&breed=${breed}`
    //  run fetch()
    fetch("https://api.petfinder.com/v2/oauth2/token", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ grant_type: "client_credentials", client_id: "HEGMAK8rmrTdGMxSLLuVTpwt1pAwGMYtsMlYO8XCERMTLT7CAY", client_secret: "CfhtSPVPSW0YKpFQvIHmdDYtBzEWHkFaVmr2nlAe" }) }).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data);
        fetch(petToFetch, {
            headers: { Authorization: `Bearer ${data.access_token}` }
        }).then(function (response) {
            return response.json()
            //  show reults of fetch
        }).then(function (data) {
            var petIndex = Math.floor(Math.random() * 20);  
                var petPic = data.animals[petIndex].photos[0];
                var petName = data.animals[petIndex].name;
                var petBreed = data.animals[petIndex].breeds.primary;
                var petAbout = data.animals[petIndex].description;
            $('<img/>').attr('id', 'pic').attr('src', petPic.small).appendTo('#contain');
            $('<h1/>').attr('id', 'name').text(petName).appendTo('#contain');
            $('<h2/>').attr('id', 'breed').text(petBreed).appendTo('#contain');
            $('<p/>').attr('id', 'about').text(petAbout).appendTo('#contain');
            console.log(data);
        });
    });
    $('<button/>').attr('id', 'learnMore').text('Learn more').appendTo('#contain');
    $('<button/>').attr('id', 'playAgain').text('Play again').appendTo('#contain');

    $('#learnMore').on('click', function () {
        clearPage();
        // run function to get more info  about pet    
    })

    $('#playAgain').on('click', function () {
        clearPage();
        startQuiz();
    })
}


//----------------------QUIZ TRACKING---------------//

//listens for clicks on buttons with id "dog" - adds +1 to petType

// document.getElementById('#dog').addEventListener('click', function () {
//     petType++
// })
// //listens for clicks on buttons with id "cat" - takes -1 from petType
// document.getElementById('#cat').addEventListener('click', function () {
//     petType--
// })
// //listens for clicks on buttons with id "big" - adds +1 to petSize
// document.getElementById('#big').addEventListener('click', function () {
//     petSize++
// })
// //listens for clicks on buttons with id "small" - takes -1 from petSize
// document.getElementById('#small').addEventListener('click', function () {
//     petSize--
// })
// //listens for clicks on buttons with id "active" - adds +1 to petActivity
// document.getElementById('#active').addEventListener('click', function () {
//     petActivity++
// })
// //listens for clicks on buttons with id "notActive" - takes -1 from petActivity
// document.getElementById('#notActive').addEventListener('click', function () {
//     petActivity--
// })



//----------------------CLEAR PAGE FUNCTION---------------//
function clearPage() {
    document.body.innerHTML = '';
    // body.innerHTML = ''.children().remove();
};