/**
 * Nivel 7 — Quién entra a la final (filter)
 * -------------------------------------------------------------
 * Método usado: filter(callback)  (y la cadena filter + map)
 * Por qué: filter devuelve un arreglo NUEVO solo con los elementos cuyo
 *   callback devuelve true. Sirve para SELECCIONAR (clasificados,
 *   disponibles...) sin modificar el original. Si nadie cumple, devuelve [].
 *
 * Ejecutar: node metodos-array/ejercicio7.js
 */

// ===== Misión A · Los clasificados =====
{
  const partidas = [320, 980, 75, 640, 500, 1200, 410];

  const clasificados = partidas.filter(p => p >= 500);
  const podio = partidas.filter(p => p > 900);
  const eliminados = partidas.filter(p => p < 500);
  const imposible = partidas.filter(p => p > 5000);

  console.log("Clasificados:", clasificados);
  console.log("Podio:", podio, "Cantidad:", podio.length);
  console.log("Eliminados:", eliminados);
  console.log("Imposible:", imposible);
}

/*
 * Salida esperada:
 *   Clasificados: [ 980, 640, 500, 1200 ]
 *   Podio: [ 980, 1200 ] Cantidad: 2
 *   Eliminados: [ 320, 75, 410 ]
 *   Imposible: []
 */

// ===== Misión B · El catálogo disponible =====
{
  const juegos = ["Pinball", "Galaxia", "Karts", "Zombis", "Laberinto", "Aereo"];
  const estados = ["disponible", "mantenimiento", "disponible", "disponible", "mantenimiento", "disponible"];

  const cabenEnLed = juegos.filter(j => j.length <= 8);
  const conO = juegos.filter(j => j.toLowerCase().includes("o"));
  // Usamos el índice para revisar el estado del mismo juego en el otro arreglo.
  const disponibles = juegos.filter((juego, i) => estados[i] === "disponible");

  // Dos formas de contar los que están en mantenimiento:
  const enMantenimientoCount1 = estados.filter(e => e === "mantenimiento").length;
  const enMantenimientoCount2 = estados.length - disponibles.length;

  // Cadena: primero seleccionamos (filter), luego transformamos (map).
  const disponiblesMayus = juegos
    .filter((j, i) => estados[i] === "disponible")
    .map(j => j.toUpperCase());

  console.log("Caben en LED:", cabenEnLed);
  console.log("Con 'o':", conO);
  console.log("Disponibles:", disponibles);
  console.log("En mantenimiento:", enMantenimientoCount1, enMantenimientoCount2);
  console.log("Disponibles en MAYÚS:", disponiblesMayus);
}

/*
 * Salida esperada:
 *   Caben en LED: [ 'Pinball', 'Galaxia', 'Karts', 'Zombis', 'Aereo' ]
 *   Con 'o': [ 'Zombis', 'Laberinto', 'Aereo' ]
 *   Disponibles: [ 'Pinball', 'Karts', 'Zombis', 'Aereo' ]
 *   En mantenimiento: 2 2
 *   Disponibles en MAYÚS: [ 'PINBALL', 'KARTS', 'ZOMBIS', 'AEREO' ]
 *
 * Paso 7: filter no puede transformar el formato de los datos (solo
 * selecciona) y map no puede cambiar la cantidad de elementos. Por eso para
 * esta operación hace falta encadenar los dos.
 */

/*
 * ===== Control de conocimiento =====
 * 1. Devuelve [] y 0: ningún elemento cumple x > 20, así que se retorna un
 *    arreglo vacío cuya propiedad length es 0.
 * 2. El elemento descartado fue 0. El callback retorna un número en vez de un
 *    booleano; filter lo interpreta como verdadero/falso y 0 cuenta como falso.
 * 3. const nombresLargos = ["Ana", "Beto", "Caro"].filter(n => n.length >= 4);
 * 4. filter devuelve un arreglo; para obtener el valor hay que acceder a la
 *    posición cero del resultado: b[0].
 */
