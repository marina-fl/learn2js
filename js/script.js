"use strict";
  const numberOfFilms = +prompt("Сколько фильмов?","");
  const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
  };

  const oneFilm = prompt("One of the latest films", "");
  const oneFilmRate = +prompt("How do you rate it", "10");
        personalMovieDB.movies[oneFilm] = oneFilmRate;

  console.log(personalMovieDB);



