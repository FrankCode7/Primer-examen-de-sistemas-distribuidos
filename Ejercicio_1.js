// Escribir un algoritmo que realice div y mod 
function Operacion(parametro1,parametro2){
  let division=parametro1/parametro2
  let resto=parametro1 % parametro2
  console.log("La division es: "+division +" y el resto es: "+resto)
}

let a=parseInt(prompt("ingrese un numero"))
let b=parseInt(prompt("Ingrese otro numero"))

Operacion(a,b)

  