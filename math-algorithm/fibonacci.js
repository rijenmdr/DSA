const fibonacci = (n) => {
    let fib = [0, 1];
    for (i = 2; i < n; i++) {
        fib[i] = fib[i - 2] + fib[i - 1]
    }
    return fib
}

// const fibonacci = (n) => {
//     let a = 0;
//     let b = 1;
//     let arr = [];

//     if(n === 1) return [a]
//     for (i = 0; i < n; i++) {
//         let c = a + b;
//         arr.push(a);
//         a = b;
//         b = c; 
//     }
//     return arr
// }

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));

//Time Complexity
//O(n)