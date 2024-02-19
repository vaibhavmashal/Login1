const express = require('express');
const path = require('path');
const app = express()
const port = 3000

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


// routes


app.use('/start', require('./routes/signup_rout'));


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
