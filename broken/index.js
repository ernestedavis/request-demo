const request = require('request');

const options = {
    method: 'POST',
    url: 'http://localhost:3000',
    headers: {
        'Content-Type': 'multipart/related; boundary="--MIME_boundary"'
    },
    multipart: [
        {
            'Content-Type': 'text/plain',
            body: 'body goes here'
        }
    ]
};

request(options, (error, response, body) => {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
});
