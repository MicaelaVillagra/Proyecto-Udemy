let ubicacionPrincipal = window.pageYOffset;

window.addEventListener("scroll", function() {
    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal>=desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px";
    }
    ubicacionPrincipal= desplazamientoActual;
})

//Menu

let enlacesHeader =document.querySelectorAll(".enlaces-hrader")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    enlacesHeader.classList.toggle("menudos")
})