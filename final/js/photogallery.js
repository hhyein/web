var i = 0;
var img = document.getElementsByClassName("img");
function left(){
    if (i == 0){
        i = 9;
    }
    i--;
    document.getElementById("name").innerHTML = img[i].alt;
    document.getElementById("image").style.backgroundImage = url("img[i].src");
}

function right(){
    if (i == 8){
        i = -1;
    }
    i++;
    document.getElementById("name").innerHTML = img[i].alt;
    document.getElementById("image").style.backgroundImage = "url(img[i].src)";
}
