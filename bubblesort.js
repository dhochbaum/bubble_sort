
const sort = {};
compare = function (a, b) {
    return a < b;
}
sort.bubbleSort = function (arr, comparer = compare) {
    if (arr.length < 2) {
        return arr;
    } 
    for (let j = arr.length; j > 0; j--) {
        for (let i = 1; i < j; i++) {
            arr = this.swap(arr, i, comparer);
        }
    }
    return arr;
}

sort.swap = function (arr, i, comparer) {
    if (comparer(arr[i], arr[i - 1])) {
        let x = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = x;
    }
    return arr;
}

