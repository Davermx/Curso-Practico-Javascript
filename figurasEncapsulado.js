//Este es el codigo del cuadrado
console.group("Cuadrado")

function perimetroCuadrado(lado) {
  return lado * 4;
}


function areaCuadrado(lado) {
  return lado * lado;
}

// console.log("el área del cuadrado es:" + areaCuadrado + "cm2");
console.groupEnd();







//ESTE ES EL CODIGO DEL TRIANGULO
console.group("Triangulos");


function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}


function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.groupEnd();




//ESTE ES EL CODIGO DEL CIRCULO
console.group("Circulo");


//Diametro
function diametroCirculo(radio) {
  return radio * 2;
}

//PI
const PI = Math.PI;
console.log("Pi es:" + PI);
// Math es una herramienta en javascript tiene ayudas con muchas herramientas dentro.


//Circuferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}


//Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();