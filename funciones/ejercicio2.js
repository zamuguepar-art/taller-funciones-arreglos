/**
 * Nivel 2 — Entrada y salida
 * -------------------------------------------------------------
 * Función usada: función tradicional CON parámetros y CON return.
 * Por qué: aquí la función debe recibir datos (cantidad, puntos, esOro)
 *   y DEVOLVER un resultado, sin imprimir nada adentro. Así el valor
 *   se puede guardar, imprimir o pasar a otra función
 *   (ej: precioPaquete(puntosATickets(1000, true))).
 *
 * Ejecutar: node funciones/ejercicio2.js
 */

// ===== Misión A · El precio del paquete =====
// Desde 5 fichas la unidad cuesta $2000; con menos de 5 cuesta $2500.
function precioPaquete(cantidad) {
  let precioUnidad;
  if (cantidad >= 5) {
    precioUnidad = 2000;
  } else {
    precioUnidad = 2500;
  }
  return cantidad * precioUnidad; // solo devuelve, no imprime
}

console.log(precioPaquete(1));  // 2500
console.log(precioPaquete(4));  // 10000
console.log(precioPaquete(5));  // 10000
console.log(precioPaquete(12)); // 24000

/*
 * Entrada → Salida esperada
 *   precioPaquete(1)  → 2500
 *   precioPaquete(4)  → 10000
 *   precioPaquete(5)  → 10000
 *   precioPaquete(12) → 24000
 *
 * El salto es raro: 4 y 5 fichas cuestan lo mismo ($10 000). Comprar la
 * quinta ficha sale gratis, y quien lleva 4 pierde si no compra una más.
 */

// ===== Misión B · De puntos a tickets =====
// Cada 100 puntos = 1 ticket (Math.floor descarta los decimales).
// Si el cliente es oro, los tickets se duplican.
function puntosATickets(puntos, esOro) {
  let tickets = Math.floor(puntos / 100);
  if (esOro) {
    tickets = tickets * 2;
  }
  return tickets;
}

console.log(puntosATickets(250, false));  // 2
console.log(puntosATickets(250, true));   // 4
console.log(puntosATickets(99, false));   // 0
console.log(puntosATickets(1000, true));  // 20

// Paso 7: combinamos las dos funciones (la salida de una es la entrada de la otra).
console.log(precioPaquete(puntosATickets(1000, true))); // 40000

/*
 * | Llamada                    | Predicción | Resultado real |
 * |----------------------------|------------|----------------|
 * | puntosATickets(250, false) | 2          | 2              |
 * | puntosATickets(250, true)  | 4          | 4              |
 * | puntosATickets(99, false)  | 0          | 0              |
 * | puntosATickets(1000, true) | 20         | 20             |
 *
 * Paso 7: el cliente oro con 1000 puntos gana 20 tickets, y comprar 20 fichas
 * cuesta precioPaquete(20) = $40 000.
 */

/*
 * ===== Control de conocimiento =====
 * 1. b vale undefined, porque solo se pasó un argumento. console.log(a + b)
 *    imprime NaN (10 + undefined).
 * 2. Imprime solo 10. El return termina la función en esa línea, así que
 *    console.log("listo") es código muerto y nunca se ejecuta.
 * 3. A la función le falta el return: imprime el resultado pero no lo entrega.
 *    Entonces r queda undefined, y undefined * 2 da NaN. Hay que cambiar el
 *    console.log de adentro por return.
 * 4. El parámetro es el nombre que se escribe al declarar (cantidad en
 *    function precioPaquete(cantidad)); el argumento es el valor real que se
 *    manda al llamarla (el 12 en precioPaquete(12)).
 */
