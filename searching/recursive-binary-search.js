const recursiveBinaryArray = (arr, t) => {
    return search(arr, t, 0, arr.length - 1);
}

const search = (arr, t, leftIndex, rightIndex) => {
    if (leftIndex > rightIndex) return -1;

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if(arr[middleIndex] === t) return middleIndex;

    if(arr[middleIndex] > t) return search(arr, t, leftIndex, middleIndex - 1);

    if(arr[middleIndex] < t) return search(arr, t, middleIndex + 1, rightIndex);
}

//Time complexity: O(logn)

console.log(recursiveBinaryArray([-5, 2, 4, 10, 88], 2));
console.log(recursiveBinaryArray([-5, 2, 4, 10, 88], 4));
console.log(recursiveBinaryArray([-5, 2, 4, 10, 88], 10));