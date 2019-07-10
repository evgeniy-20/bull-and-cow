var array = [1, 2, 5, 8, 13, 16];
var random = 44;
var result = array.indexOf(random)!== -1//тут нужно написать что-то чтобы result был false
console.log(result);
var currentAge = 22;
var maximumAge = 95;
var differenceAge = maximumAge - currentAge;
console.log(differenceAge);
var amountPerDay = 10;
var daysAYear = 365;
var perYear = amountPerDay * daysAYear;
console.log(perYear);
var lifeOfTheYear = perYear * differenceAge;
console.log(lifeOfTheYear);
var resultToTheScreen  = "You will need " + lifeOfTheYear  + " to last you until the ripe old age of " + maximumAge;
console.log(resultToTheScreen);



if (i % 2 === 0) {
    console.log(i + ' is even.');
} else {
    console.log(i + ' is odd.');
}