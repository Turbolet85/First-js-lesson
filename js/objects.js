'use strict';

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };

// // delete options.height;

// // console.log(options);

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]){
//             console.log(`Property ${i} have value ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Property ${key} have value ${options[key]}`);
//     }
// }

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('Test');
//     }
// };

// // options.makeTest();

// // console.log(Object.keys(options).length);

// const {border, bg} = options.colors;

// console.log(border);

//////////////////////////////////////////////////

// const personalPlanPeter = {
// 	name: 'Peter',
// 	age: '29',
// 	skills: {
// 		languages: ['ru', 'eng'],
// 		programmingLangs: {
// 			js: '20%',
// 			php: '10%',
// 			ruby: '30%',
// 		},
// 		exp: '1 month',
// 	},
// 	showAgeAndLangs: function (plan) {
// 		const { age } = plan;
// 		const { languages } = plan.skills;

// 		let str = `Мне ${age} и я владею языками: `;

// 		languages.forEach((lang) => {
// 			str += `${lang.toUpperCase()} `;
// 		});
// 		return str;
// 	},
// };
// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// function showExperience(plan) {
//     const {exp} = plan.skills;
//     return exp;
// }

// // console.log(showExperience(personalPlanPeter));

//////////////////////////////////////////////////

// function showProgrammingLangs(plan) {
// 	let result = '';
// 	const { programmingLangs } = plan.skills;
// 	for (let key in programmingLangs) {
// 		if (key === '') {
// 			return '';
// 		} else {
// 			result += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
// 		}
// 	}
// 	return result;
// }

// console.log(showProgrammingLangs(personalPlanPeter));

/////////////////////////////////////////////////

// let str = 'some';
// let strObj = new String(str);

// console.log(typeof str);
// console.log(typeof strObj);

// console.dir([1, 2, 3]);

//////////////////////////////////////////////////

// const solder = {
// 	health: 400,
// 	armor: 100,
// 	sayHello: function () {
// 		console.log('Hello');
// 	},
// };
// const john = {
// 	health: 100,
// };
// john.__proto__ = solder;
// console.log(john.armor);

// Object.setPrototypeOf(john, solder);
// const john = Object.create(solder);

// john.sayHello();

//////////////////////////////////////////////////

// const shoppingMallData = {
// 	shops: [
// 		{ width: 10, length: 5 },
// 		{ width: 15, length: 7 },
// 		{ width: 20, length: 5 },
// 		{ width: 8, length: 10 },
// 	],
// 	height: 5,
// 	moneyPer1m3: 30,
// 	budget: 50000,
// };

// function isBudgetEnough(data) {
// 	let square = 0;
// 	let volume = 0;
// 	data.shops.forEach((shop) => {
// 		square += shop.width * shop.length;
// 	});

// 	volume = square * data.height;
// 	if (volume * data.moneyPer1m3 > data.budget) {
// 		return 'Бюджета недостаточно';
// 	} else {
// 		return 'Бюджета достаточно';
// 	}
// }
// console.log(isBudgetEnough(shoppingMallData));

//////////////////////////////////////////////////

// const restorantData = {
// 	menu: [
// 		{
// 			name: 'Salad Caesar',
// 			price: '14$',
// 		},
// 		{
// 			name: 'Pizza Diavola',
// 			price: '9$',
// 		},
// 		{
// 			name: 'Beefsteak',
// 			price: '17$',
// 		},
// 		{
// 			name: 'Napoleon',
// 			price: '7$',
// 		},
// 	],
// 	waitors: [
// 		{ name: 'Alice', age: 22 },
// 		{ name: 'John', age: 24 },
// 	],
// 	averageLunchPrice: '20$',
// 	openNow: true,
// };

// function isOpen(prop) {
// 	let answer = '';
// 	prop ? (answer = 'Открыто') : (answer = 'Закрыто');

// 	return answer;
// }

// console.log(isOpen(restorantData.openNow));

// function isAverageLunchPriceTrue(fDish, sDish, average) {
// 	if (
// 		+fDish.price.slice(0, -1) + +sDish.price.slice(0, -1) <
// 		+average.slice(0, -1)
// 	) {
// 		return 'Цена ниже средней';
// 	} else {
// 		return 'Цена выше средней';
// 	}
// }

// console.log(
// 	isAverageLunchPriceTrue(
// 		restorantData.menu[0],
// 		restorantData.menu[1],
// 		restorantData.averageLunchPrice
// 	)
// );
// function transferWaitors(data) {
// 	const copy = JSON.parse(JSON.stringify(data));
// 	copy.waitors[0] = { name: 'Mike', age: 32 };
// 	return copy;
// }

// transferWaitors(restorantData);

//////////////////////////////////////////////////
// important object methods/ get keys values and pairs as array

// Object.keys
// Object.values
// Object.entries

//////////////////////////////////////////////////

// const salaries = {
// 	John: 500,
// 	Ivan: 1000,
// 	Anna: 5000,
// 	sayHello: function () {
// 		console.log('Hello');
// 	},
// };

// salaries[Symbol.iterator] = function () {
// 	return {
// 		current: this.John,
// 		last: this.Anna,
// 		next() {
// 			if (this.current < this.last) {
// 				this.current += 500;
// 				return { done: false, value: this.current };
// 			} else {
// 				return { done: true };
// 			}
// 		},
// 	};
// };

// for (const res of salaries) {
// 	console.log(res);
// }
//////////////////////////////////////////////////

// const shops = [{ rise: 500 }, { oil: 200 }, { bread: 50 }];
// const budget = [5000, 15000, 20000];

// const map = new Map([[{ paper: 400 }, 8000]]);

// map.set(shops[0], 5000);
// map.set(shops[1], 15000);
// map.set(shops[2], 25000);

// shops.forEach((shop, i) => {
// 	map.set(shop, budget[i]);
// });

// console.log(map);
// console.log(map.get(shops[0]));
// console.log(map.has(shops[0]));
// map.delete(key);
// map.clear();
// map.size();
// map.keys();

// const goods = [];
// for (let shop of map.keys()) {
// 	goods.push(Object.keys(shop)[0]);
// }
// console.log(goods);

// for (let price of map.values()) {
// 	console.log(price);
// }

// for (let price of map.entries()) {
// 	console.log(price);
// }

// for (let [shop, price] of map.entries()) {
// 	console.log(price, shop);
// }

// map.forEach((value, key, map)=> {
// 	console.log(key, value);
// });
//////////////////////////////////////////////////
// const restorantData = {
// 	menu: [
// 		{
// 			name: 'Salad Caesar',
// 			price: '14$',
// 		},
// 		{
// 			name: 'Pizza Diavola',
// 			price: '9$',
// 		},
// 		{
// 			name: 'Beefsteak',
// 			price: '17$',
// 		},
// 		{
// 			name: 'Napoleon',
// 			price: '7$',
// 		},
// 	],
// 	waitors: [
// 		{ name: 'Alice', age: 22 },
// 		{ name: 'John', age: 24 },
// 	],
// 	averageLunchPrice: '20$',
// 	openNow: true,
// };

// const restrauntMap = new Map(Object.entries(restorantData));
// // console.log(restrauntMap);

// const newUserObj = Object.fromEntries(restrauntMap);
// console.log(newUserObj);

//////////////////////////////////////////////////

// const arr = [1, 1, 2, 2, 3, 3, 4, 5, 6, 6, 2, 3];
// const set = new Set(arr);
// console.log(set);

// function unique(arr) {
// 	return Array.from(new Set(arr));
// }
// console.log(unique(arr));
//////////////////////////////////////////////////

// function amountOfPages(summary) {
// 	let i = 0;
// 	let str = '';
// 	while (str.length < summary) {
// 		i++;
// 		str = str + i;
// 	}
// 	return i;
// }
// console.log(amountOfPages(1095));

// function isPangram(str) {
// 	return new Set(str.split(' ').join('').toLowerCase().split('')).size == 26;
// }
// console.log(isPangram('The quick brown fox jumps over the lazy dog'));

// function deepCount(a) {
// 	let result = 0;
// 	a.forEach((element) => {
// 		result++;
// 		if (Array.isArray(element)) {
// 			result += deepCount(element);
// 		}
// 	});
// 	return result;
// }

// console.log(deepCount(["1", 5, "3", ["10"]]));
