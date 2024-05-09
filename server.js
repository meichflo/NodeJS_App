'use strict';
const express = require('express');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello Florian to the DevOps Course :-P. The new world is here! and the new world is DevOps!');
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);