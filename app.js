const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('this is for the CICD Pipeline yes indeed! and its amazing to use it and learn aswell'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
