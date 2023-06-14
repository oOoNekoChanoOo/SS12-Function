let capitalizeString = (word) => {
    let firstLetter = word.charAt(0).toUpperCase();
    let otherLetter = word.slice(1).toLowerCase();
    return firstLetter + otherLetter;
}
console.log(capitalizeString("rIkKEi"));