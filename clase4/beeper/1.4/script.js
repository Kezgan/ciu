var ps = document.querySelectorAll("p")

var cResaltar = function() {
    this.classList.toggle("resaltado")
}

for(var i = 0 ; i < ps.length ; i++) {
    ps[i].addEventListener("click" , cResaltar)
}