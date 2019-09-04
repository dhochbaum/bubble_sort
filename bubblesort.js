
const sort = {};
sort.bubbleSort = function (arr) {
    if (arr.length < 2) {
        return arr;
    } 
    for (let j = arr.length; j > 0; j--) {
        for (let i = 1; i < j; i++) {
            arr = this.swap(arr, i);
        }
    }
    return arr;
}

sort.swap = function (arr, i) {
    if (arr[i] < arr[i - 1]) {
        let x = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = x;
    }
    return arr;
}