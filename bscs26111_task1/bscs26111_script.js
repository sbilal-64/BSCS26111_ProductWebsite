function popup(){
    alert("Welcome to Prism Tech!");
}
function year () {
    document.getElementById("year").innerHTML = new Date().getFullYear();
}

window.onload = function() {
    popup();
    year();
}


function checkStock(id,status){
    document.getElementById(id).innerHTML = status;
}