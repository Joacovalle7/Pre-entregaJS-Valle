//if (condicional) {cuerpo de condicional}

let nombre = prompt ("ingresa tu nombre perra").trim() .toLocaleLowerCase()
let apellido = prompt ("ingresa tu apellido").toUpperCase() .trim

if(apellido == ""|| apellido== Number || apellido== null ) {
    alert ("ingresa un apellido para continuar")
}else{

    if (nombre === "camila" && apellido === "mayora") { 
        alert ("hola mi amooor t amooo")
    }else if(nombre === "catalina" && apellido === "gomez"){
        alert("vos no sos cami, andate a lavar el culo, sos" + " " + nombre)
    }else if(nombre === "hernan" && apellido === "diaz"){
        alert("vos no sos cami, pero sos " + " " + nombre +"," + " "  + "que onda compañero salen unos fifas?")
    }else if(nombre === "ailen" && apellido === "nuñez"){
        alert("vos no sos cami, pero sos " + " " + nombre +"," + " "  + "que onda salen unos porrinhos?")
    }else if(nombre === "luciana" && apellido === "pradal"){
        alert("vos no sos cami, pero sos " + " " + nombre +"," + " "  + "que onda wacha sucia, partite la pileta que hace calooooor")
    }else{
        alert ("hola putito")
    }
}

// if ((nombreIngresado !="") && ((nombreIngresado == "CAMI") || (nombreIngresado =="cami"))){}

/*
producto
precio base
oferta de mi cliente
alert("vende algo, escucho ofertas")
let ofertaBase = 2000

let ofertaDelUsuario = parseFloat(prompt("ingrese su oferta"))
if (ofertaDelUsuario < 1000) {
    alert("trabaja pobre")
}else if(ofertaDelUsuario < 2000 && ofertaDelUsuario > 1500){
    alert ("bueno estirate un poco mas y hablamos rey")
}else if(ofertaDelUsuario >=1000 && ofertaDelUsuario < 1500){
    alert ("anda a laburar pobre y cuando tengas mas plata volve")
}else if(ofertaDelUsuario >= 2000){
    alert("altoque mi rey t lo llevo sin comision")
}else {
    alert("mira capo t pedi una oferta en plata mostro, pone un numerito ahi putito")
}



alert("vende algo, escucho ofertas")
let ofertaBase = 2000

let ofertaDelUsuario = parseFloat(prompt("ingrese su oferta"))

if (ofertDelUsuario < ofertaBase){
    alert("no t vendo un carajo")
}

*/
