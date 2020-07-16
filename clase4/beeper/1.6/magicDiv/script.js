var divOculto = document.querySelector("#magic")
var imagen = document.querySelector("img")

function ocultar() {
    imagen.classList.add("ocultar")
}

function mostrar() {
    imagen.classList.remove("ocultar")
}

divOculto.addEventListener("mouseover" , ocultar)
divOculto.addEventListener("mouseleave" , mostrar)
