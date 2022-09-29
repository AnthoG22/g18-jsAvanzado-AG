/**
 * BLOQUE 1 - Codigo sincrono
 * Una linea se ejecuta inmediatamente despues de la otra
 * no hay codigo dependiente o bloqueante.
 */

// console.log('=======BLOQUE1========');
// console.log('Primero');
// console.log('Segundo');
// console.log('Tercero');     


/**
 * BLOQUE 2 - Problema tipico de asincronia
 */

const validatePayment = () =>{
    setTimeout(() => {
        console.log('2 Validando la tarjeta');
    } ,0 ) ;
}
console.log('=======BLOQUE2========');

console.log('1 Presiona el boton para comprar');
validatePayment();
console.log('3 Ver el mensaje de gracias joven');