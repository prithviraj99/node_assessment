var express = require('express');
var router = express.Router();
var fs = require('fs-extra');
var path = require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload', function(req, res, next) {
  var fstream;
  req.pipe(req.busboy);
  req.busboy.on('file', function (fieldname, file, filename) {
      console.log("Uploading: " + filename);
      let directoryPath = path.join(__dirname + '/../uploads/');
      fs.existsSync(directoryPath) || fs.mkdirpSync(directoryPath);
      fstream = fs.createWriteStream(directoryPath + filename);
      file.pipe(fstream);
      fstream.on('close', function () {    
          console.log("Upload Finished of " + filename);              
          res.redirect('back');
      });
  });
})
module.exports = router;
