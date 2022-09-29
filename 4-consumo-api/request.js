var request = require('request');

var config = {
    method : 'get',
    url : 'https://rickandmortyapi.com/api/character/12',
    Headers : {}
}

console.log(config);

request(config, function(error,response){
    if(error) throw new Error(error);
    console.log(response.body);
})