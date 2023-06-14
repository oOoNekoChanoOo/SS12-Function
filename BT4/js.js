function cutStr (str) {
    if(str.length > 15){
        str.substring(0,10)+ "...";
    }
//sử dụng substring là một hàm có sẵn của JS dành cho dữ liệu kiểu string
    return str;
}
console.log("Long String",cutStr("Rikkei Academy Pro Vip"));
console.log(("Short String", cutStr("Yub Bro")));

