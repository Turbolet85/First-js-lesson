//cyles

// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 10; i++) {
//     if (i===6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue first; //break
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

// let begin = 4;

// for (let i = 0; i < 6; i++) {
//     begin++;
//     console.log(begin);
// }

// let begin = 21;

// for(let i = 0; i < 8; i++) {
//     begin--;
//     console.log(begin);
// }

// let begin = 0;

// for(let i = 0; i < 5; i++) {
//     begin = begin + 2;
//     console.log(begin);
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let num = 1;

// while (num < 15) {
//     num = num + 2;
//     console.log(num);
// }

// const arrayOfNumbers = [];

// // Пишем решение вот тут
// for(let i = 0; i < 6; i++) {
//     let result = i + 5;
//     arrayOfNumbers[i] = result;
// }
// // Не трогаем
// return arrayOfNumbers;

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for(let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
// }
// console.log(result);

// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for(let i = 0; i < data.length; i++) {
//     if(typeof data[i] === 'number') {
//         data[i] = data[i] * 2;
//     } else {
//         data[i] = data[i] + ' - done';
//     }
// }

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for(let i = 0; i < data.length; i++) {
//     let modIndex = data.length - 1;
//     result[i] = data[modIndex-i];
// }
// console.log(result);

// let result = '';
// const lines = 7;

// for (let i = 1; i < lines; i++) {
//     for (let k = lines - 1; k > i; k--) {
//         result += ' ';
//     }
//     for (let j = 0; j < i; j++) {
//         if(j === 0){
//             result += '*';
//         } else {
//             result += '**';
//         }
//     }
//     result += '\n';
// }
// console.log(result);
