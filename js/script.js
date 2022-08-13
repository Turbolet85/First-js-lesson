"use strict";

// a = 15;
// console.log(a);

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);


// const obj = {
//     a: 50
// };

// obj.a = 10;

// console.log(obj);


// {
//     let result = 50;
//     console.log(result);
// }






// data types

// let number = 4.6;

// console.log(4/0);

// console.log('string' * 9);

// const person = "Alex";

// const bool = true;

// let und;
// console.log(und);

//objects
// const obj = {
// 	name: "John",
// 	age: 25,
// 	isMarried: false
// };

// console.log(obj.name);
// console.log(obj["name"]);

//Array

// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
// console.log(arr[1]);




//Simple interactions with page

// alert('Hello');


// const result = confirm("Are you here?");
// console.log(result);


// const answer = +prompt("Are you 18?", "18");
// console.log(answer + 5);


// const answers = [];

// answers[0] = prompt('Whats your name?', '');
// answers[1] = prompt('Whats your surname?', '');
// answers[2] = prompt('How old are you?', '');

// console.log(answers);
// document.write(answers);




//Interpolation

// const category = 'toys';
// console.log('https://someurl.com/' + category);
// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";
// alert(`Hello ${user}`);




//Operators

// console.log('arr' + ' - object');
// console.log(4 + +"5");

// let incr = 10,
//     decr = 10;

// // incr++;
// // decr--;

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);

// console.log(2*4 == 8);
// console.log(2*4 === '8');

// const isChecked = true;
// const isClose = false;

// // console.log(isChecked && isClose);
// console.log(isChecked || isClose);



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



// if allways return boolean
// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('Error!');
// }

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('To much');
// } else {
//     console.log ('Ok!');
// }

// (num == 50) ? console.log('Ok!') : console.log('Error!');



// const num = 51;

// switch (num) {
//     case 49:
//         console.log('Not correct');
//         break;
//     case 100:
//         console.log('Not correct');
//         break;
//     case 50:
//         console.log('Correct');
//         break;
//     default:
//         console.log('Not this time');
//         break;
// }


// const hamburger = 5;
// const fries = 1;

// if (hamburger && fries) {
//     console.log('Nice!');
// } else {
//     console.log('Sad!');
// }
// console.log(hamburger && fries);

// console.log( NaN || 2 || undefined );
// console.log( NaN && 2 && undefined );
// console.log( 1 && 2 && 3 );
// console.log( !1 && 2 || !3 );
// console.log( 25 || null && !3 );
// console.log( NaN || null || !3 || undefined || 5);

// console.log( NaN || null && !3 && undefined || 5);
// console.log( 5 === 5 && 3 > 1 || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// // console.log(hamburger === 3 && cola);
 
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// }





//cyles

const num = 50;

while (num < 55) {
    
}