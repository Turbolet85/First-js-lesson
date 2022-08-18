"use strict";


// const numberOfFilms = +prompt('How many films you allredy saw?', '');

// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('One of films you saw recently?', '');
// const b = +prompt('how you rate it?', '');
// const c = prompt('One of films you saw recently?', '');
// const d = +prompt('how you rate it?', '');


// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;


// console.log(personalMovieDB);

////////////////////////////////////////////////////////////////////////////////////////

// const numberOfFilms = +prompt('How many films you allredy saw?', '');

// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// if (personalMovieDB.count <= 10) {
//     console.log ('you saw small amount of movies');
// } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
//     console.log ('You saw awerage amount of movies');
// } else if (personalMovieDB.count > 30) {
//     console.log ('You saw lot of movies!');
// }


// for(let i = 0; i < 2; i++) {
//     const a = prompt('One of films you saw recently?', '');
//     const b = prompt('how you rate it?', '1-10');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('good job!');
//     } else {
//         console.log('Wrong data entered');
//         i--;
//     }
// }
// console.log(personalMovieDB);

////////////////////////////////////////////////////////////////////////////////////////////


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many films you allredy saw?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films you allredy saw?', '');
    }
}

// start();


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for(let i = 0; i < 2; i++) {
        const a = prompt('One of films you saw recently?', '').trim();
        const b = +prompt('how you rate it?', '1-10');
        if (a != null && b != null && a != '' && b != '' && a.length < 50 && isNaN(b) != true) {
            personalMovieDB.movies[a] = b;
            console.log('good job!');
        } else {
            console.log('Wrong data entered');
            i--;
        }
    }    
}

// rememberMyFilms();

function writeYourGenres() {
    for(let i = 0; i < 3; i++) {
        const a = prompt(`Your favorite movie genre No${i + 1}`);
        if(a != null && a != '' && a.length < 50) {
            personalMovieDB.genres[i] = a;
        } else {
            i--;
        }
    }
}

writeYourGenres();


function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        console.log ('you saw small amount of movies');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
        console.log ('You saw awerage amount of movies');
    } else if (personalMovieDB.count > 30) {
        console.log ('You saw lot of movies!');
    } else {
        console.log('Error detected');
    }    
}

// detectPersonalLevel();


function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);





