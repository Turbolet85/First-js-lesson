'use strict';

// const arr = [25, 12, 11, 43, 3];
// arr.sort((a, b) => a - b);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }

// arr[99] =0;
// console.log(arr.length);

// arr.pop();
// arr.push(10);

// console.log(arr);

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} inside of array ${arr}`);
// });

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('| '));

// const oldArr = ['a', 'b', 'c'];
// const newArr = oldArr.slice();

// newArr.push('d');
// console.log(newArr);
// console.log(oldArr);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'lifejourmal', 'medium'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(a) {
//     const b = a.length;
//     if(b == 0) {
//         return 'Семья пуста';
//     } else {
//         const arrMod =  a.join(' ');
//         return `Семья состоит из: ${arrMod}`;
//     }
// }

// // console.log(showFamily(family));

// // console.log(family.length);

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     console.log((arr.join('\n')).toLowerCase());
// }

// standardizeStrings(favoriteCities);

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let result = 'Семья состоит из:';
//     arr.length === 0 ? result = 'Семья пуста' :
//     arr.forEach(element => {
//         result += ` ${element}`;
//     });
//     return result;
// }
// console.log(showFamily(family));

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(array) {
//         array.forEach(element => {
//         console.log((`${element}`).toLowerCase());
//     });
// }

// standardizeStrings(favoriteCities);

// const someString = 'This is some strange string';

// function reverse(str) {
// 	if (typeof str != 'string') {
// 		return 'Ошибка!';
// 	} else {
// 		let result = '';
// 		let arr = str.split(' ');
// 		arr = arr.reverse();
// 		arr.forEach((element) => {
// 			let word = element.split('');
// 			word = word.reverse();
// 			word = word.join('');
// 			result += `${word} `;
// 		});
// 		result = result.slice(0, -1);
// 		return result;
// 	}
// }

// console.log(reverse(someString));

// const someString = 'This is some strange string';

// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// console.log(reverse(someString));

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
// 	delete arr[arr.indexOf(missingCurr)];
// 	let result = 'Доступные валюты:\n';
// 	if (arr.length < 1) {
// 		return 'Нет доступных валют';
// 	} else {
// 		arr.forEach((element) => {
// 			result += `${element}\n`;
// 		});
// 	}
// 	return result;
// }

// console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));

//////////////////////////////////////////////////

// const students = [
// 	'Peter',
// 	'Andrew',
// 	'Ann',
// 	'Mark',
// 	'Josh',
// 	'Sandra',
// 	'Cris',
// 	'Bernard',
// 	'Takesi',
// 	'Sam',

// ];

// function sortStudentsByGroups(arr) {
// 	let result = [];
// 	let arrSorted = arr.sort();
// 	for (let i = 0; i < 3; i++) {
// 		result.push(arrSorted.splice(0, 3));
// 	}

// 	if (arrSorted.length > 0) {
// 		result.push(`Оставшиеся студенты: ${arrSorted.join(', ')}`);
// 	} else {
// 		result.push(`Оставшиеся студенты: -`);
// 	}

// 	return result;
// }

// console.log(sortStudentsByGroups(students));

// function sortStudentsByGroups(arr) {
// 	let result = [];
// 	let arrSorted = arr.sort();
// 	const a = Math.round(arrSorted.length / 3);
// 	for (let i = 0; i < a; i++) {
// 		result.push(arrSorted.splice(0, 3));
// 	}

// 	if (arrSorted.length > 0) {
// 		result.push(`Оставшиеся студенты: ${arrSorted.join(', ')}`);
// 	} else {
// 		result.push(`Оставшиеся студенты: -`);
// 	}

// 	return result;
// }

// console.log(sortStudentsByGroups(students));

////////////////////////////////////////////////// filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter((name) => {
// 	return name.length < 5;
// });

// console.log(shortNames);

////////////////////////////////////////////////// map

// const names = ['IvAn', 'AnN', 'KsenIa', 'voldemart'];

// const result = names.map((item) => {
// 	return item.toLowerCase();
// });
// console.log(result);

////////////////////////////////////////////////// some/every

// const some = [4, 'qwq', 'sdgfsd'];

// console.log(some.some((item) => typeof item === 'number'));

//////////////////////////////////////////////////

// const obj = {
// 	ivan: 'person',
// 	ann: 'person',
// 	dog: 'animal',
// 	cat: 'animal',
// };

// const newArr = Object.entries(obj)
// 	.filter((item) => item[1] === 'person')
// 	.map((item) => item[0]);

// console.log(newArr);

// const films = [
// 	{
// 		name: 'Titanic',
// 		rating: 9,
// 	},
// 	{
// 		name: 'Die hard 5',
// 		rating: 5,
// 	},
// 	{
// 		name: 'Matrix',
// 		rating: 8,
// 	},
// 	{
// 		name: 'Some bad film',
// 		rating: 4,
// 	},
// ];

// function showGoodFilms(arr) {
// 	return arr.filter((elem) => elem.rating >= 8);
// }

// console.log(showGoodFilms(films));

// function showListOfFilms(arr) {
// 	return arr.reduce((acum, elem) => acum + `${elem.name}, `, '').slice(0, -2);
// }
// console.log(showListOfFilms(films));

// function setFilmsIds(arr) {
// 	arr.forEach((element, i) => {
// 		element.id = i;
// 	});
// 	return arr;
// }

// // console.log(setFilmsIds(films));

// const tranformedArray = setFilmsIds(films);

// function checkFilms(arr) {
// 	return arr.every((elem) => 'id' in elem);
// }

// console.log(checkFilms(tranformedArray));
//////////////////////////////////////////////////
// const funds = [
// 	{ amount: -1400 },
// 	{ amount: 2400 },
// 	{ amount: -1000 },
// 	{ amount: 500 },
// 	{ amount: 10400 },
// 	{ amount: -11400 },
// ];

// const getPositiveIncomeAmount = (data) => {
// 	return data.reduce((acc, elem) => {
// 		return elem.amount > 0 ? acc + elem.amount : acc;
// 	}, 0);
// };

// const getTotalIncomeAmount = (data) => {
// 	if (data.some((elem) => elem.amount < 0)) {
// 		return data.reduce((a, b) => a + b.amount, 0);
// 	} else {
// 		return getPositiveIncomeAmount(data);
// 	}
// };

// console.log(getTotalIncomeAmount(funds));
//////////////////////////////////////////////////