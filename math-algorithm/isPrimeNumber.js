// const isPrimeNumber = (n) => {
//     for (i = 2; i < n; i++) {
//         if(n % i === 0) return false;
//     }

//     return true;
// }

//Time Complexity
//O(n)

const isPrimeNumberOptimal = (n) => {
    for (i = 2; i <= Math.sqrt(n); i++) {
        if(n % i === 0) return false;
    }

    return true;
}

//Time Complexity
//O(sqrt(n))

console.log(isPrimeNumberOptimal(2))
console.log(isPrimeNumberOptimal(3))
console.log(isPrimeNumberOptimal(4))
console.log(isPrimeNumberOptimal(5))
console.log(isPrimeNumberOptimal(9))

