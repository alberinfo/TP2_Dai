//Traigamos funcionalidades
const strings = require('./strings');
const matematica = require('./matematicas');
const alumno = require('./alumno');
const archivo = require('./copiarArchivos');
const getCurrency = require('currency-map-country').getCountry;

//EJ1
const txt1 = "Var1", txt2 = "Var2";

console.clear();
console.log("Textos iniciales: " + txt1 + " y " + txt2);
console.log("Texto resultante: " + strings.concatInverse(txt1, txt2));
console.log("\n");

//EJ2
console.log("Area circulo radio 2:", matematica.areaCirculo(2));
console.log("Volumen cilindro radio 6.9 y altura 42:", matematica.volumenCilindro(6.9, 42));
console.log("\n");

//EJ3
let alumno1 = new alumno.classAlumno("eljuan", 123456789);
let alumno2 = new alumno.classAlumno("elpedrito", 987654321);
console.log("El alumno se llama", alumno1.mostrarAlumno().nombre, "y su dni es", alumno1.mostrarAlumno().dni);
console.log("El alumno se llama", alumno2.mostrarAlumno().nombre, "y su dni es", alumno2.mostrarAlumno().dni);
console.log("\n");

//EJ4
//archivo.copiar('./dir1', './dir2'); //Da error si no existen los archivos.
//console.log('\n');

//EJ7
let codigosPaisesTest = ["Argentina", "USA", "UZI"]
codigosPaisesTest.forEach(element => {
    if(typeof(getCurrency(element)) !== "undefined") console.log("La moneda de " + element + " es: " + getCurrency(element).cur);
    else console.log(element, "no es un pais valido");
});