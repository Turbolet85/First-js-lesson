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

//////////////////////////////////////////////////

// To string

// 1)
console.log(typeof String(null));
// 2)
console.log(typeof (5 + ''));

const num = 5;
console.log('https://vk.com/catalog/' + num);

const fontSize = 26 + 'px';

//////////////////////////////////////////////////

// to Number

// 1)
console.log(typeof Number('4'));
console.log(Number('4'));
// 2)
console.log(typeof +'4');
// 3)
console.log(parseInt('4px', 10));

let answ = +prompt('Hello', '');
//////////////////////////////////////////////////

// To Boolean

// false
// 1)

// 0, '', null, undefined, NaN
let switcher = null;
if (switcher) {
	console.log('Working');
}

// 2)
console.log(typeof Boolean(''));

// 3)

console.log(typeof !!'4444');

//////////////////////////////////////////////////
