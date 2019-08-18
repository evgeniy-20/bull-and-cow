var headingElement = document.getElementById("guess-button");
console.log(headingElement.innerHTML);
function clickHandler() {
   var get =  prompt("Please enter new task name");
   $(".list").append("<li>" + get + "</li>");
}
$("#guess-button").click(clickHandler);
var heading = document.getElementById("cleaning-button");
console.log(heading.innerHTML);
function onCleanButtonClick() {
    $(".list").empty();
}
$("#cleaning-button").click(onCleanButtonClick);
var toDoList = ["learn english"," to do programming"," feed chicks"," wrest grass"];
function DoList() {
    for (var i = 0; i < toDoList.length; i++) {
        $( ".list" ).append( "<li>" + toDoList[i] + "</li>");
    }
}
DoList();