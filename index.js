var saveGifs = require('./saveGifs');
var archiver = require('archiver');
var http = require('http');
var arr = [{"height":200,"thumbnail":"http://media4.giphy.com/media/FnsbzAybylCs8/200w_s.gif","gif":"http://media4.giphy.com/media/FnsbzAybylCs8/200w.gif","url":"http://media4.giphy.com/media/FnsbzAybylCs8/giphy.gif","fbUrl":"http://giphy.com/gifs/mrw-crush-name-FnsbzAybylCs8","loaded":false,"id":"FnsbzAybylCs8"},{"height":113,"thumbnail":"http://media1.giphy.com/media/thWS2MAInoVos/200w_s.gif","gif":"http://media1.giphy.com/media/thWS2MAInoVos/200w.gif","url":"http://media1.giphy.com/media/thWS2MAInoVos/giphy.gif","fbUrl":"http://giphy.com/gifs/adweek-nfl-bears-thWS2MAInoVos","loaded":false,"id":"thWS2MAInoVos"},{"height":200,"thumbnail":"http://media2.giphy.com/media/26xBFKBULFz7lOjra/200w_s.gif","gif":"http://media2.giphy.com/media/26xBFKBULFz7lOjra/200w.gif","url":"http://media2.giphy.com/media/26xBFKBULFz7lOjra/giphy.gif","fbUrl":"http://giphy.com/gifs/cat-animated-girl-26xBFKBULFz7lOjra","loaded":false,"id":"26xBFKBULFz7lOjra"},{"height":241,"thumbnail":"http://media1.giphy.com/media/yFQ0ywscgobJK/200w_s.gif","gif":"http://media1.giphy.com/media/yFQ0ywscgobJK/200w.gif","url":"http://media1.giphy.com/media/yFQ0ywscgobJK/giphy.gif","fbUrl":"http://giphy.com/gifs/facepalm-yFQ0ywscgobJK","loaded":false,"id":"yFQ0ywscgobJK"},{"height":219,"thumbnail":"http://media0.giphy.com/media/l0Exv40OjaFq0slzi/200w_s.gif","gif":"http://media0.giphy.com/media/l0Exv40OjaFq0slzi/200w.gif","url":"http://media0.giphy.com/media/l0Exv40OjaFq0slzi/giphy.gif","fbUrl":"http://giphy.com/gifs/angry-heart-l0Exv40OjaFq0slzi","loaded":false,"id":"l0Exv40OjaFq0slzi"},{"height":112,"thumbnail":"http://media1.giphy.com/media/l0Ex0g98aVovPdfTa/200w_s.gif","gif":"http://media1.giphy.com/media/l0Ex0g98aVovPdfTa/200w.gif","url":"http://media1.giphy.com/media/l0Ex0g98aVovPdfTa/giphy.gif","fbUrl":"http://giphy.com/gifs/studiosoriginals-l0Ex0g98aVovPdfTa","loaded":false,"id":"l0Ex0g98aVovPdfTa"},{"height":113,"thumbnail":"http://media0.giphy.com/media/WfXQpCwemYCnm/200w_s.gif","gif":"http://media0.giphy.com/media/WfXQpCwemYCnm/200w.gif","url":"http://media0.giphy.com/media/WfXQpCwemYCnm/giphy.gif","fbUrl":"http://giphy.com/gifs/sonymusiccolombia-couple-tucalor-julietavengeas-WfXQpCwemYCnm","loaded":false,"id":"WfXQpCwemYCnm"},{"height":112,"thumbnail":"http://media0.giphy.com/media/26gsalBVQMQ7LoVfG/200w_s.gif","gif":"http://media0.giphy.com/media/26gsalBVQMQ7LoVfG/200w.gif","url":"http://media0.giphy.com/media/26gsalBVQMQ7LoVfG/giphy.gif","fbUrl":"http://giphy.com/gifs/snl-saturday-night-live-season-42-26gsalBVQMQ7LoVfG","loaded":false,"id":"26gsalBVQMQ7LoVfG"},{"height":113,"thumbnail":"http://media4.giphy.com/media/26xBsFK9RVgoum1q0/200w_s.gif","gif":"http://media4.giphy.com/media/26xBsFK9RVgoum1q0/200w.gif","url":"http://media4.giphy.com/media/26xBsFK9RVgoum1q0/giphy.gif","fbUrl":"http://giphy.com/gifs/party-woman-neon-26xBsFK9RVgoum1q0","loaded":false,"id":"26xBsFK9RVgoum1q0"},{"height":200,"thumbnail":"http://media1.giphy.com/media/FnsbzAybylCs8/200w_s.gif","gif":"http://media1.giphy.com/media/FnsbzAybylCs8/200w.gif","url":"http://media1.giphy.com/media/FnsbzAybylCs8/giphy.gif","fbUrl":"http://giphy.com/gifs/mrw-crush-name-FnsbzAybylCs8","loaded":false,"id":"FnsbzAybylCs8"},{"height":113,"thumbnail":"http://media4.giphy.com/media/9Umj7Chj6wxlC/200w_s.gif","gif":"http://media4.giphy.com/media/9Umj7Chj6wxlC/200w.gif","url":"http://media4.giphy.com/media/9Umj7Chj6wxlC/giphy.gif","fbUrl":"http://giphy.com/gifs/cheezburger-art-amazing-9Umj7Chj6wxlC","loaded":false,"id":"9Umj7Chj6wxlC"},{"height":110,"thumbnail":"http://media1.giphy.com/media/l3q2y2764DUQIKNRm/200w_s.gif","gif":"http://media1.giphy.com/media/l3q2y2764DUQIKNRm/200w.gif","url":"http://media1.giphy.com/media/l3q2y2764DUQIKNRm/giphy.gif","fbUrl":"http://giphy.com/gifs/nba-lebron-james-three-l3q2y2764DUQIKNRm","loaded":false,"id":"l3q2y2764DUQIKNRm"}]

//saveGifs(arr);

http.createServer(function (req, res) {
   res.writeHead(200, {
       'Access-Control-Allow-Origin' : '*',
       'Access-Control-Expose-Headers' : 'Content-Disposition',
       'Content-Type' : 'application/zip',
       'Content-Disposition' : 'attachment; filename=myFile.zip',
   });

    var zip = archiver('zip');

    zip.pipe(res);
    saveGifs(arr, zip, res);

}).listen(3000);