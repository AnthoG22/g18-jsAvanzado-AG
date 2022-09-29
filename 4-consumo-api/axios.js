var axios = require('axios');
var config = require('./config');

var config = {
    method : 'get',
    url : 'https://rickandmortyapi.com/api/character/12',
    Headers : {}
}

axios(config)
    .then(function(response){
        console.log(response.data);
    })
    .catch(function(error){
        console.log(error);
    })
