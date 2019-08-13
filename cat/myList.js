var toDoList = ["learn english"," to do programming"," feed chicks"," wrest grass"];
for (var i = 0; i < toDoList.length; i++) {
    $( ".list" ).append( "<li>" + toDoList[i] + "</li>");
}
var headingElement = document.getElementById("guess-button");
console.log(headingElement.innerHTML);
function clickHandler() {
   var get =  prompt("Please enter new task name");
   $(".list").append("<li>" + get + "</li>");
}
$("button").click(clickHandler);
