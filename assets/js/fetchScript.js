
var dogurlToFetch = `https://boiling-meadow-47923.herokuapp.com/https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all`
//var caturlToFetch =
var petToFetch = "https://api.petfinder.com/v2/animals?type=dog&page=2"

fetch(dogurlToFetch).then(function (response) {
    return response.json()
}).then(function (data) {
    //console.log(data);
});

fetch("https://api.petfinder.com/v2/oauth2/token", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ grant_type: "client_credentials", client_id: "HEGMAK8rmrTdGMxSLLuVTpwt1pAwGMYtsMlYO8XCERMTLT7CAY", client_secret: "CfhtSPVPSW0YKpFQvIHmdDYtBzEWHkFaVmr2nlAe" }) }).then(function (response) {
    return response.json()
}).then(function (data) {
    console.log(data);
    fetch(petToFetch, {
        headers: { Authorization: `Bearer ${data.access_token}` }
    }).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data);
    });
});