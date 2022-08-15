// functions
let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 30;

}
showFirstMessage('Hello world');

console.log(num);

function calcl(a,b) {
    return a + b;
}

console.log(calcl(5, 3));
console.log(calcl(6, 7));
console.log(calcl(8, 3));

function ret() {
    let num = 50;
    return num;
}
console.log(ret());

const logger = function() {
    console.log('Hello');
};

logger();


const calc = (a, b) => a + b;


const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;


function convert (amount, curr) {
    return curr * amount;
}

convert(500, eurCurr);

function promotion(result) {
    console.log(result * discount);
}

const res = convert(500, eurCurr);
promotion(res);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) {
            return;
        }
    }
    console.log('done');
}

test();

function doNothing() {}
console.log(doNothing() === undefined);