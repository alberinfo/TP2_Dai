const pi = 3.1416;

exports.add = function(a,b) {
  return a + b;
}

exports.mul = function(a,b) {
    return a * b;
}

exports.areaCirculo = function(radio) {
    return pi * radio * radio;
}

exports.volumenCilindro = function(radio, altura) {
    return pi * radio * radio * altura;
}