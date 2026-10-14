/**
 * Nivel 6 — La fábrica (map)
 * -------------------------------------------------------------
 * Método usado: map(callback)
 * Por qué: map recorre el arreglo y construye uno NUEVO del mismo tamaño
 *   con lo que devuelve el callback en cada elemento. Sirve para
 *   TRANSFORMAR datos (aplicar descuento, pasar a mayúsculas, formatear)
 *   sin tocar el arreglo original.
 *
 * Ejecutar: node metodos-array/ejercicio6.js
 */

// ===== Misión A · Los precios del festival =====
{
  const precios = [2500, 18000, 9000, 4500, 12000];

  // map de una línea, sin llaves ni return: 20 % de descuento.
  const preciosFestival = precios.map(p => p * 0.8);

  console.log(preciosFestival);                          // [ 2000, 14400, 7200, 3600, 9600 ]
  console.log(precios);                                  // original intacto
  console.log(precios.length, preciosFestival.length);   // 5 5

  const textos = preciosFestival.map(p => "$ " + p);
  console.log(textos); // [ '$ 2000', '$ 14400', '$ 7200', '$ 3600', '$ 9600' ]
}

// ===== Misión B · Las etiquetas del tablero =====
{
  const juegos = ["pinball", "karts", "zombis", "laberinto"];
  const partidas = [320, 980, 75, 640];

  const nombresLed = juegos.map(j => j.toUpperCase());
  // El callback también recibe el índice (i) como segundo parámetro.
  const conPuesto = juegos.map((j, i) => (i + 1) + ". " + j.toUpperCase());
  const tickets = partidas.map(p => Math.floor(p / 100));
  // Usamos el índice para "emparejar" dos arreglos.
  const etiquetas = juegos.map((j, i) => j.toUpperCase() + " — " + tickets[i] + " tickets");

  console.log(nombresLed);
  console.log(conPuesto);
  console.log(tickets);
  console.log(etiquetas);

  // Paso 6 · Rompe y repara: con llaves y sin return todo sale undefined.
  const ticketsRotos = partidas.map(p => { Math.floor(p / 100) });
  console.log(ticketsRotos); // [ undefined, undefined, undefined, undefined ]

  // Paso 7: los originales no cambiaron después de cinco map.
  console.log(juegos, partidas);
}

/*
 * | Arreglo    | Lo que imprime                                                              |
 * |------------|-----------------------------------------------------------------------------|
 * | nombresLed | [ 'PINBALL', 'KARTS', 'ZOMBIS', 'LABERINTO' ]                               |
 * | conPuesto  | [ '1. PINBALL', '2. KARTS', '3. ZOMBIS', '4. LABERINTO' ]                   |
 * | tickets    | [ 3, 9, 0, 6 ]                                                              |
 * | etiquetas  | [ 'PINBALL — 3 tickets', 'KARTS — 9 tickets', 'ZOMBIS — 0 tickets',         |
 * |            |   'LABERINTO — 6 tickets' ]                                                 |
 *
 * Paso 6: las llaves abren un bloque y nadie devuelve el valor → undefined.
 *         Se arregla escribiendo return o quitando las llaves.
 * Paso 7: juegos y partidas no cambian porque map no muta: siempre construye
 *         un arreglo nuevo.
 */

/*
 * ===== Control de conocimiento =====
 * 1. b.length vale 4 y a[0] sigue valiendo 1 después del map.
 * 2. Imprime [undefined, undefined]. Se arregla cambiando una sola cosa: quitar
 *    las llaves (x => x * 3) o escribir return dentro de ellas.
 * 3. map devuelve siempre un arreglo del mismo tamaño que el original (una
 *    entrada, una salida): no puede descartar elementos. Para quedarse solo con
 *    los puntajes mayores a 500 hace falta filter.
 * 4. ["ana", "beto"].map((n, i) => "Jugador " + (i + 1) + ": " + n)
 */
