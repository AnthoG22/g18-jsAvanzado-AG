var unirest = require('unirest');

var url = 'https://rickandmortyapi.com/api/character/12';

var response = unirest('GET',url)
    .end(function(response){
        if(response.error) throw new error(response.error);
        console.log(response.body);
    })