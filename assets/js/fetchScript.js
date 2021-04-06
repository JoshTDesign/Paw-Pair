
var dogurlToFetch = `https://boiling-meadow-47923.herokuapp.com/https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all`
//var caturlToFetch =
//var petToFetch = 

fetch(dogurlToFetch).then(function (response) {
    return response.json()
}).then(function (data) {
    console.log(data);
});