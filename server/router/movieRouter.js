const express = require('express');
const movieController = require('../controller/movieController');

const router = express.Router();

router.get("/", movieController.getAllMovies);
router.get("/search/:keyword", movieController.searchByKeyword);
router.get("/category/:categry", movieController.moviesByCategory);
router.get('/byyear/:year', movieController.moviesByYear);
router.post('/addmovie', movieController.addMovie);

module.exports = router;
