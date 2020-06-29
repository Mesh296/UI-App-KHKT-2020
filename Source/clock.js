var clock = document.getElementById('clock');
var hour = document.getElementById('hour');
function showTime() {
    var date = new Date();
    var h = date.getHours();
    if (h<=9) h = "0" + h;
    var m = date.getMinutes();
    if (m<=9) m = "0" + m;
    var s = date.getSeconds();
    if (s<=9) s = "0" + s;

    var time = h + ":" + m + ":" + s;
    clock.textContent = time;
}
setInterval(() => showTime(), 1000);
