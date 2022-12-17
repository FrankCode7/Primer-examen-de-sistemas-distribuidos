/*
Se desea cambiar un cheque bancario en las siguientes
denominaciones, Cheques de 100, cheques de 10, monedas de 5 y monedas de un
sol. Escribir un algoritmo que calcule el número mínimo de cheques y monedas
para cambiar el cheque bancario

*/

let cien=0;
let diez=0;
let cinco=0
let uno=0;
let resto=0;
let cantidad=0;

cantidad=parseInt(prompt("Ingrese la cantidad del cheque"))

if(cantidad>=1){

 cien=cantidad/100
 resto=cantidad%100

 diez=resto/10
 resto=resto%10

 cinco=resto/5
 resto=resto%5

 uno=resto/1

 console.log("Desgloce")
 console.log("Billetes de cien "+Math.floor(cien))
 console.log("Billetes de diez "+Math.floor(diez))
 console.log("Monedas de cinco "+ Math.floor(cinco))
 console.log("Monedad de uno "+uno)
}
else{
  console.log("La cantidad que ingresaste es invalida")
}