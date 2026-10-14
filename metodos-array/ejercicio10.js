/**
 * Nivel 10 — La última vuelta (forEach + cadena de métodos + reduce)
 * -------------------------------------------------------------
 * Métodos usados: forEach, filter, sort, map, reduce.
 * Por qué:
 *   - forEach → solo RECORRE para hacer algo con cada elemento (imprimir);
 *     no devuelve nada (undefined).
 *   - filter → sort → map → forEach encadenados: seleccionar, ordenar,
 *     dar formato e imprimir, cada paso sobre el resultado del anterior.
 *   - reduce → ACUMULA todos los elementos en un solo valor (un total).
 *
 * Ejecutar: node metodos-array/ejercicio10.js
 */

// ===== Misión A · El recorrido que imprime =====
{
  const finalistas = ["Ana", "Beto", "Caro", "Dani"];

  const r1 = finalistas.forEach((f, i) => {
    console.log("Puesto " + (i + 1) + ": " + f.toUpperCase());
  });
  console.log(r1); // undefined

  const r2 = finalistas.map((f, i) => {
    console.log("Puesto " + (i + 1) + ": " + f.toUpperCase());
  });
  console.log(r2); // [ undefined, undefined, undefined, undefined ]
}

/*
 * Ambos imprimen "Puesto 1: ANA" hasta "Puesto 4: DANI". forEach guarda
 * undefined; map, cuyo callback no devolvió nada, guarda un arreglo de cuatro
 * undefined.
 * map sirve para construir un arreglo nuevo; aquí solo queremos mostrar cada
 * línea, y para eso está forEach.
 */

// ===== Misión B · El tablero final =====
const partidas = [
  { nombre: "Ana", pts: 320 },
  { nombre: "Beto", pts: 1200 },
  { nombre: "Caro", pts: 75 },
  { nombre: "Dani", pts: 980 },
  { nombre: "Edu", pts: 510 },
  { nombre: "Fer", pts: 440 }
];

console.log("Clasificados:", partidas.filter(p => p.pts >= 500).length);

// La cadena completa, un eslabón por línea.
partidas
  .filter(p => p.pts >= 500)                 // 1. solo clasificados
  .sort((a, b) => b.pts - a.pts)             // 2. mayor a menor (sobre el arreglo nuevo del filter)
  .map((p, i) => (i + 1) + ". " + p.nombre.toUpperCase() + " — " +
    Math.floor(p.pts / 100) + " tickets")    // 3. a texto
  .forEach(linea => console.log(linea));     // 4. imprimir

console.log(partidas); // sigue con sus 6 objetos en el orden original

/*
 * Salida esperada:
 *   Clasificados: 3
 *   1. BETO — 12 tickets
 *   2. DANI — 9 tickets
 *   3. EDU — 5 tickets
 *   [ { nombre: 'Ana', pts: 320 }, ... 6 objetos en el orden original ... ]
 *
 * Paso 2: después del filter quedan 3 (Beto, Dani y Edu).
 * Paso 3: no hace falta la copia con [...] porque filter ya devuelve un
 *         arreglo nuevo y sort reordena ese arreglo, no partidas.
 * Paso 6: partidas sigue con sus 6 objetos en el orden original.
 *
 * | Versión                  | Líneas | Por qué                                         |
 * |--------------------------|--------|-------------------------------------------------|
 * | Cadena correcta          | 3      | filter deja 3, sort los ordena, map los formatea|
 * | Con map antes de filter  | 0      | map ya convirtió los objetos en texto; el filter|
 * |                          |        | pregunta p.pts sobre un texto (undefined) y     |
 * |                          |        | nadie pasa.                                     |
 */

// ===== Extra · reduce (pedido en las instrucciones de entrega) =====
// reduce recorre el arreglo acumulando un valor: aquí, la suma de puntos.
const totalPuntos = partidas.reduce((acumulado, p) => acumulado + p.pts, 0);
console.log("Total de puntos del torneo:", totalPuntos); // 3525

// Cadena filter + map + reduce: total de tickets que reparten los clasificados.
const totalTickets = partidas
  .filter(p => p.pts >= 500)
  .map(p => Math.floor(p.pts / 100))
  .reduce((suma, t) => suma + t, 0);
console.log("Tickets repartidos a clasificados:", totalTickets); // 26 (12 + 9 + 5)

/*
 * ===== Control de conocimiento =====
 * 1. Imprime undefined, porque forEach no devuelve un arreglo. El método que
 *    habría dado [2, 4, 6] es map.
 * 2. Orden: .filter, .map, .forEach. filter va primero porque deja solo a los
 *    aprobados antes de transformarlos (map trabaja con menos elementos) y
 *    porque la condición necesita los datos originales. forEach va al final
 *    para imprimir.
 * 3. Porque forEach devuelve undefined, y no se puede llamar un método sobre
 *    undefined (Cannot read properties of undefined).
 * 4. Tabla de memoria:
 *    | Método  | ¿Qué devuelve?                                | ¿Muta? |
 *    |---------|-----------------------------------------------|--------|
 *    | map     | Un arreglo nuevo del mismo tamaño             | No     |
 *    | filter  | Un arreglo nuevo, más corto o igual (o vacío) | No     |
 *    | sort    | El mismo arreglo, ya ordenado                 | Sí     |
 *    | forEach | undefined                                     | No     |
 *    | reduce  | Un solo valor acumulado                       | No     |
 */
