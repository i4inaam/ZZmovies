const express = require('express');
const cors = require('cors');
const movierouter = require('./router/movieRouter')
const app = express();

app.use(express.json());
app.use(cors());
app.use('/movies', movierouter);

app.use((req, res, next) => {
    res.status(404).json({error: req.url + " API is not supported"});
});

app.use((error, req, res) => {
    res.status(505).json({error : "Sorry something went wrong! "});
});

app.listen(2160,  console.log("server in on..."));