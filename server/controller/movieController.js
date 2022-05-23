const movieClass = require('../model/movie');

module.exports.getAllMovies = (req, res, next) => {
    res.status(200).json(movieClass.getMovies());
}

module.exports.searchByKeyword = (req, res, next) => {
    res.status(200).json(movieClass.serchByKeyword(req.params.keyword));
}

module.exports.moviesByCategory = (req,res, next) => {
    res.status(200).json(movieClass.getMoviesByCategory(req.params.categry));
}

module.exports.moviesByYear = (req,res, next) => {
    res.status(200).json(movieClass.getMoviesByYear(req.params.year));
}

module.exports.addMovie = (req,res, next) => {
    res.status(200).json(movieClass.addNewMovie(req.body));
}