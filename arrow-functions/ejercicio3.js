/**
 * Nivel 3 — Tres traducciones (arrow functions)
 * -------------------------------------------------------------
 * Función usada: arrow functions  const nombre = (params) => expresión;
 * Por qué: cuando la función es una sola expresión (una división, una
 *   comparación, un corte de texto) la flecha es más corta y el return
 *   es implícito: lo que va después de => se devuelve automáticamente.
 *
 * Ejecutar: node arrow-functions/ejercicio3.js
 */

// ===== Misión A · Tres traducciones a flecha =====
const mitad = n => n / 2;                       // un parámetro: sin paréntesis
const esCaro = precio => precio > 5000;          // devuelve true/false
const etiqueta = (juego, piso) => juego + " (piso " + piso + ")"; // dos parámetros: con paréntesis

console.log(mitad(9));               // 4.5
console.log(esCaro(2500));           // false
console.log(etiqueta("Pac-Man", 2)); // Pac-Man (piso 2)

// ===== Misión B · La caja de herramientas =====
const esGratis = precio => precio === 0;
const aplicarDescuento = (precio, porcentaje) => precio - precio * porcentaje / 100;
const nombreCorto = texto => texto.slice(0, 12);   // primeros 12 caracteres
const alcanza = (saldo, precio) => saldo >= precio;

// Datos de entrada del recibo
const precioOriginal = 18000;
const descuento = 25;
const juego = "robloxsixseven";
const saldo = 15000;

const precioFinal = aplicarDescuento(precioOriginal, descuento);

console.log(nombreCorto(juego));          // robloxsixsev
console.log(precioFinal);                 // 13500
console.log(esGratis(precioFinal));       // false
console.log(alcanza(saldo, precioFinal)); // true

/*
 * | Línea del recibo           | Resultado    |
 * |----------------------------|--------------|
 * | Nombre recortado del juego | robloxsixsev |
 * | Precio con descuento       | 13500        |
 * | ¿Es gratis?                | No (false)   |
 * | ¿Le alcanza el saldo?      | Sí (true)    |
 */

// ===== Paso 6 · Rompe y repara =====
// Con llaves y sin return, la flecha devuelve undefined: las llaves abren un
// bloque y nadie devuelve el valor.
const esGratisRoto = precio => { precio === 0 };
console.log(esGratisRoto(13500)); // undefined
console.log(esGratisRoto(0));     // undefined
// Arreglo: quitar las llaves (como esGratis) o escribir  { return precio === 0; }

// ===== Paso 7 · Argumenta =====
// aplicarDescuento quedaría más clara como function clásica: tiene dos
// parámetros y una fórmula, y con llaves se puede separar en pasos con nombre.
function aplicarDescuentoClasica(precio, porcentaje) {
  const rebaja = precio * porcentaje / 100;
  return precio - rebaja;
}
console.log(aplicarDescuentoClasica(18000, 25)); // 13500
// Las otras tres herramientas son una comparación o un corte de una sola
// expresión, y se leen mejor como flecha.

/*
 * ===== Control de conocimiento =====
 * 1. Da undefined; se deben quitar las llaves (o agregar return).
 * 2. const sumar = (a, b) => a + b;
 * 3. const a = (x) => x + 1;  → sobra el paréntesis, x es un solo parámetro.
 *    const b = (x, y) => x + y; → sí se necesita, son dos parámetros.
 * 4. Nos gusta usar function y return, como en el ejemplo de encender máquina,
 *    porque así es más fácil de leer cuando hay mucho texto y no solo números.
 */
