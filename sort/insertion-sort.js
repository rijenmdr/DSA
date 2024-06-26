const insertionSort = arr => {
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j];
            j = j - 1
        }
        arr[j + 1] = numberToInsert
    }
    return arr;
}

//Time complexity: O(n^2)

console.log(insertionSort([3, 6, 2, 8, -2, 10, -6]))