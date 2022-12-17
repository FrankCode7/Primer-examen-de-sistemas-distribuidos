/*
En una competencia ciclística de tres vueltas a la laguna de Urcos. Se registro el
tiempo realizado por uno de los competidores en HH:MM:SS. Escribir un algoritmo
que determine el tiempo promedio por vuelta que realizo.
*/


// declaramos las variables que vamos a utilizar
let vuelta1=[]
let  vuelta2=[]
 let vuelta3=[]

 let horas
 let minutos
 let segundos

 // Creamos un ciclo donde me pida los datos de los tiempos que demora el ciclista en dar una vuelta
for(let i=1;i<4;i++){

    if(i==1){
        console.log("Ingrese los datos de vuelta "+i)

         horas=parseFloat(prompt("ingrese las horas que demoro en la vuelta "+i))
         minutos=parseFloat(prompt("Ingrese los minutos que demoro en la vuelta "+i))
         segundos=parseFloat(prompt("ingrese los segundos que demoro en la vuelta "+i))
        
        vuelta1=[horas,minutos,segundos]
        continue
    }
    else if(i==2){
        console.log("Ingrese los datos de vuelta "+i)
        horas=parseFloat(prompt("ingrese las horas que demoro en la vuelta "+i))
        minutos=parseFloat(prompt("Ingrese los minutos que demoro en la vuelta "+i))
        segundos=parseFloat(prompt("ingrese los segundos que demoro en la vuelta "+i))
        vuelta2=[horas,minutos,segundos]
        continue

    }
    else{
        console.log("Ingrese los datos de vuelta "+i)
        horas=parseFloat(prompt("ingrese las horas que demoro en la vuelta "+i))
        minutos=parseFloat(prompt("Ingrese los minutos que demoro en la vuelta "+i))
        segundos=parseFloat(prompt("ingrese los segundos que demoro en la vuelta "+i))
        vuelta3=[horas,minutos,segundos]
    }
}

// declaramos variables para calcular los tiempos en segundos
let Sumatotal
let horasSegundos
let minutosSegundos
let segundosS
// creamos un ciclo que me ayude a cualcular los tiempos de que estan alamacenados en arreglos
for(let k=0;k<vuelta1.length;k++){
    if(k==0)
    {
         horasSegundos=(vuelta1[k]+vuelta2[k]+vuelta3[k])*3600
        continue
    }
    else if(k==1){
         minutosSegundos=(vuelta1[k]+vuelta2[k]+vuelta3[k])*60
         continue
    }
    else{
         segundosS=(vuelta1[k]+vuelta2[k]+vuelta3[k])
    }
}
// sumamos todos los datos convertidos en segundos
 Sumatotal=segundosS+minutosSegundos+horasSegundos 



// sacamos el promedio de las 3 vueltas

let promedio=(Sumatotal/3)

// convertimos todos los datos de segundos a horas , minutos , segundos

    let nuevoHoras=Math.floor(promedio/3600)
    let nuevoMinutos=Math.floor((promedio%3600)/60)
    let nuevoSegundos=Math.floor(promedio%60) 

console.log("El promedio de las 3 vueltas es: "+nuevoHoras+" horas :"+nuevoMinutos+" minutos : "+nuevoSegundos+" segundos")