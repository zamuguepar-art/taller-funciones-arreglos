/**
 * Nivel 8 — El detector (some / every)
 * -------------------------------------------------------------
 * Métodos usados: every(callback) y some(callback)
 * Por qué: no queremos un arreglo nuevo sino una respuesta SÍ/NO.
 *   - every → true si TODOS los elementos cumplen.
 *   - some  → true si AL MENOS UNO cumple (y se detiene al encontrarlo).
 *
 * Ejecutar: node metodos-array/ejercicio8.js
 */

// ===== Misión A · ¿Se puede abrir el salón? =====
{
  const revision = [true, true, true, false, true, true];

  const sePuedeAbrir = revision.every(r => r === true);  // ¿todas pasaron?
  const llamarTecnico = revision.some(r => r === false); // ¿alguna falló?

  console.log(sePuedeAbrir);  // false
  console.log(llamarTecnico); // true

  if (sePuedeAbrir && !llamarTecnico) {
    console.log("ABRIR");
  } else {
    console.log("LLAMAR TECNICO");
  }
}

/*
 * | Pregunta                        | Creemos | Sale  | Método          |
 * |---------------------------------|---------|-------|-----------------|
 * | ¿Se puede abrir el salón?       | false   | false | every           |
 * | ¿Hay que llamar al técnico?     | true    | true  | some            |
 * | Con todas en true, ¿qué imprime?| ABRIR   | ABRIR | every + if/else  |
 *
 * Con el false cambiado por true: every da true, some(r => r === false) da
 * false y se imprime ABRIR.
 */

// ===== Misión B · El semáforo del torneo =====
{
  const ronda = [320, 980, 75, 640, 510];
  const revision = [true, true, false, true, true];

  const hayEstrella = ronda.some(p => p > 900);
  const rondaValida = ronda.every(p => p >= 100);
  const todoEnOrden = !revision.some(r => r === false);

  function semaforo() {
    if (hayEstrella && rondaValida && todoEnOrden) {
      console.log("VERDE");
    } else if (rondaValida) {
      console.log("AMARILLO");
    } else {
      console.log("ROJO");
    }
  }

  semaforo(); // ROJO

  // Paso 7: filter(...).length > 0 da lo mismo que some, pero recorre todo.
  console.log(ronda.filter(p => p > 900).length > 0); // true
}

// Paso 6: ¿qué pasa con una ronda vacía?
{
  const ronda = [];
  console.log(ronda.some(p => p > 900));   // false
  console.log(ronda.every(p => p >= 100)); // true  ← every sobre [] siempre es true
  // Arreglo sugerido: rondaValida = ronda.length > 0 && ronda.every(p => p >= 100);
}

/*
 * | Variable          | Predicción               | Resultado | Método        |
 * |-------------------|--------------------------|-----------|---------------|
 * | hayEstrella       | true (980)               | true      | some          |
 * | rondaValida       | false (el 75)            | false     | every         |
 * | todoEnOrden       | false (una máquina falló)| false     | ! + some      |
 * | Color del semáforo| ROJO                     | ROJO      | && con if     |
 *
 * Paso 6: con ronda = [] el semáforo da AMARILLO, lo que no tiene sentido:
 * una ronda sin partidas se declara "válida" porque every sobre un arreglo
 * vacío siempre da true. Habría que añadir ronda.length > 0 a la condición.
 *
 * Paso 7: preferimos some: se lee como la pregunta ("¿hay alguno?"), no
 * construye una lista que no hace falta y se detiene en el primer puntaje que
 * cumple.
 */

/*
 * ===== Control de conocimiento =====
 * 1. n.some(x => x > 10) → true; n.every(x => x > 10) → false (el 4 y el 9 no
 *    cumplen); n.filter(x => x > 10) → [16].
 * 2. Imprime false y true. some no encuentra ningún elemento que cumpla, y
 *    every responde true porque no hay ningún elemento que incumpla.
 * 3. !averiadas.some(a => a === true). Es la negación del some: si ninguna
 *    está averiada, da true.
 * 4. some se detiene en cuanto encuentra el primero que cumple;
 *    filter(...).length > 0 recorre las diez mil partidas y además construye un
 *    arreglo que solo se usa para contarlo.
 */
