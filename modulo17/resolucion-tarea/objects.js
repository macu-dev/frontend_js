console.log(`
1. Escribe el código, una línea para cada acción:
Crea un objeto user vacío.
Agrega la propiedad name con el valor John.
Agrega la propiedad surname con el valor Smith.
Cambia el valor de name a Pete.
Remueven la propiedad name del objeto.
2. Mostrar un console log con la suma de los salaries del objeto 2
3. Crea una función multiplyNumeric(obj) que multiplique todas las propiedades numéricas de obj por 2. (P.D. Usa typeof para verificar si hay un número aquí.)
`)

let user = {};

user['name'] = 'John';
user['surname'] = 'Smith';

user['name'] = 'Pete';
delete user['name'];

console.log(user);

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}



// Antes de la llamada
let menu = {
  width: 200,
  height: 300,
  title: "Mi menú"
};

function addProperty(object, name) {
  let total = 0;

  for (const property in object) {

    if (typeof object[property] === 'string') {
      break;
    } else {
      total += object[property];
    }
  }

  console.log(`El total de la suma de las propiedades de ${name} es: ${total}`);

}

function multiplyNumeric(object) {
  for (const property in object) {
    if(typeof object[property] === 'string') {
      break;
    }else{
      object[property]*= 2;
    }
  }

  console.log(object);

}

addProperty(salaries, 'salaries');
addProperty(menu, 'menu');
multiplyNumeric(menu);

// Después de la llamada console.log(menu) deberia devolver { width: 400, height: 600, title: 'Mi menú' }