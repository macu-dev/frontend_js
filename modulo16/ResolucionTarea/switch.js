 
//1. Escribe el código utilizando if..else que corresponda al siguiente switch:
//2. Reescribe el código utilizando solo un argumento switch:


// 1

let navegador = 'Safari';


/*switch (navegador) {
  case 'Edge':
    console.log( "¡Tienes Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    console.log( 'Esta bien, soportamos estos navegadores también' );
    break;

  default:
    console.log( '¡Esperamos que esta página se vea bien!' );
}
*/

//resolviendo 1
console.log('con if');

if(navegador === 'Edge'){
     console.log( "¡Tienes Edge!" );
} else if( navegador === 'Chrome' || navegador === 'Safari' || 
          navegador === 'Opera'   || navegador === 'Firefox' ) {
     console.log( `Esta bien, soportamos ${navegador} también` );     
} else{
    console.log( '¡Esperamos que esta página se vea bien!' );
}





// 2
let numero = 2;

/*if (a == 0) {
  console.log( 0 );
}
if (a == 1) {
  console.log( 1 );
}

if (a == 2 || a == 3) {
  console.log( '2,3' );
}*/

//resolviendo 2

switch (numero) {
  case 0:
    console.log(numero);
    break;
    
  case 1:
    console.log(numero);
    break;
    
  case 2: case 3:
    console.log(numero);
    break;

}

