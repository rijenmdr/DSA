const linearSearch = (arr, t) => {
    for (i = 0; i < arr.length; i++) {
        if(arr[i] === t) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([20,21,78], 78));
console.log(linearSearch([20,21,78], 7));

//Time complexity: O(n)