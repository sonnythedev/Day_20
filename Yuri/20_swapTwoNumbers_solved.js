/*
    Difficulty: Easy    

    Swap two positive variable integers, a and b, without using a temporary variable.

    Before running your code a should be 1 and b should be 2; afterwards, b should be 1 and a should be 2.
    let a = 1;
    let b = 2;
    solution
    a == 2 == true
    b == 1 == true
*/

let a = 1;
let b = 2;

// solution1
a = a + b;
b = a - b;
a = a - b;

console.assert(a == 2 == true, `solutio1a() failed!`);
console.assert(b == 1 == true, `solutio1b() failed!`);


a = 1;
b = 2;

// solution2
a = a ^ b;
b = a ^ b;
a = a ^ b;

console.assert(a == 2 == true, `solutio2a() failed!`);
console.assert(b == 1 == true, `solutio2b() failed!`);


a = 1;
b = 2;

// solution3
[a, b] = [b, a];

console.assert(a == 2 == true, `solutio3a() failed!`);
console.assert(b == 1 == true, `solutio3b() failed!`);


a = 1;
b = 2;

// solution4
a = b + (b = a, 0);

console.assert(a == 2 == true, `solutio4a() failed!`);
console.assert(b == 1 == true, `solutio4b() failed!`);