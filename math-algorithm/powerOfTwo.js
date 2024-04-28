// const powerOfTwo = (n) => {
//     if (n < 1) {
//         return false;
//     }
//     for (i = 0; i < n; i++) {
//         if (Math.pow(2, i) === n) return true;
//     }
//     return false;
// }
//Time complexity: O(n)



// const powerOfTwo = n => {
//     if (n < 1) return false;

//     while (n > 1) {
//         if (n % 2 !== 0) return false;
//         n = n / 2;
//     }

//     return true;
// }

//Time complexity: O(logn)


const powerOfTwo = n => {
    if(n < 1) return false;

    return n & (n - 1) === 0
}
//Time complexity: O(1)

console.log(powerOfTwo(1));
console.log(powerOfTwo(2));
console.log(powerOfTwo(5));