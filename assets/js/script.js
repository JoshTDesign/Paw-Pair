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
var type = "";
var breed = "";

//var searchUrl;
var petToFetch = `https://api.petfinder.com/v2/animals?type=${type}&breed=${breed}`
var dogurlToFetch = `https://boiling-meadow-47923.herokuapp.com/https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1`
var caturlToFetch = `https://meowfacts.herokuapp.com/`

//quiz array
var quizArray = [
    { question: 'Are you a people person?', response1: ['I love a party', 'dog'], response2: ['My pet is my social life', 'notActive'] },
    { question: 'Are you a nontraditional thinker?', response1: ['I think outside of the box', 'small'], response2: ['No ... is that the right answer?', 'big'] },
    { question: 'Are you an outdoorsy person?', response1: ['Yes! Adventure awaits', 'active'], response2: ['Id rather relax at home', 'notActive'] },
    { question: 'How do you live?', response1: ['big yard, space to run', 'big'], response2: ['Its a tiny box, but its my box!', 'small'] },
    { question: 'Are you easily stressed?', response1: ['Nah, nothing phases me', 'dog'], response2: ['This quiz is a bit much for me...', 'cat'] },
];

//Are you a people person - size (1) dog (2) active (2)
//Are you a nontraditional thinker - size (0) cat (1), nonactive (-1), 
//Are you an outdoorsy person - size (0) dog (3) active (3)


