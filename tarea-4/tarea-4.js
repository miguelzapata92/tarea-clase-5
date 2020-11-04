const $arrayLi = document.querySelectorAll(".numerosLi")

let arrayNumeros = []

function llenarArray($arrayLi) {
    for (i = 0; i < $arrayLi.length; i++) {
        arrayNumeros.push(Number($arrayLi[i].innerText))
        
      
}
}

llenarArray($arrayLi)
console.log(arrayNumeros)

let $numeroMasGrande = Math.max(...arrayNumeros)

resultado1 = document.querySelector("#numero-grande")

resultado1.innerText = $numeroMasGrande


let $numeroChico = Math.min(...arrayNumeros)

resultado2 = document.querySelector("#numero-chico")

resultado2.innerText = $numeroChico

totalDeNumeros = 0

for(i = 0; i < arrayNumeros.length; i++) {
    totalDeNumeros += arrayNumeros[i]
}

let promedio = totalDeNumeros/arrayNumeros.length

resultado3 = document.querySelector("#promedio")

resultado3.innerText = promedio



