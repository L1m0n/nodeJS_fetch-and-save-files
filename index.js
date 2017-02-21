var http = require('http');
var fs = require('fs');
var url = 'http://blablabla.com/';
var counter = 4;

function save(fileName){
    var file = fs.createWriteStream(fileName + ".jpg");
    var request = http.get(url + fileName +".jpg", function(res) {
        res.pipe(file);
    });
}

for(var i = 1; i  < counter; i++) {
    save(i);
}