//-----------------------STEP ONE -------------------------//
//start quiz button event listener
$('#startQuiz').on('click', function () {
    startQuiz();
});
$('#savedPets').on('click', function () {
    seeHistory();
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

function seeHistory() {
    var savedPets = JSON.parse(localStorage.getItem('petToFetch'));
}


//----------------------STEP THREE------------------------//
function setQuestion(number) {
    clearPage();

    $('<div/>').attr('id', 'column').attr('class', 'uk-animation-fade image-header uk-flex uk-flex-center uk-flex-column uk-flex-center@m').appendTo('#container2');
    $('<h1/>').attr('id', 'question').attr('class', 'uk-text-center').text(quizArray[number].question).appendTo('#column');
    $('<button/>').attr('class', 'uk-button uk-button-default uk-align-center uk-text-lowercase uk-margin uk-width-1-2@m').attr('id', quizArray[number].response1[1]).text(quizArray[number].response1[0]).appendTo('#column');
    $('<button/>').attr('class', 'uk-button uk-button-default uk-align-center uk-text-lowercase uk-margin uk-width-1-2@m').attr('id', quizArray[number].response2[1]).text(quizArray[number].response2[0]).appendTo('#column');
    randomFacts();

    //listens for clicks on buttons with id "big" - adds +1 to petSize
    $('#big').on('click', function () {
        petSize++
    })
    //listens for clicks on buttons with id "small" - takes -1 from petSize
    $('#small').on('click', function () {
        if (petSize >= 1) {
            petSize--
        }
    })
    //listens for clicks on buttons with id "active" - adds +1 to petActivity
    $('#active').on('click', function () {
        petActive++
    })
    //listens for clicks on buttons with id "notActive" - takes -1 from petActivity
    $('#notActive').on('click', function () {
        if (petActive >= 1) {
            petActive--
        }
    })
    //listens for clicks on buttons with id "dog" - takes +1 from petType
    $('#dog').on('click', function () {
        petType++
    })
    //listens for clicks on buttons with id "cat" - takes -1 from petType
    $('#cat').on('click', function () {
        if (petType >= 1) {
            petType--
        }
    })

    $('.uk-button').on('click', function () {


        questionNumber++;
        clearPage();
        if (questionNumber === 5) {
            setResults();
        } else {
            setQuestion(questionNumber);
        }
    })
}

//This function uses fetch requests for two different API sources to generate random facts
function randomFacts() {
    var factNum = Math.floor(Math.random() * 11);
    if (factNum > 5) {
        fetch(dogurlToFetch).then(function (response) {
            return response.json()
        }).then(function (data) {
            $('<p/>').attr('id', 'dogFacts').attr('class', 'uk-animation-fade uk-text-muted uk-width-1-1 uk-width-1-2@m  uk-text-center uk-align-center').text('Did you know? ' + data[0].fact).appendTo('#container2');
        });
    } else {
        fetch(caturlToFetch).then(function (response) {
            return response.json()
        }).then(function (data) {
            $('<p/>').attr('id', 'catFacts').attr('class', 'uk-animation-fade uk-text-muted uk-width-1-1 uk-width-1-2@m  uk-text-center uk-align-center').text('Did you know? ' + data.data[0]).appendTo('#container2');
        });
    }
}

//This function creates a variable to hold past saved results
function history() {
    var savedPets = JSON.parse(localStorage.getItem(petToFetch))
};

//Set result function clears the current page and creates new content for the results page
function setResults() {
    clearPage();

    //These statement take quiz results and match them with possible compatible pets
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


        $('<div/>').attr('class', 'uk-animation-slide-right uk-card uk-card-body uk-card-default uk-margin-small').attr('id', 'card').appendTo('#container2');


        fetch(petToFetch, {
            headers: { Authorization: `Bearer ${data.access_token}` }
        }).then(function (response) {
            return response.json()
            //  show reults of fetch
        }).then(function (data) {
            var petIndex = Math.floor(Math.random() * 20);

            var petPic = data.animals[petIndex].photos[0];
            var petName = data.animals[petIndex].name;
            var petBreed1 = data.animals[petIndex].breeds.primary;
            var petBreed2 = data.animals[petIndex].breeds.secondary;
            var petAge = data.animals[petIndex].age;
            var petGender = data.animals[petIndex].gender;
            var petCity = data.animals[petIndex].contact.address.city;
            var petState = data.animals[petIndex].contact.address.state;
            var petAbout = data.animals[petIndex].description;
            var petEmail = data.animals[petIndex].contact.email;


            var imgs = document.getElementsByTagName("img");
            for (var i = 0; i < imgs.length; i++) {
                imgs[i].onerror = imgError(imgs[i]);
            }


            if (petPic === undefined){
                petPic = './assets/images/pawPair_noPic.png';
                $('<img/>').attr('id', 'pic').attr('class', 'uk-animation-fade uk-width-1-1 uk-width-1-2@m').attr('src', petPic).attr('height', '300px').attr('width', '200px').appendTo('#card');
            } else {
                $('<img/>').attr('id', 'pic').attr('class', 'uk-animation-fade uk-width-1-1 uk-width-1-2@m').attr('src', petPic.large).attr('height', '200px').appendTo('#card');
            }
                $('<h1/>').attr('id', 'name').attr('class', 'uk-animation-fade uk-text-muted margin-small').text(petName).appendTo('#card');
            if (petBreed2 === null) {
                $('<span/>').attr('id', 'breed').attr('class', 'uk-animation-fade uk-badge uk-secondary').text('Breed: ' + petBreed1).appendTo('#card');
            } else {
                $('<span/>').attr('id', 'breed').attr('class', 'uk-animation-fade uk-badge uk-secondary').text('Breed: ' + petBreed1 + ' & ' + petBreed2).appendTo('#card');
            }
            $('<span/>').attr('id', 'gender').attr('class', 'uk-badge uk-secondary').text('Age: ' + petAge).appendTo('#card');
            $('<span/>').attr('id', 'age').attr('class', 'uk-badge uk-secondary').text('Gender: ' + petGender).appendTo('#card');
            $('<span/>').attr('id', 'location').attr('class', 'uk-badge uk-secondary').text('Location: ' + petCity + ', ' + petState).appendTo('#card');
            // $('<span/>').attr('id', 'activityLevel').attr('class', 'uk-badge uk-secondary').text('Activity Level: ' + petActive).appendTo('#card');
            $('<p/>').attr('id', 'about').attr('class', 'uk-text-muted').text(petAbout).appendTo('#card');
            $('<p/>').attr('id', 'email').attr('class', 'uk-text-muted').text('Interested? Send an email to ' + petEmail).appendTo('#card');
            
            $('<button/>').attr('id', 'startQuiz').attr('class', 'uk-button uk-button-default uk-align-center uk-text-lowercase uk-text-large uk-margin-small').text('Play again').appendTo('#card');

            
            $('<a/>').attr('id', 'savedPets').attr('class', 'uk-align-center uk-text-lowercase uk-text-large uk-text-center uk-margin-remove').attr('href', 'saved-pets.html').text('Matched pets').appendTo('#card');


            var history = JSON.parse(localStorage.getItem('history')) || [];

            var historyEntry = {
                petPic: petPic,
                petName: petName,
                petBreed1: petBreed1,
                petBreed2: petBreed2,
                petAbout: petAbout
            }

            //update history
            history.push(historyEntry);
            if (history.length > 10) {
                history.shift();
            }
            localStorage.setItem('history', JSON.stringify(history))
            $('#startQuiz').on('click', function () {
                clearPage();
                startQuiz();
            })
            $('#savedPets').on('click', function () {
                window.location.href='saved-pets.html';
            })


        })
    });

}

var historyButton = JSON.parse(localStorage.getItem('history'))
if (historyButton === null) {
    $('#savedPets').css('visibility', 'hidden');
} else {
    $('#savedPets').css('visibility', 'visible');
}


//----------------------CLEAR PAGE FUNCTION---------------//
function clearPage() {
    $('#container2').children().remove();
}