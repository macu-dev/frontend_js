
console.log(`
 1. Tenemos 5 operaciones de array.
 Crear un array con los items “Jazz” y “Blues”. // Jazz, Blues
 Agregar “Rock-n-Roll” al final. // Jazz, Blues, Rock-n-Roll
 Reemplazar el valor en el medio por “Classics”. // Jazz, Classics, Rock-n-Roll
 Colocar primero Rap y Reggae al array. // Rap, Reggae, Classics, Rock-n-Roll
 2. Sumar los valores del siguiente Array 
 [12, 45, 32, 56, 190]
`)

const generos = ['Jazz', 'Blues'];
generos.push('Rock-n-Roll');

generos.splice(1,1, 'Classics');
generos.splice(0,0, 'Rap');
generos.splice(1,1, 'Reggae');
console.log(generos);

const numeros = [12, 45, 32, 56, 190];
const total = numeros.reduce((a,b)=> a + b);

console.log(total);