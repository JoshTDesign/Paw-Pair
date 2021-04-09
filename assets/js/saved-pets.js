$(document).ready(function() {

    var history = JSON.parse(localStorage.getItem('history')) || [];
    
    console.log("*****", history);
    
    var petStr = "";
    history.forEach((pet) => {
        
        var petAboutVar = pet.petAbout;
        console.log(pet.petAbout);

        if (pet.petAbout === null) {
            petStr += `
            <li class="uk-closed">
                <h1 class="uk-accordion-title">${pet.petName}</h1>
                <div class="uk-accordion-content uk-flex uk-flex-column uk-flex-wrap">
                    <div class="uk-width-1-4 uk-margin-remove">
                        <img src="${pet.petPic.medium}">
                    </div>
                    <div class="">
                        <p class="uk-badge" style="color:#C5494A">Breed: ${pet.petBreed1}</p>
                        <p class="uk-margin-remove uk-padding-remove"></p>
                    </div>
                </div>
            </li>
        `;
        } else {
            petStr += `
            <li class="uk-closed">
                <h1 class="uk-accordion-title">${pet.petName}</h1>
                <div class="uk-accordion-content uk-flex uk-flex-column uk-flex-wrap">
                    <div class="uk-width-1-4 uk-margin-remove">
                        <img src="${pet.petPic.medium}">
                    </div>
                    <div class="">
                        <p class="uk-badge" style="color:#C5494A">Breed: ${pet.petBreed1}</p>
                        <p class="uk-margin-remove uk-padding-remove">${pet.petAbout}</p>
                    </div>
                </div>
            </li>
        `; 
        }
        

    });
    
    document.querySelector(".saved-pet-container").innerHTML = petStr;


});

$('#goHome').on('click', function(){ 
    window.location.href = "index.html";
})