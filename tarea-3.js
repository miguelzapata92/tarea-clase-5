const $botonCargar = document.querySelector("#cargar-tiempo")
const $resultado = document.querySelector("#resultado")

const $horasVideo = document.querySelectorAll(".horas-video")
const $minutosVideo = document.querySelectorAll(".minutos-video")
const $segundosVideo = document.querySelectorAll(".segundos-video")

console.log($horasVideo)
console.log($minutosVideo)
console.log($segundosVideo)

function calcularTiempoTotal() {
     let totalDeHoras = 0
     let totalDeMinutos = 0
     let totalDeSegundos = 0

     for(i = 0; i < $horasVideo.length; i++) {
         totalDeHoras += Number($horasVideo[i].value) 
     }
   

     for(i = 0; i < $minutosVideo.length; i++) {
        totalDeMinutos += Number($minutosVideo[i].value) 
    }
   

    for(i = 0; i < $segundosVideo.length; i++) {
        totalDeSegundos += Number($segundosVideo[i].value) 
    }
    

$resultado.innerHTML = `La duración conjunta de todos los videos fue de ${totalDeHoras} horas, 
${totalDeMinutos} minutos y ${totalDeSegundos} segundos.`

}

$botonCargar.onclick = function () {
	
    calcularTiempoTotal();

    return false
}