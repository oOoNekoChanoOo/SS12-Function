let value = [];
let arrLength = Number(prompt("Nhập vào độ dài mảng"));
for (let index = 0; index < arrLength; index++) {
  value[index] = Number(prompt("Nhập vào giá trị số"));
}
console.log(value);

function average(value) {
  let sum = 0;
  for (let index = 0; index < value.length; index++) {
    sum += value[index];
    averageValue = sum / arrLength;
  }
  return averageValue;
}
let result = average(value);
console.log("Giá trị trung bình là", result);
