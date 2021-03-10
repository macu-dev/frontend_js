console.log(`
 1. A partir del Arreglo con users realizar las siguientes acciones
 - Remover los elementos en el indice 4, 3 y 1
 - Añadir 3 usuarios mas con las mismas propiedades (id, name, age)
 - Recorrer el nuevo array con usuarios y mostrar usando console.log el mensaje "Hola me llamo name y tengo age años"
 - Buscar un usuario que tenga 31 años y mostrar ese usuario por consola
 - Buscar todos los usuarios que se llamen Fran
 - Transformar la edad de todos los usuarios a 17 años
`)

let users = [
 {id: 1, name: "Fran", age: 31},
 {id: 2, name: "Katy", age: 18},
 {id: 3, name: "Federico", age: 38},
 {id: 4, name: "Maria", age: 24},
 {id: 5, name: "John", age: 45},
 {id: 6, name: "Fran", age: 7},
];

function removeItemsArray(){
  users.splice(1,1);
  users.splice(2,2);
  console.log(users);
}

removeItemsArray(users);

users.push(
  {
    id: 7, 
    name: "macu", 
    age: 26
  },
  {
    id: 8, 
    name: "facu", 
    age: 28
  },
  {
    id: 9, 
    name: "lala", 
    age: 30
  }
);

console.log(users);

users.forEach(({name, age}) => console.log(`Hola me llamo ${name} y tengo ${age} años`));

const result = users.find(({age}) => age === 31);
console.log(result);

const results = users.filter(({name}) => name === 'Fran');
console.log(results);

users.forEach(user => user['age'] = 17);
console.log(users)
