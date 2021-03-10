 
console.log(`
  Strings:
  1. Crear 3 variables cada una debe tener un dato especifico (name, age, nationality)
  2. Escribir 1 console.log armando la siguiente frase "Hola me llamo ..., el doble de mi edad es ... y soy ..."
  Boolean:
  1. Crear 1 variable con el siguiente resultado, tu edad es mayor a 90 ?
  Null and Undefined
  1. Crear 2 variables cada una deberia tener un dato especifico (name, age)
  2. Escribir un console.log con el siguiente resultado "Hola me llamo null y tengo undefined años"
`)

//strings

let name = 'Maria Claudia';
const nationality = 'Perú';
let age = 26;

function double(number){
    return number * 2;
}

console.log(`Hola me llamo ${name}, el doble de mi edad es ${double(age)} y soy de ${nationality}`);

//boolean 

let resultado = age > 90 ? null : undefined

console.log(resultado);

name = null;
age = undefined;

console.log(`Hola me llamo ${name} y tengo ${age} años`);
