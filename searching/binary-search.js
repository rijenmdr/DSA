const binarySearch = (arr, t) => {
    let leftIndex = 0;
    let rightIndex = arr?.length - 1;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

        if (arr[middleIndex] === t) return middleIndex;

        if (arr[middleIndex] < t) {
            leftIndex = middleIndex + 1;
        } else {
            rightIndex = middleIndex - 1;
        }
    }

    return -1
}

//Time complexity: O(logn)

console.log(binarySearch([-5, 2, 4, 10, 88], 2));
console.log(binarySearch([-5, 2, 4, 10, 88], 4));
console.log(binarySearch([-5, 2, 4, 10, 88], 1));