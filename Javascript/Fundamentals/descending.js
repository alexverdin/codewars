/**
 * 7 Kyu
 * Your task is to make a function that can take any non-negative integer as an argument
 * and return it with its digits in descending order.
 * Essentially, rearrange the digits to create the highest possible number.
 * Examples:
 * Input: 42145 Output: 54421
 * Input: 145263 Output: 654321
 * Input: 123456789 Output: 987654321
 */

// My version
const descendingOrder = (num) => {
    if(typeof(num) === "number" && num >=0){
        const digitArr = num.toString().split('');
        const newNum = digitArr.sort().reverse().join('');
        return newNum;
    }
    throw new Error('Enter a non-negative number');
};

// Optimized version
const newDescendingOrder = (num) => {
    if(typeof(num) === "number" && num >=0){

        return +num.toString().split('').sort().reverse().join(''); // '+' character returns a number
    }
    throw new Error('Enter a non-negative number');
};

const num = 953182;
console.log(newDescendingOrder(num));