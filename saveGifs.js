var archiver = require('archiver');
var http = require('http');
var fs = require('fs');
var counter = 0;

function save(gifs, zip, response){
    var request = http.get(gifs[counter]['gif'], function(res, body) {
        zip.append(res, {name :  gifs[counter]['id'] + '.gif'});
    });

    request.on('close', function () {
        counter++;
        if(counter == gifs.length) {
            zip.finalize();
            counter = 0;
        } else {
            save(gifs, zip, response);
        }
    });

}

module.exports = save;



