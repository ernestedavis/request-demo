const express = require('express');
const app = express();
const formidable = require('formidable');
const util = require('util');

app.listen(3000, () => console.log('Example app listening on port 3000!'));

app.post('/', (req, res, next) => {
    console.log("POST:req.headers:\n", req.headers);

    new formidable.IncomingForm().parse(req, (err, fields, files) => {
        if (err) {
            console.error(err);
            next(err);
        } else {
            res.send('POST & form.parse() succeeded.\n');
        }
    });

});