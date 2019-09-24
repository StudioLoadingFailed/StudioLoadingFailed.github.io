function showDate()
{
    elem = document.getElementById("Date");
    var today = new Date();
    var date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
    elem.innerText = date;
}
setInterval(showDate,1000);