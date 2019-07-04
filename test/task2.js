function getRandomNumber() {
    var numbers = [];
    while (numbers.length < 4) {
        var random  = getRandomDigit();
            if (random > 5) {
                numbers.push(random);
        }
    }
    return numbers.join("");
    // должна возвращать строку из 4х цифр
}
console.log(getRandomNumber());
function getRandomDigit() {
    return Math.floor(Math.random() * 9);
    // должна возвращать одну случайную цифру
}
console.log(getRandomDigit());