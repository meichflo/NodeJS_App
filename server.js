'use strict';
const express = require('express');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello Florian to the DevOps Course :-D | This is after the change of connecting the two jenkins items!');
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);