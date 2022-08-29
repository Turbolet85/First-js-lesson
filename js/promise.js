'use strict';

// console.log('Request data...');

// const req = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log('Data preparation...');

// 		const product = {
// 			name: 'TV',
// 			price: 2000,
// 		};

// 		resolve(product);
// 	}, 2000);
// })
// 	.then((product) => {
// 		return new Promise((resolve, reject) => {
// 			setTimeout(() => {
// 				product.status = 'order';
// 				resolve(product);
// 			}, 2000);
// 		});
// 	})
// 	.then((data) => {
// 		data.modify = true;
// 		return data;
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch(() => {
// 		console.error('Error');
// 	})
// 	.finally(() => {
// 		console.log('Finally');
// 	});

const test = (time) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(), time);
	});
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));
// Promise.all([test(1000), test(2000)]).then(() => {
// 	console.log('All');
// });
Promise.race([test(1000), test(2000)]).then(() => console.log('First done'));
