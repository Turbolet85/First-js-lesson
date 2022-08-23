// function pow(a, b) {
// 	let result = 1;

// 	for (let i = 0; i < b; i++) {
// 		result *= a;
// 	}

// 	return result;
// }

// console.log(pow(2, 4));

// function pow(a, b) {
// 	if (b === 1) {
// 		return a;
// 	} else {
// 		return a * pow(a, b - 1);
// 	}
// }

// console.log(pow(2, 4));

// let students = {
// 	js: [
// 		{ name: 'Jophn', progress: 100 },
// 		{ name: 'Ivan', progress: 60 },
// 	],

// 	html: {
// 		basic: [
// 			{ name: 'Peter', progress: 20 },
// 			{ name: 'Ann', progress: 18 },
// 		],
// 		pro: [{ name: 'Sam', progress: 10 }],
// 	},
// };

// function getTotalProgressByiteration(data) {
// 	let total = 0;
// 	let students = 0;

// 	for (let course of Object.values(data)) {
// 		if (Array.isArray(course)) {
// 			students += course.length;

// 			for (let i = 0; i < course.length; i++) {
// 				total += course[i].progress;
// 			}
// 		} else {
// 			for (let subCourse of Object.values(course)) {
// 				students += subCourse.length;
// 				for (let j = 0; j < subCourse.length; j++) {
// 					total += subCourse[j].progress;
// 				}
// 			}
// 		}
// 	}
// 	return total / students;
// }
// console.log(getTotalProgressByiteration(students));

//////////////////////////////////////////////////

// let students = {
// 	js: [
// 		{ name: 'Jophn', progress: 100 },
// 		{ name: 'Ivan', progress: 60 },
// 	],

// 	html: {
// 		basic: [
// 			{ name: 'Peter', progress: 20 },
// 			{ name: 'Ann', progress: 18 },

// 		],
// 		pro: [{ name: 'Sam', progress: 10 }],
// 	},
// };

// function getTotalProgressByRecursion(data) {
// 	if (Array.isArray(data)) {
// 		let total = 0;

// 		for (let i = 0; i < data.length; i++) {
// 			total += data[i].progress;
// 		}

// 		return [total, data.length];
// 	} else {
// 		let total = [0, 0];

// 		for (let subData of Object.values(data)) {
// 			const subDataArr = getTotalProgressByRecursion(subData);
// 			total[0] += subDataArr[0];
// 			total[1] += subDataArr[1];
// 		}

// 		return total;
// 	}
// }

// const result = getTotalProgressByRecursion(students);

// console.log(result[0] / result[1]);

//////////////////////////////////////////////////

function getFactorial(num) {
	if (!Number.isInteger(num) || isNaN(num)) {
		return 'wrong data';
	} else if (num < 1) {
		return 1;
	} else if (num === 1) {
		return num;
	} else {
		let result = num * getFactorial(num - 1);
		return result;
	}
}

console.log(getFactorial(5.3));
