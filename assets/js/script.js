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
var type = "";
var breed = "";

//var searchUrl;
var petToFetch = `https://api.petfinder.com/v2/animals?type=${type}&breed=${breed}`

//test url
//var petToFetch = `https://api.petfinder.com/v2/animals?type=dog&breed=pug`;


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
//Are you artistic



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

    $('<div/>').attr('id', 'column').attr('class', 'image-header uk-flex uk-flex-center uk-flex-column uk-flex-center@m').appendTo('#container2');
    $('<h1/>').attr('id', 'question').attr('class', 'uk-text-center').text(quizArray[number].question).appendTo('#column');
    $('<button/>').attr('class', 'uk-button uk-button-default uk-align-center uk-text-lowercase uk-margin uk-width-1-2@m').attr('id', quizArray[number].response1[1]).text(quizArray[number].response1[0]).appendTo('#column');
    $('<button/>').attr('class', 'uk-button uk-button-default uk-align-center uk-text-lowercase uk-margin uk-width-1-2@m').attr('id', quizArray[number].response2[1]).text(quizArray[number].response2[0]).appendTo('#column');


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

        console.log("Pet Size: " + petSize);
        console.log("Pet active: " + petActive);
        console.log("Pet type: " + petType);

        questionNumber++;
        clearPage();
        if (questionNumber === 5) {
            setResults();
        } else {
            setQuestion(questionNumber);
        }
    })
}


function history() {
    var savedPets = JSON.parse(localStorage.getItem(petToFetch))
    console.log('savedPets: ', JSON.parse(savedPets));
};

//----------------------STEP FOUR-------------------------//
function setResults() {
    clearPage();

    var petPic = "placeholder";//need link to api
    var petName = "placeholder";//need link to api
    var petBreed = "placeholder";//need link to api
    var petAbout = "placeholder";//need link to api



    // $('<div/>').attr('class', 'container box').attr('id', 'test').appendTo(document.body);
    // $('<h1/>').attr('id', 'question').text('setResults Placeholder').appendTo('#test');
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
            console.log(data);
            var petIndex = Math.floor(Math.random() * 20);
            console.log(petIndex);
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

            

                

            // function noImage() {
            //     var img = $('<img />');
            //     if (data.animals[petIndex].photos.length <= 0) return {
            //         ${img src = "https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673.png">};
            //     console.log(return);
            //     }
                
   
    
            var imgs = document.getElementsByTagName("img");
            for (var i = 0; i < imgs.length; i++) {
                imgs[i].onerror=imgError(imgs[i]);
            }
            

            $('<div/>').attr('uk-height-viewport', 'expand: true').attr('class', 'uk-card uk-card-body uk-card-default uk-height-1-1 uk-margin-small').attr('id', 'card').appendTo('#container2');
            if (petPic === undefined){
                petPic = './assets/images/pawPair_noPic.png';
                $('<img/>').attr('id', 'pic').attr('class', 'uk-width-1-1 uk-width-1-2@m').attr('src', petPic).attr('height', '300px').attr('width', '200px').appendTo('#card');
            } else {
                $('<img/>').attr('id', 'pic').attr('class', 'uk-width-1-1 uk-width-1-2@m').attr('src', petPic.large).attr('height', '300px').appendTo('#card');
            }
                $('<h1/>').attr('id', 'name').attr('class', 'uk-text-muted margin-small').text(petName).appendTo('#card');
            if (petBreed2 === null) {
                $('<span/>').attr('id', 'breed').attr('class', 'uk-badge uk-secondary').text('Breed: ' + petBreed1).appendTo('#card');
            } else {
                $('<span/>').attr('id', 'breed').attr('class', 'uk-badge uk-secondary').text('Breed: ' + petBreed1 + ' & ' + petBreed2).appendTo('#card');
            }
            $('<span/>').attr('id', 'gender').attr('class', 'uk-badge uk-secondary').text('Age: ' + petAge).appendTo('#card');
            $('<span/>').attr('id', 'age').attr('class', 'uk-badge uk-secondary').text('Gender: ' + petGender).appendTo('#card');
            $('<span/>').attr('id', 'location').attr('class', 'uk-badge uk-secondary').text('Location: ' + petCity + ', ' + petState).appendTo('#card');
            $('<span/>').attr('id', 'activityLevel').attr('class', 'uk-badge uk-secondary').text('Activity Level: ' + petActive).appendTo('#card');
            $('<p/>').attr('id', 'about').attr('class', 'uk-text-muted').text(petAbout).appendTo('#card');
            $('<p/>').attr('id', 'email').attr('class', 'uk-text-muted uk-width-2-3 uk-width-1-4@m  uk-align-center').text('Interested? Send an email to ' + petEmail).appendTo('#card');
            $('<button/>').attr('id', 'playAgain').attr('class', 'uk-width-2-3 uk-width-1-4@m  uk-align-center').text('Play again').appendTo('#container2');

            // $('<button/>').attr('id', 'learnMore').attr('class', 'uk-width-1-2 uk-width-1-4@m').text('Learn more').appendTo('#container2');

            // $('#learnMore').on('click', function () {
            //     clearPage();
            //     // run function to get more info  about pet    
            // })

            $('#playAgain').on('click', function () {
                clearPage();
                startQuiz();
            })


        }).then(function () {

            //add localStorage
            var history = JSON.parse(localStorage.getItem('history')) || [];

            var historyEntry = {
                petPic: petPic,
                petName: petName,
                petBreed: petBreed,
                petAbout: petAbout
            }

            //update hisotry
            history.push(historyEntry);

            localStorage.setItem('history', JSON.stringify(history))

        });
    });
    //$('<button/>').attr('id', 'learnMore').text('Learn more').appendTo('#container2');



}

function storedHistory() {
    localStorage.setItem('petToFetch', JSON.stringify(petToFetch));
}



//----------------------CLEAR PAGE FUNCTION---------------//
function clearPage() {
    $('#container2').children().remove();
}