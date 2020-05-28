var body = document.querySelector("body")
var imagen = document.querySelector("img")

var mover = function(e) {
    console.log(imagen.style.top = e.clientY.toString() + "px")
    console.log(imagen.style.left = e.clientX.toString() + "px")
}

body.addEventListener("mousemove" , mover)