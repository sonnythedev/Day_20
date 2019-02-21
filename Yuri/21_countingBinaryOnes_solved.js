/*
    Difficulty: Tricky    

    Create a function that accepts any positive integer and returns the next highest and next lowest number that has the same number of ones in its binary representation. If either number is not possible, return null for it.

    Samples:
    1) The number 12 is 1100 in binary, so it has two 1s. The next highest number with    that many 1s is 17, which is 10001. The next lowest is 10, which is 1010.
       solution(12) == [10, 17]

    2) The number 28 is 11100 in binary, so it has three 1s. The next highest number      with that many 1s is 35, which is 100011. The next lowest is 26, which is 11010.
       solution(28) == [26, 35]
*/


function solution1(number) {
    if (number < 1) return null;

    let binary = number.toString(2).split("").filter(e => e == "1").join("");
    let max = Number.MAX_SAFE_INTEGER;
    let nextHighest = null;
    let nextLowest  = null;

    for (let i = number + 1; i < max; i++) {
        let iBinary = i.toString(2).split("0").join("");

        if (binary == iBinary) {
            nextHighest = i;
            break;
        }
    }

    for (let i = number - 1; i > 0; i--) {
        let iBinary = i.toString(2).split("0").join("");

        if (binary == iBinary) {
            nextLowest = i;
            break;
        }
    }

    return [nextLowest, nextHighest];
}

console.assert(solution1(12).join("") == [10, 17].join(""), `solution1a() failed!`);
console.assert(solution1(28).join("") == [26, 35].join(""), `solution1a() failed!`);


function solution2(number) {    
    if (number < 1) return null;

    function ones(num) {
        return num.toString(2).split("").filter(e => e == "1").join("")
    }

    let binary = ones(number);
    let max = Number.MAX_SAFE_INTEGER;
    let nextHighest = null;
    let nextLowest  = null;

    for (let i = number + 1; i < max; i++) {
        let iBinary = ones(i);

        if (binary == iBinary) {
            nextHighest = i;
            break;
        }
    }

    for (let i = number - 1; i > 0; i--) {
        let iBinary = ones(i);

        if (binary == iBinary) {
            nextLowest = i;
            break;
        }
    }

    return [nextLowest, nextHighest];
}

console.assert(solution1(12).join("") == [10, 17].join(""), `solution1a() failed!`);
console.assert(solution1(28).join("") == [26, 35].join(""), `solution1a() failed!`);


/*
************************* PERFORMANCE TESTS *************************
*/

// import numbers for test
const Numbers = require("./numbers");
const numbers = new Numbers();
const testNum = numbers.generatePrime(100*1000);


// test solution1()
let startTime  = new Date().getTime();

for (let n of testNum) solution1(n);

let finishTime = new Date().getTime();
let performance = (finishTime - startTime) / 1000;
console.log(`Performance of solution1() is ${ performance } sec`);

// test solution2()
startTime  = new Date().getTime();

for (let n of testNum) solution2(n);

finishTime = new Date().getTime();
performance = (finishTime - startTime) / 1000;
console.log(`Performance of solution2() is ${ performance } sec`);


/*
************************* PERFORMANCE RESULTS *************************

Performance of solution1() is 0.348 sec
Performance of solution2() is 0.281 sec
*/