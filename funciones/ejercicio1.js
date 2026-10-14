/**
 * Nivel 1 — Ejercicio 1: Apertura Nova Arcade
 * -------------------------------------------------------------
 * Función usada: función tradicional SIN parámetros y SIN return
 *   (function nombre() { ... }).
 * Por qué: solo necesitamos agrupar varias líneas de console.log
 *   bajo un nombre para poder repetirlas cuantas veces queramos
 *   llamando a la función. No hace falta recibir ni devolver datos.
 *
 * Ejecutar: node funciones/ejercicio1.js
 */

// ===== Misión A · El cartel de bienvenida =====
// Declaramos la función una sola vez...
function mostrarBienvenida() {
  console.log("Nova Arcade");
  console.log("10:00 - 22:00");
  console.log("Ficha: $" + 2500);
}

// ...y la llamamos dos veces: el cartel se imprime dos veces.
mostrarBienvenida();
mostrarBienvenida();

/*
 * Salida esperada (x2):
 *   Nova Arcade
 *   10:00 - 22:00
 *   Ficha: $2500
 */

// ===== Misión B · El tablero de máquinas =====
// Variable global que la función lee para saber cuántas máquinas están ocupadas.
let maquinasOcupadas = 2;

function mostrarTablero() {
  console.log("--- TABLERO ---");
  // Recorremos las 5 máquinas: las primeras "maquinasOcupadas" salen OCUPADA.
  for (let i = 1; i <= 5; i++) {
    if (i <= maquinasOcupadas) {
      console.log("Maquina " + i + ": OCUPADA");
    } else {
      console.log("Maquina " + i + ": LIBRE");
    }
  }
  console.log("Libres: " + (5 - maquinasOcupadas));
}

mostrarTablero(); // con 2 ocupadas

/*
 * Entrada: maquinasOcupadas = 2
 * Salida esperada:
 *   --- TABLERO ---
 *   Maquina 1: OCUPADA
 *   Maquina 2: OCUPADA
 *   Maquina 3: LIBRE
 *   Maquina 4: LIBRE
 *   Maquina 5: LIBRE
 *   Libres: 3
 */

// Prueba: cambiamos la variable a 5 y volvemos a llamar la función.
maquinasOcupadas = 5;
mostrarTablero();

/*
 * Entrada: maquinasOcupadas = 5
 * Salida esperada: las cinco máquinas salen OCUPADA y "Libres: 0".
 */

/*
 * ===== Control de conocimiento =====
 * 1. mostrarTablero sin paréntesis hace referencia a la función, pero no obliga
 *    a JavaScript a ejecutar lo que está adentro; mostrarTablero() con paréntesis
 *    sí la ejecuta.
 * 2. Solo muestra "Abriendo..." porque en el código no hay nada que obligue a lo
 *    que está dentro de la función a aparecer (la función nunca se llama).
 * 3. Salen 12 líneas (4 × 3 = 12) porque cada llamado repite de nuevo la
 *    secuencia que va dentro de la función.
 * 4. Primero, para que el código se vea más limpio y legible; segundo, para que
 *    todo sea más fácil de manejar: si se modifica el horario o el valor, no hay
 *    que cambiar las 12 líneas, solo la función.
 */
