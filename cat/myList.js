var toDoList = ["learn english"," to do programming"," feed chicks"," wrest grass"];
for (var i = 0; i <= toDoList.length; i++) {
    $( ".list" ).append( "<li>" + toDoList[i] + "</li>");
}

