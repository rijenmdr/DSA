const mergeSort = arr => {
    if(arr.length < 2) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

const merge = (leftArr, rightArr) => {
    let sortedArr = [];
    while(leftArr?.length && rightArr?.length) {
        if(leftArr[0] <=rightArr[0]) {
            sortedArr.push(leftArr.shift());
        } else {
            sortedArr.push(rightArr.shift());
        }
    }

    return [...sortedArr, ...leftArr, ...rightArr]
}

//Time complexity: O(nlogn)

console.log(mergeSort([3, 6, 2, 8, -2, 10, -6]))