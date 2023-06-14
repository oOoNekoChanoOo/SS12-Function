let year = parseInt(prompt("Nhập vào một năm"));

let centuryFormYear = years => {
    return Math.ceil(years / 100);
}
console.log("Số năm bạn vừa nhập thuộc thế kỷ ",centuryFormYear(year));