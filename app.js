const express = require('express');
const app = express();
const port = 8080;

<<<<<<< HEAD
app.get('/', (req, res) => res.send('this is for the CICD Pipeline yes indeed and it's great!'));
=======
app.get('/', (req, res) => res.send('this is for the CICD Pipeline yes indeed! and its amazing to use it'));
>>>>>>> refs/remotes/origin/main

app.listen(port);
console.log(`App running on http://localhost:${port}`);
