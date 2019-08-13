var clickHandler = function () {
    var value = $("#guess").val();
    if (value.length != 4) {
        alert("mistake");
    } else {
        $("#result").append(value);
        var numberOne = Math.floor(Math.random() * 9);
        var numberTwo = Math.floor(Math.random() * 9);
        var numberThree = Math.floor(Math.random() * 9);
        var numberFour = Math.floor(Math.random() * 9);
        var numbers = [numberOne, numberTwo, numberThree, numberFour];
        var number = numbers.join();
        alert(number);
    }
    function result(a, b) {
        var countBulls = 0;
        var countCows = 0;
        for (var i = 0; i < a.length; i++) {
            if (a[i] === b[i]) {
                countBulls++;
            } else {
                if (b.includes(a[i])) {
                    countCows++;
                }
            }
        }
        return `Bulls ${countBulls}, Cows ${countCows}`;
    }
    alert(result("1234", "1582"));
};
$("#guess-button").click(clickHandler);

