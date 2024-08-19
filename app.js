const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('AWS simple web application'));

app.listen(port);
console.log(`My Simple Web Application  running on http://localhost:${port}`);
