"use strict";
let numberOfFilms;
 
function start(){
      numberOfFilms = +prompt("Сколько фильмов Вы посмотрели?", "0" );

      while ( numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
            numberOfFilms = +prompt("Сколько фильмов Вы посмотрели?", "0" );    
      }
}
start();
const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
  };

/*   function rememberUserFilms(){ 
  for (let i=0; i<2; i++){
  const oneFilm = prompt("One of the latest films", "");
  const oneFilmRate = +prompt("How do you rate it", "10");
  personalMovieDB.movies[oneFilm] = oneFilmRate;
  }
}
 rememberUserFilms();

 function detectUserLevel(){
  if (personalMovieDB.count < 10){
      console.log("просмотрено довольно мало фильмов");    
  } else if (personalMovieDB.count > 30){
      console.log("Вы киноман!");
  } else {console.log("Золотая середина!");}
}
detectUserLevel(); */

function showMyBD(){

      if (personalMovieDB.privat == false){
            console.log(personalMovieDB); 
      }
}

function writeUserGenres(){
      let a;
      for(let i = 1; i <= 3; i++) {
          personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i} `,"");
      }
}

writeUserGenres();

showMyBD();

