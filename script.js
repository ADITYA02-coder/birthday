var birthday = new Date("April 11, 2026 00:00:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();
    var distance = birthday - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Happy Birthday Sweety ❤️";
        document.getElementById("enterBtn").disabled = false;
    }

}, 1000);

function enterSite() {
    window.location.href = "cake.html";
}