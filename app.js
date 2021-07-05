let numeros = [ 7, 3, 5, 7, 3, 3, 4, 356 ,6, 56 ]

let masCinco = numeros.map( (numero) => numero * 3 )


 let menoresADiez = numeros.filter( (numero) => {
    numero > 100000
 })
console.log(menoresADiez)
menoresADiez ? console.log(menoresADiez) : null

console.log(numeros);

