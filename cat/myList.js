var toDoList = ["learn english"," to do programming"," feed chicks"," wrest grass"];
for (var i = 0; i < toDoList.length; i++) {
    $( ".list" ).append( "<li>" + toDoList[i] + "</li>");
}
var headingElement = document.getElementById("guess-button");
console.log(headingElement.innerHTML);
function clickHandler() {
    prompt("Please enter new task name");
}
$("button").click(clickHandler);
