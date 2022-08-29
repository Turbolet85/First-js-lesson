// function createPhoneNumber(numbers) {
// 	let str = numbers.join('');
// 	const a = str.slice(0, 3);
// 	const b = str.slice(3, 6);
// 	const c = str.slice(6);
// 	const result = `(${a}) ${b}-${c}`;
// 	return result;
// }
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// replace proper way

// function createPhoneNumber(numbers){
// 	var format = "(xxx) xxx-xxxx";

// 	for(var i = 0; i < numbers.length; i++)
// 	{
// 	  format = format.replace('x', numbers[i]);
// 	}

// 	return format;
//   }
//////////////////////////////////////////////////
// function validatePIN(pin) {
// 	if (/^\d{6}$/.test(pin) || /^\d{4}$/.test(pin)) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// console.log(validatePIN('357.91'));

//////////////////////////////////////////////////

// function rowSumOddNumbers(n) {
// 	let firstNum = 1;
// 	let result = 0;
// 	if (n == 1) {
// 		return 1;
// 	} else {
// 		for (let i = 1; i < n; i++) {
// 			firstNum += 2 * i;
// 		}
// 		for (let k = 0; k < n; k++) {
// 			result += firstNum;
// 			firstNum = firstNum + 2;
// 		}
// 		return result;
// 	}
// }
// console.log(rowSumOddNumbers(2));

//Math.pow(n, 3)
//////////////////////////////////////////////////

// function nbYear(p0, percent, aug, p) {
// 	let pers = p0;
// 	let years = 0;
// 	while (pers < p) {
// 		pers += Math.floor(pers * (percent / 100) + aug);
// 		years++;
// 	}
// 	return years;
// }
// console.log(nbYear(1000, 2, 50, 1214));

//////////////////////////////////////////////////

// function findOutlier(integers) {
// 	let first = [];
// 	let second = [];
// 	integers.forEach((element) => {
// 		if (element % 2 === 0) {
// 			first.push(element);
// 		} else {
// 			second.push(element);
// 		}
// 	});
// 	if (first.length < second.length) {
// 		return first[0];
// 	} else {
// 		return second[0];
// 	}
// }
// console.log(findOutlier([2, 6, 8, 10, 3]));

// function findOutlier(int) {
// 	var even = int.filter((a) => a % 2 == 0);
// 	var odd = int.filter((a) => a % 2 !== 0);
// 	return even.length == 1 ? even[0] : odd[0];
// }
//////////////////////////////////////////////////

// function digitalRoot(n) {
// 	let result = 0;
// 	let arrOfNum = n.toString().split('').map((str) => Number(str));

// 	for (let i = 0; i < arrOfNum.length; i++) {
// 		result += arrOfNum[i];
// 	}

// 	while (result >= 10) {
// 		result = digitalRoot(result);
// 	}
// 	return result;
// }

//////////////////////////////////////////////////

// function persistence(num) {
// 	var numArray = num.toString().split('');
// 	let count = 0;
// 	let total;
// 	while (numArray.length > 1) {
// 		total = numArray.reduce(function (sum, currentValue) {
// 			return sum * currentValue;
// 		});
// 		count++;
// 		numArray = total.toString().split('');
// 	}
// 	return count;
// }
// console.log(persistence(999));
//////////////////////////////////////////////////

// function findNextSquare(sq) {
// 	if (Number.isInteger(Math.sqrt(sq))) {
// 		return Math.pow(Math.sqrt(sq) + 1, 2);
// 	} else {
// 		return -1;
// 	}
// }
// console.log(findNextSquare(625));

// function findNextSquare(sq) {
//     return Number.isInteger(Math.sqrt(sq)) ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;
// }
// console.log(findNextSquare(625));
//////////////////////////////////////////////////

// function getMiddle(s) {
// 	let result = '';
// 	if (s.length % 2 === 0) {
// 		result += s.slice(s.length / 2 - 1, s.length / 2 + 1);
// 	} else {
// 		result += s.slice(
// 			Math.floor(s.length / 2),
// 			Math.floor(s.length / 2) + 1
// 		);
// 	}
// 	return result;
// }
// console.log(getMiddle('testing'));

// function getMiddle(s)
// {
//   return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }
//////////////////////////////////////////////////
// function moveZeros(arr) {
//     let modArr = arr;
// 	modArr.forEach((element, i) => {
// 		if (element === 0 && typeof element == 'number') {
//             modArr.push(modArr.splice(i, 1)[0]);
// 		}
// 	});
//     return modArr;
// }
// console.log(moveZeros([9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0]));

// function moveZeros(arr) {
// 	let zeros = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		let isZero = arr[i] === 0;
// 		if (isZero) {
// 			zeros++;
// 			arr.splice(i, 1);
// 			i--;
// 		}
// 	}
// 	for (let i = 0; i < zeros; i++) {
// 		arr.push(0);
// 	}
// 	return arr;
// }
// console.log(
// 	moveZeros([9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0])
// );

// var moveZeros = function (arr) {
// 	var filtedList = arr.filter(function (num) {
// 		return num !== 0;
// 	});
// 	var zeroList = arr.filter(function (num) {
// 		return num === 0;
// 	});
// 	return filtedList.concat(zeroList);
// };

//////////////////////////////////////////////////
// function validParentheses(parens) {
// 	while (parens.includes('()')) {
// 		parens = parens.replace('()', '');
// 	}
// 	return parens.length == 0;
// }
// console.log(validParentheses('((((()))))'));

//////////////////////////////////////////////////

function fib(max) {
	let first = 1;
	let second = 1;
	let third = 2;
	let mult = 0;
	let arr = [];
	let counter = 0;

	while (mult <= max) {
		counter++;
		third = first + second;
		first = second;
		second = third;
		mult = first * second;
		arr.push(mult);
	}
	return arr[counter - 1];
}
console.log(fib(4895));
