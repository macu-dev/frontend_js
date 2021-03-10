console.log(`
  Escribir la siguiente pregunta usando (if, else) y el operador ternario partiendo de la siguiente variable

  let password = "myOldPassword"

  Pregunta:
  Esta contraseña es igual a "MyPassword1234" si es asi mostrar un console.log con el mensaje "Logged In" sino escribir
  un console.log con el mensaje "Wrong Password"

  2. Reescriba esta condición if usando el operador ternario '?':
  
`)


let password = 'myOldPassword';

console.log('con if');

if(password ==='MyPassword1234') {
  console.log('Logged In');

}else{
  console.log('Wrong Password');
}

// con operador ternario
console.log('con operador ternario');
console.log(password === 'MyPassword1234'? 'Logged In' : 'Wrong Password');