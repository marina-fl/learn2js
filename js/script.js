"use strict";

const personalMovieDB = {
      count: 0,
      movies: {},
      actors: {},
      genres: [],
      privat: false,
      start: function () {
            personalMovieDB.count = +prompt("Сколько фильмов Вы посмотрели?", "0");

            while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
                  personalMovieDB.count = +prompt("Сколько фильмов Вы посмотрели?", "0");
            }
      },
      rememberUserFilms: function () {
            for (let i = 0; i < 2; i++) {
                  const oneFilm = prompt("One of the latest films", "");
                  const oneFilmRate = +prompt("How do you rate it", "10");
                  personalMovieDB.movies[oneFilm] = oneFilmRate;
            }
      },
      detectUserLevel: function () {
            if (personalMovieDB.count < 10) {
                  console.log("просмотрено довольно мало фильмов");
            } else if (personalMovieDB.count > 30) {
                  console.log("Вы киноман!");
            } else {
                  console.log("Золотая середина!");
            }
      },
      showMyBD: function (hidden) {

            if (!hidden) {
                  console.log(personalMovieDB);
            }
      },
      toggleVisibleMyDB: function () {
            if (personalMovieDB.privat) {
                  personalMovieDB.privat = false;
            } else {
                  personalMovieDB.privat = true;
            }

      },
      writeUserGenres: function () {
                     
                        for (let i = 1; i <= 3; i++) {
                        let genre = prompt(`Ваш любимый жанр под номером ${i} `, "");
                        if (genre == ""|| genre == null){
                              console.log("еще раз");
                              i--;
                        } else {
                        personalMovieDB.genres[i-1] = genre;
                        }
                  }
                        personalMovieDB.genres.forEach((elem,index) => {
                              console.log(`любимый жанр под №${index+1} - ${elem}`);
                        });
            }
      
};
