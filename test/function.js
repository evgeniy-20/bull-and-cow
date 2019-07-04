function age(x, y) {
    age1 = x - y;
    age2 = (x - y) - 1;
    bothAge = age1 +' '+'or'+' '+ age2;
    return bothAge
}

console.log('I will be either ' + age(futureYear,birthYear)+ ' in ' + futureYear );