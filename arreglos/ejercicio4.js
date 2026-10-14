/**
 * Nivel 4 — La caja de datos (arreglos básicos)
 * -------------------------------------------------------------
 * Herramientas usadas: acceso por índice arr[i], propiedad length,
 *   for clásico, for...of e indexOf().
 * Por qué: el arreglo guarda muchos valores bajo un solo nombre.
 *   - Índice y length para leer/modificar posiciones concretas.
 *   - for clásico cuando necesitamos el número de la posición (Partida 1, 2...).
 *   - for...of cuando solo importa el valor (sumar, contar, buscar el mayor).
 *   - indexOf para saber en qué posición quedó el puntaje más alto.
 *
 * Ejecutar: node arreglos/ejercicio4.js
 */

// ===== Misión A · El catálogo en pantalla =====
const catalogo = ["Pinball Neon", "Galaxia", "Karts Turbo", "Zombis", "Laberinto", "Aereo"];

console.log("Primero:", catalogo[0]);                   // Pinball Neon
console.log("Ultimo:", catalogo[catalogo.length - 1]);  // Aereo
console.log("Cuantos:", catalogo.length);               // 6

// Decisión del equipo: "posición 2" = índice 2 = tercer juego (Karts Turbo).
catalogo[2] = "EN MANTENIMIENTO";
console.log(catalogo);
// [ 'Pinball Neon', 'Galaxia', 'EN MANTENIMIENTO', 'Zombis', 'Laberinto', 'Aereo' ]

console.log(catalogo[10]); // undefined (no existe, pero no da error)

// ===== Misión B · El marcador del torneo =====
const puntajes = [320, 150, 980, 640, 75, 510, 500, 1200];

// for clásico: necesitamos el índice para numerar las partidas.
for (let i = 0; i < puntajes.length; i++) {
  console.log("Partida " + (i + 1) + ": " + puntajes[i] + " pts");
}

let total = 0;
let clasificados = 0;
let mayor = puntajes[0]; // arranca con el primer valor real, no con 0

// for...of: solo nos interesa cada valor.
for (const p of puntajes) {
  total = total + p;
  if (p >= 500) clasificados++;
  if (p > mayor) mayor = p;
}

console.log("Total:", total);
console.log("Clasificados:", clasificados);
console.log("Mayor:", mayor);
console.log("Promedio:", (total / puntajes.length).toFixed(1));

const indiceMayor = puntajes.indexOf(mayor);
console.log("Indice:", indiceMayor, "Partida:", indiceMayor + 1);

/*
 * | Dato del tablero              | Resultado          |
 * |-------------------------------|--------------------|
 * | Total de puntos de la ronda   | 4375               |
 * | Cuántos clasificaron (≥ 500)  | 5                  |
 * | Puntaje más alto              | 1200               |
 * | Promedio con un decimal       | 546.9              |
 * | Índice del mayor / partida    | 7 / partida 8      |
 *
 * Clasificaron 980, 640, 510, 500 y 1200: el 500 exacto cuenta porque la
 * condición es >=.
 */

/*
 * ===== Control de conocimiento =====
 * 1. a[1] vale 20; a.length vale 4; a[a.length] es undefined, porque el último
 *    índice es length - 1 (3).
 * 2. Imprime 8. Daría un resultado equivocado con un arreglo de solo negativos,
 *    como [-5, -20, -3]: el máximo arrancaba en 0 y nadie lo supera, así que
 *    imprimiría 0, un valor que no está en la lista.
 * 3. for clásico cuando se necesita el índice (por ejemplo para numerar
 *    partidas); for...of cuando solo importa el valor.
 * 4. Hay que cambiar <= por <. Los índices llegan hasta length - 1; con <= el
 *    ciclo da una vuelta más, con i = length, y esa casilla no existe.
 */
