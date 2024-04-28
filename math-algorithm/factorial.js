const factorial = (n) => {
    let fact = 1;

    for (i = 1; i <= n; i++) {
        fact = fact * i;
    }

    return fact
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));

//Time Complexity
//O(n)