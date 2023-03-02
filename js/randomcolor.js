function getColor() { 
    return "hsl(" + 360 * Math.random() + ','
    + 20 + '%,'
    + 30 + '%)'
}

var x = document.getElementsByClassName("block-color");

for (var i=0; i<x.length; i++) {
    x[i].style.borderColor = getColor();
}