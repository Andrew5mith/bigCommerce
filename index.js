const express = require('express');
const app = express();

// when there's a post request to /webooks...
app.post('/webhooks', function (req, res) {
  
  	// respond with 200 OK
    res.send('OK');
});

app.listen(3000, function () {
    console.log('Listening for webhooks on port 3000')
})

let http = require('http');
 
let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.write('OK');
    response.end();
};
 
http.createServer(handleRequest).listen(8000);
