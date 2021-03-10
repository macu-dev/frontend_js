console.log(`
  Usa el bucle for para mostrar usando console.log números pares del 2 al 10 inclusive.
  Remplazar este while por for (la salida debe ser la misma)
`)

let i = 0;
while (i < 3) {
  console.log( `numero ${i}!` );
  i++;
}


for (let i = 0; i <=10; i++) {
  if(i % 2 === 0) {
    console.log(i);
  }
  
}

for (let i = 0; i < 3; i++) {
  console.log( `numero ${i}!` );
}