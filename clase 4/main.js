// astraccion = ocultar algo con complejidad




/*
function saludar (){
    let nombre = prompt ("ingrese tu nombre")
    alert("bienvenido "+ nombre)
}

saludar()
saludar()
saludar()
saludar()
*/


/*
function login (){ //el function sirve para simplificar codigo (sigue abajo)
    let usuario = prompt("ingresa tu nombre")

    if (usuario !== ""){
        alert("bienvenido: "+usuario)
    }else{
        alert ("error, no se reconoce usuario")
    }
}
login() //aca queda simplificado el codigo de arriba
*/

/*
function saludar(nombre){
    alert("hola "+ nombre)
}
saludar ("adolfo piña")

let parametro = prompt ("ingresa ")

saludar (parametro)

esto es para personalizar cada respuesta
*/



const iva= 1.21 //funcion global

function CalcularIva(importe){       //creo una funcion para calcular iva
    if(parseFloat(importe)){
        let resultado = importe * iva
        alert("el importe mas iva es de: "+ resultado)
    }
}
//CalcularIva(100) //este resultado sale de la funcion + la suma 100 que se puso manual

function CalcularPrecioFinal(){
    let PrecioDelProducto = prompt ("ingresa el importa total de tu compra ")
    CalcularIva(PrecioDelProducto)
}

CalcularPrecioFinal()

/*
function calculadora (primerNumero, segundoNumero, operacion){
switch (operacion){
    case "+";
        return primerNumero + segundoNumero;
        break;
    case "-":
        return primerNumero - segundoNumero;
        break;
    case "*"
        return primerNumero + segundoNumero;
        break;
    case "/"
        return primerNumero / segundoNumero;
        break
    default:
        return 0;
        break;
    }
}
*/

/*
function sumar (numA,numB){    //funcion comun
    let resultado = numA+numB
    alert(resultado)
}*/


/*
let sumar = function (numA,numB){    //funcion anonima
    return numA+numB
}

alert(sumar(45,45))          //esto con la funcion anonima es un retorno implicito
*/


/*
let sumar = (a,b) => a+b                 //funcion flecha
*/