'use strict';

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

let personalMovieDB = {
	count: Number,
	movies: {},
	actors: {},
	genres: [],
	privat: true,

	start: function () {
		let numberOfFilms = +prompt('How many films you allredy saw?', '');

		while (
			numberOfFilms == '' ||
			numberOfFilms == null ||
			isNaN(numberOfFilms)
		) {
			numberOfFilms = +prompt('How many films you allredy saw?', '');
			personalMovieDB.count = numberOfFilms;
		}
	},

	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {
			const a = prompt('One of films you saw recently?', '').trim();
			const b = +prompt('how you rate it?', '1-10');
			if (
				a != null &&
				b != null &&
				a != '' &&
				b != '' &&
				a.length < 50 &&
				isNaN(b) != true
			) {
				personalMovieDB.movies[a] = b;
				console.log('good job!');
			} else {
				console.log('Wrong data entered');
				i--;
			}
		}
	},

	detectPersonalLevel: function () {
		if (personalMovieDB.count <= 10) {
			console.log('you saw small amount of movies');
		} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
			console.log('You saw awerage amount of movies');
		} else if (personalMovieDB.count > 30) {
			console.log('You saw lot of movies!');
		} else {
			console.log('Error detected');
		}
	},

	showMyDB: function () {
		const a = personalMovieDB.privat;
		if (!a) {
			console.log(personalMovieDB);
		}
	},

	toggleVisibleMyDB: function () {
		let { privat } = personalMovieDB;
		privat ? (privat = false) : (privat = true);
		personalMovieDB.privat = privat;
	},

	writeYourGenres: function () {
		for (let i = 0; i < 3; i++) {
			const a = prompt(`Your favorite movie genre No${i + 1}`);
			if (a != null && a != '' && a.length < 50) {
				personalMovieDB.genres[i] = a;
			} else {
				i--;
			}
		}
		personalMovieDB.genres.forEach((element, i) => {
			console.log(`Favorire genre #${i + 1} - ${element}`);
		});
	},
};

//////////////////////////////////////////////////
