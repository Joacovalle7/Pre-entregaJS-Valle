

// estructura del FOR

//            desde,        hasta,              actualizacion

//aca mercaderia va ser menor a 10, nunca va a llegar a 10

//for (let mercaderia= 0; mercaderia< 10; mercaderia = mercaderia+1){}

// for(let i=0; i<10; i++) {
// i = i+1
//   i++


// para sumar de varios muchos a la vez

// for(let i=1; i<99 ; i=i+33){
// console.log ("joacco agrego " + i + " productos al stock")
// } (que en total seria 3 productos ya que empieza en 33 y 33 x 3 da 99)


//debugger (esto frena todo el codigo que esta abajo)

//break para cortar con el ciclo de algo

/*for (let i=0; i<10;i++){

if(i=== 5){
    break
}
    console.log("contando " + i)
}
*/

//continue, salta una opcion que no deja usar y sigue su ciclo

/*let tarjeta = 3

for (let i=0; i<10;i++){
    if( i === 2018 || i === 2019) {
        continue
    }
}
*/



/*  WHILE permite crear bucles que se ejecutan de 0 a muchas vveces dependiendo la condicion indicicada (pudiendo llegar hasta el infinito o hasta que explote la pc)

let repetir= true;
while(repetir){
    console.log("al infinito y mas alla")
}

/lo de abajo es para crear un bluqle infinito/

let iterar = true
while ( iterar === true)
    console.log("imprimo un msj edsde el while"){
    iterar = confirm("desea continuar?")
}
*/



/* DO , la estructura do...while es otra estructura de bucle, el cuerpo del blucle con el do while aunque sea falso una vez se va a ejeutar

let contador = 5
do{
    console.log ("el calor del contador es " + contador)
}while(contador <5)

este ejemplo lo tenemos infitas veces ya que es true y no tenemos una variable que nos haga que ese valor cambie o se sume
*/




let intentos = 1

let identificar = true /*esta variable es la que se encarga de verificar el usuario*/

do{
    let usuario = prompt("ingrese su usuario")
    
    if(usuario === null){
        break
    }
    if(usuario ===indexedDB.usser &&  intentos<=3){
        alert("bienvenido" + indexedDB.nombre)
        identificar = false
    }else{
        alert("no reconozco el usuario")
        intentos++
        if(intentos> 3){
            alert("usted supero los 3 intentos")
        break
        }
    }

}while(identificar)
