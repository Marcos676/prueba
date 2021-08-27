let numeros = [ 7, 3 ,6, 56 ]

let masCinco = numeros.map( (numero) => numero * 3 )


 let menoresADiez = numeros.filter( (numero) => {
    numero > 100000
 })

menoresADiez ? console.log(menoresADiez) : null

console.log(numeros);

console.log(menoresADiez)

console.log("hola")