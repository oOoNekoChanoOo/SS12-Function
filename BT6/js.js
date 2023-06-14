function findMaxNum(arr) {
    if (arr.length == 0) return;
    
    let maxNum = arr[0];
    for (let i = 1; i <arr.length; i++){
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    return maxNum;
}

console.log(findMaxNum([4,5,6,7,8,9]));