const quickSort = arr => {
    if (arr.length < 2) {
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let leftArr = [];
    let rightArr = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (pivot > arr[i]) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

//Worst case complexity: O(n^2)
//Average case complexity: O(nlogn)

console.log(quickSort([3, 6, 2, 8, -2, 10, -6]))
