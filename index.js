const express = require('express');


const app = express();

app.get('/', async (req, res) => {
    res.send('<h1 id="page-title">Hello World</h1>')
});

const port = 3000;

app.listen(port, () => {
    console.log('Hello world');
});

module.exports = app;