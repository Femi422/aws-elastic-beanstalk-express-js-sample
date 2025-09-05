const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('this is for the CICD Pipeline yes indeed!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
