const bubbleSorting = arr => {
    for (i = 0; i < arr.length; i++) {
        for(j = i + 1; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

//Time complexity: O(n^2)

console.log(bubbleSorting([3, 6, 2, 8, -2, 10, -6]))