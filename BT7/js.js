const isCheckEvenNum = (number) => {
    if (number %2 == 0){
        return "Số chẵn";
    } else {
        return "Số lẻ";
    }
}
console.log(("Kiểm tra số chẵn hay lẻ", isCheckEvenNum(7)));

//Số nguyên tố 

const isCheckPrime = (number) => {
    if (number <=1) return "Đây không phải là số nguyên tố";

    for (let i = 2; i <=Math.sqrt(number); i++){
        if (number % i == 0) {
            return "Đây không phải số nguyên tố"
        }
    }
    return "Đây là số nguyên tố"
}

console.log(("Kiểm tra số nguyên tố", isCheckPrime(7)));