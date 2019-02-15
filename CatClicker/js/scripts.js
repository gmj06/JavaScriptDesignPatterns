// Cat Clicker

var elem = document.getElementById("cat-img");

var clickCount = 0
elem.addEventListener("click", function(){
    ++clickCount;
    document.getElementById("cat-click-count").innerHTML = clickCount;
}, false);