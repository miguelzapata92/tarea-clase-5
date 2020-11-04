const $arrayLi = document.querySelectorAll(".numerosLi")

let arrayNumeros = []

function llenarArray($arrayLi) {
    for (i = 0; i < $arrayLi.length; i++) {
        arrayNumeros.push(Number($arrayLi[i].innerText))
        
      
}
}

llenarArray($arrayLi)
console.log(arrayNumeros)
