
var cajaEncriptar = document.querySelector('#texto-encriptar');
var cajaDesencriptar = document.querySelector('#texto-desencriptar');
const diccionarioEncriptor = {}
const diccionarioDesencriptor = {}
let text = ""


// Agregar elementos al diccionario
diccionarioEncriptor["e"] = "enter";
diccionarioEncriptor["i"] = "imes";
diccionarioEncriptor["a"] = "ai";
diccionarioEncriptor["o"] = "ober";
diccionarioEncriptor["u"] = "ufat";
diccionarioEncriptor["enter"] = "e";
diccionarioEncriptor["imes"] = "i";
diccionarioEncriptor["ai"] = "a";
diccionarioEncriptor["ober"] = "o";
diccionarioEncriptor["ufat"] = "u";



function encriptar(){
    console.log(cajaEncriptar.value);
    text = cajaEncriptar.value;
    var imagen = document.getElementById("imagen-texto");
    var botoncopiar = document.getElementById("boton-copiar");
    if (text.includes("e") || text.includes("i") || text.includes("a") || text.includes("o") || text.includes("u")  ){
        console.log("encontre una e")
        text = text.replace(/e/g, diccionarioEncriptor["e"])
                   .replace(/i/g, diccionarioEncriptor["i"])
                   .replace(/a/g, diccionarioEncriptor["a"])
                   .replace(/o/g, diccionarioEncriptor["o"])
                   .replace(/u/g, diccionarioEncriptor["u"]);
        cajaDesencriptar.value=(text);        
        imagen.style.display = "none";
        botoncopiar.style.display = "block";
    }
}



function desencriptar(){
    console.log(cajaEncriptar.value);
    text = cajaEncriptar.value;
    if (text.includes("e") || text.includes("i") || text.includes("a") || text.includes("o") || text.includes("u")  ){
        console.log("encontre una e")
        text = text.replace(/enter/g, diccionarioDesencriptor["enter"])
                   .replace(/imes/g, diccionarioDesencriptor["imes"])
                   .replace(/ai/g, diccionarioDesencriptor["ai"])
                   .replace(/ober/g, diccionarioDesencriptor["ober"])
                   .replace(/ufat/g, diccionarioDesencriptor["ufat"]);
        cajaDesencriptar.value=(text);
    }

}


function copiar_texto(){
    cajaDesencriptar.select();
    cajaDesencriptar.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(cajaDesencriptar.value);
    console.log("copiando")
}