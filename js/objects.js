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
