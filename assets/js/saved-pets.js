$(document).ready(function() {

    var history = JSON.parse(localStorage.getItem('history')) || [];
    
    console.log("*****", history);
    
    var petStr = "";
    history.forEach((pet) => {
        petStr += `
            <div>
                <h1>${pet.petName}</h1>
                <img src="${pet.petPic.medium}">
                <div>Breed: ${pet.petBreed}</div>
                <p>${pet.petAbout}</p>
            </div>
        `;
    });
    
    document.querySelector(".saved-pet-container").innerHTML = petStr;


});