const cartesianProduct = (a, b) => {
    let c = []
    for (i = 0; i < a.length; i++) {
        for (j = 0; j < b.length; j++) {
            c.push([a[i], b[j]])
        }
    }
    return c;
}

//Time complexity: O(mn)

console.log(cartesianProduct([1, 2], [2, 4]))