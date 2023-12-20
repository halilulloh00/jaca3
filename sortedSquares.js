function ara(arr, nam) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= nam) {
            return i
        }
    }
    return arr.length
}
console.log(ara([1, 2, 3, 4]))