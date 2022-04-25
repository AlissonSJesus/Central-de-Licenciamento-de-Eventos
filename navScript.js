
//Menu Slim
var largura = window.document.body.clientWidth;
if (largura <= 1132) {
    document.querySelector("#menu").style.display = "none";
    document.querySelector("#dropLink").style.display = "block";
} else {
    document.querySelector("#menu").style.display = "block";
    document.querySelector("#dropLink").style.display = "none";
}

window.addEventListener("resize", function () {
    if (window.innerWidth <= 1132) {
        document.querySelector("#menu").style.display = "none";
        document.querySelector("#dropLink").style.display = "block";
    } else {
        document.querySelector("#menu").style.display = "block";
        document.querySelector("#dropLink").style.display = "none";
    }
});

//Dropdown menu
window.document.querySelector("#dropLink").addEventListener("click", function () {
    var display = document.querySelector("#menu2").style.display;
    
    if (display == "none"){
        document.querySelector("#menu2").style.display = "block";
    }else if(display == "block"){
        document.querySelector("#menu2").style.display = "none";
    }
});

