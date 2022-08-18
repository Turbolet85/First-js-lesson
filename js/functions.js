"use strict";

// // functions
// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     num = 30;

// }
// showFirstMessage('Hello world');

// console.log(num);

// function calcl(a,b) {
//     return a + b;
// }

// console.log(calcl(5, 3));
// console.log(calcl(6, 7));
// console.log(calcl(8, 3));

// function ret() {
//     let num = 50;
//     return num;
// }
// console.log(ret());

// const logger = function() {
//     console.log('Hello');
// };

// logger();


// const calc = (a, b) => a + b;


// const usdCurr = 28;
// const eurCurr = 32;
// const discount = 0.9;


// function convert (amount, curr) {
//     return curr * amount;
// }

// convert(500, eurCurr);

// function promotion(result) {
//     console.log(result * discount);
// }

// const res = convert(500, eurCurr);
// promotion(res);

// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) {
//             return;
//         }
//     }
//     console.log('done');
// }

// test();

// function doNothing() {}
// console.log(doNothing() === undefined);


// function sayHello(name) {
//     return 'Hello, '+ name;
// }

// console.log(sayHello('Anton'));



// function returnNeighboringNumbers(i) {
//     const arr = [];
//     arr[0] = i - 1;
//     arr[1] = i;
//     arr[2] = i + 1;
//     return arr;
// }

// console.log(returnNeighboringNumbers(7));


// function getMathResult(a, b) {
//     let result = '';
//     if(typeof b !== 'number' || b <= 0) {
//         result = a;
//     } else {
//         for(let i = 0; i < b; i++) {
//             if(i == b - 1) {
//                 result += a + (a * i);
//             } else {
//                 result += a + (a * i) + '---';
//             }
//         }    
//     }
//     return result;
// }

// console.log(getMathResult(3, 6));



// const mult = () => {
//     console.log('eee boy!');
// };

// mult();

////////////////////////////////////////////////////////////////


// function calculateVolumeAndArea(edgeLenght) {
//     const volume = Math.pow(edgeLenght, 3);
//     const square = 6 * Math.pow(edgeLenght, 2);

//     if(Number.isInteger(edgeLenght) === true && edgeLenght > 0 && typeof edgeLenght === 'number') {
//         return `Объем куба: ${volume}, площадь всей поверхности: ${square}`;
//     } else {
//         return 'При вычислении произошла ошибка';
//     }
// }

// console.log(calculateVolumeAndArea(5));



// function getCoupeNumber(num) {
//     const vagon = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16], [17,18,19,20], [21,22,23,24], [25,26,27,28], [29,30,31,32], [33,34,35,36]];
//     const result = vagon.findIndex(search => search.some(place => place === num));
//     return result + 1;
// }


// console.log(getCoupeNumber(11));


// function getCoupeNumber(num) {
//     const vagon = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16], [17,18,19,20], [21,22,23,24], [25,26,27,28], [29,30,31,32], [33,34,35,36]];

//     if(num === '' || num < 0 || typeof num !== 'number' || Number.isInteger(num) === false) {
//         return 'Ошибка. Проверьте правильность введенного номера места';
//     } else if(num === 0 || num > 36) {
//         return "Таких мест в вагоне не существует";
//     } else {
//         for(let i= 0; i < vagon.length; i++) {
//             if(vagon[i].indexOf(num) >= 0){
//                 return i + 1;
//             }
//         }       
//     }
// }  

// console.log(getCoupeNumber(38));


// function getTimeFromMinutes(mins) {
//     const hours = parseInt(mins / 60);
//     const remainMins= mins - (hours * 60);
//     if(mins < 0 || typeof mins !== 'number' || Number.isInteger(mins) === false) {
//         return "Ошибка, проверьте данные";
//     } else if(mins < 60) {
//         return `Это 0 часов и ${mins} минут`;
//     } else if(hours === 1) {
//         return `Это 1 час и ${remainMins} минут`;
//     } else if(hours > 1 && hours < 5) {
//         return `Это ${hours} часа и ${remainMins} минут`;
//     } else if(hours > 4 && hours <= 10) {
//         return `Это ${hours} часов и ${remainMins} минут`;
//     }
// }

// console.log(getTimeFromMinutes(370));


// function findMaxNumber(a, b, c, d) {
//     if(typeof(a) !== 'number'|| typeof(b) !== 'number'|| typeof(c) !== 'number'|| typeof(d) !== 'number') {
//         return 0;
//     } else {
//         return Math.max(a, b, c, d);
//     }
    
// }

// console.log(findMaxNumber(2, 4, 7, 12.1));


function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }
    let result = '';
    let first = 0;
    let second = 1;
    for(let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
        } else {
            result += `${first} `;
        }
        let third = first + second;
        first = second;
        second = third;
    }
    return result;
}

// console.log(fib(10));



function first() {
    //do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();


function learnJS(lang, callback) {
    console.log(`I'm learning: ${lang}`);
    callback();
}

learnJS('Javascript', function() {
    console.log('I learned this lesson');
});

