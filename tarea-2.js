const $botonCargar = document.querySelector("#cargar-formulario")

const $datosCargados = document.querySelector("datos-cargados")

const $saludo = document.querySelector("saludo-bienvenida")



$botonCargar.onclick = function(event) {

    event.preventDefault()
    
    const primerNombre =  document.querySelector("#primer-nombre").value

    const segundoNombre = document.querySelector("#segundo-nombre").value   
    
    const apellido = document.querySelector("#apellido").value
    
    const edad = Number(document.querySelector("#edad-usuario")).value

    $datosCargados.innerHTML = `Bienvenida ${primerNombre}`

}


