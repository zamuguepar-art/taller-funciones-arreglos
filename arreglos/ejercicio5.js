/**
 * Nivel 5 — La fila y el mantenimiento (métodos que MUTAN el arreglo)
 * -------------------------------------------------------------
 * Métodos usados: push, shift, unshift, pop, splice, reverse.
 * Por qué:
 *   - push    → agrega al final (llegan jugadores a la fila).
 *   - shift   → saca el primero (entra el primero de la fila).
 *   - unshift → agrega al inicio (miembro VIP).
 *   - pop     → saca el último (alguien se cansa y se va).
 *   - splice  → quita o inserta en cualquier posición (retirar/insertar juegos).
 *   - reverse → invierte el orden.
 *   Todos modifican el MISMO arreglo, que es justo lo que pide una fila real.
 *
 * Ejecutar: node arreglos/ejercicio5.js
 */

// ===== Misión A · La fila del torneo =====
{
  const fila = ["Ana", "Beto", "Caro", "Dani"];

  fila.push("Marcos", "Dana");           // llegan dos jugadores al final

  const jugadorEntra = fila.shift();     // sale el primero de la fila
  console.log("Una máquina está libre, entra:", jugadorEntra);

  fila.unshift("Tungtungsahur");         // VIP entra al inicio
  console.log("Entró miembro VIP al inicio de la fila");

  const seFue = fila.pop();              // el último se va
  console.log(seFue + " se cansó y se fue");

  console.log(fila);
}

/*
 * Salida esperada:
 *   Una máquina está libre, entra: Ana
 *   Entró miembro VIP al inicio de la fila
 *   Dana se cansó y se fue
 *   [ 'Tungtungsahur', 'Beto', 'Caro', 'Dani', 'Marcos' ]
 * Quedan solo 5 en la fila.
 */

// ===== Misión B · Mantenimiento del catálogo =====
{
  const catalogo = ["Pinball", "Galaxia", "Karts", "Zombis", "Tetris", "Aereo"];
  const tamanoInicial = catalogo.length;

  // splice(inicio, cuántos): quita 2 juegos desde el índice 2 y los devuelve.
  const retirados = catalogo.splice(2, 2);
  console.log("Retirados:", retirados);
  console.log("Catálogo tras retirar:", catalogo);

  // splice(inicio, 0, nuevo): inserta sin borrar nada.
  catalogo.splice(2, 0, "Laberinto");

  // Movemos Pinball del inicio al final.
  const pinball = catalogo.shift();
  catalogo.push(pinball);

  catalogo.reverse();
  console.log("Catálogo final invertido:", catalogo);

  // Paso 7: comparamos con el tamaño inicial.
  if (catalogo.length > tamanoInicial) {
    console.log("El catálogo creció");
  } else if (catalogo.length < tamanoInicial) {
    console.log("El catálogo se redujo");
  } else {
    console.log("El catálogo quedó igual");
  }
}

/*
 * Salida esperada:
 *   Retirados: [ 'Karts', 'Zombis' ]
 *   Catálogo tras retirar: [ 'Pinball', 'Galaxia', 'Tetris', 'Aereo' ]
 *   Catálogo final invertido: [ 'Pinball', 'Aereo', 'Tetris', 'Laberinto', 'Galaxia' ]
 *   El catálogo se redujo
 *
 * Paso 6 — contenido del catálogo en cada momento:
 * | Momento                  | Contenido                                   | length |
 * |--------------------------|---------------------------------------------|--------|
 * | Tras retirar averiados   | Pinball, Galaxia, Tetris, Aereo             | 4      |
 * | Tras insertar Laberinto  | Pinball, Galaxia, Laberinto, Tetris, Aereo  | 5      |
 * | Tras mover Pinball       | Galaxia, Laberinto, Tetris, Aereo, Pinball  | 5      |
 * | Tras invertir            | Pinball, Aereo, Tetris, Laberinto, Galaxia  | 5      |
 *
 * El catálogo se redujo de 6 a 5: salieron 2 juegos y entró 1.
 *
 * ¿Se puede recuperar el orden original sin volver a escribirlo? No. splice,
 * shift, push y reverse modifican el mismo arreglo y no se guardó una copia.
 * Karts y Zombis solo sobreviven dentro de "retirados". Para poder volver atrás
 * habría que hacer  const original = [...catalogo];  antes del primer paso.
 */

/*
 * ===== Control de conocimiento =====
 * 1. | Línea / Variable | Valor retornado / Contenido | Concepto clave                        |
 *    |------------------|-----------------------------|---------------------------------------|
 *    | Línea 2 (push)   | 4                           | Retorna la nueva longitud del arreglo |
 *    | Línea 3 (pop)    | 4                           | Retorna el elemento removido del final|
 *    | Línea 4 (a)      | [1, 2, 3]                   | Estado final tras modificar           |
 * 2. Resultado final: ["a", "d"]
 * 3. Mutación con const: const impide reasignar la variable a otro arreglo,
 *    pero sí permite modificar sus elementos internos.
 * 4. Por referencia: copia = catalogo hace que ambas variables apunten al mismo
 *    arreglo en memoria, así que cualquier cambio se ve en las dos.
 */
