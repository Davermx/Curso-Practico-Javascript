//Este es el codigo del cuadrado

console.group("Cuadrado")

const ladoCuadrado = 5;
console.log("Los lados del cuadadro mide:" + ladoCuadrado + "cm");


const perimetroCuadrado = ladoCuadrado * 4;
console.log("el perimetro del cuadrado es:" + perimetroCuadrado + "cm");



const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("el área del cuadrado es:" + areaCuadrado + "cm2");
console.groupEnd();






//ESTE ES EL CODIGO DEL TRIANGULO
console.group("Trinagulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
  "Los lados del triangulo mide: "
  + ladoTriangulo1 + "cm, "
  + ladoTriangulo2 + "cm, "
  + baseTriangulo + "cm, "
);



const alturaTriangulo = 5.5;
console.log("La altura del triangulo es: " + alturaTriangulo + "cm");


const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");


const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo + "cm2");

console.groupEnd();




//ESTE ES EL CODIGO DEL CIRCULO
console.group("Circulo");


//Radio
const radioCirculo = 4;
console.log("El radio del Circulo es: " + radioCirculo + "cm");

//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El dimetro el circulo: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log("Pi es:" + PI);
// Math es una herramienta en javascript tiene ayudas con muchas herramientas dentro.


//Circuferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo: " + perimetroCirculo + "cm");


//Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El Área del circulo: " + areaCirculo + "cm");




console.groupEnd();