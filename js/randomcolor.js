function getColor() { 
    return "hsl(" + 360 * Math.random() + ','
    + 50 + '%,'
    + 95 + '%)'
}

var x = document.getElementsByClassName("block");

for (var i=0; i<x.length; i++) {
    x[i].style.borderColor = getColor();
}