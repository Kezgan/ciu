var color = document.querySelector("input")

function cambiar(e) {
    if(e.keyCode == 13) {
        color.style.backgroundColor = color.value
    } else if (e.keyCode == 8) {
        color.style.backgroundColor = "white"
    }
}

color.addEventListener("keydown" , cambiar)