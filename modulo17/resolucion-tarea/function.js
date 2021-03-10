console.log(`
1. Reescriba la función utilizando Arrow Function y en el cuerpo re escribir el if por '?' o '||'
2. Escriba una función min(a,b) la cual devuelva el menor de dos números a y b.
Por ejemplo min(2, 5) retorna 2
3. Escriba una función doble(a,b) la cual devuelva a duplicado por b.
Por ejemplo doble(3, 2) retorna 6
4. Escribir las dos funciones del punto 2 y 3 usando funcion flecha.
`);


// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return console.log('No eres mayor de edad todavia');
//   }
// }

const checkAge = age => age > 18 ? true : 'no eres mayor de edad todavia';

function min(a,b){
  if (a < b) {
    return a;
  }else{
    return b;
  }
}

function doble(a,b) {
  return a * b;
}

console.log(`checkAge: ${checkAge(20)}, min: ${min(2,5)} doble: ${doble(3,2)}`);


const minNumber = (a,b) => a < b ? a : b;
const multiplicacion = (a,b) => a * b;
console.group('con arrow functions')
console.group('function min');
console.log(minNumber(2,5));
console.group('function multiplicacion');
console.log(multiplicacion(2,3));
console.groupEnd();


