
module.exports = function getHTML (options, callback) {
  var https = require('https');
  function getHTML (options, callback) {

  var allData = "";

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      allData += data;
    });

    response.on('end', function() {
      callback(allData);
      console.log('Response stream complete.');
    });

  });

}

function printHTML (html) {  //this is the callback that gets passed through getHTML
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);
/* Your code here */
};