var bDinero = document.querySelector("#bDinero")
var bMiami = document.querySelector("#bMiami")
var bRicky = document.querySelector("#bRicky")

var iDinero = document.getElementById("dinero")
var iMiami = document.getElementById("miami")
var iRicky = document.getElementById("ricky")

function ocultar(imagen) {
    imagen.classList.toggle("oculto")
}

bDinero.addEventListener("click" , ocultar(iDinero))
bMiami.addEventListener("click" , ocultar(iMiami))
bRicky.addEventListener("click" , ocultar(iRicky))