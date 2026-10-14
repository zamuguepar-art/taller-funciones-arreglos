/**
 * Nivel 9 — Tabla final del torneo (sort)
 * -------------------------------------------------------------
 * Métodos usados: sort(comparador), spread [...arr], slice, map,
 *   localeCompare.
 * Por qué:
 *   - sort ordena, pero MUTA el arreglo original; por eso primero hacemos
 *     una copia con [...arr] cuando queremos conservar el orden de llegada.
 *   - Sin comparador, sort ordena como texto ("1200" < "320"), así que para
 *     números usamos (a, b) => b - a (mayor a menor).
 *   - localeCompare compara textos para ordenar alfabéticamente.
 *   - slice(0, 3) toma el top 3 y map le da formato.
 *
 * Ejecutar: node metodos-array/ejercicio9.js
 */

// ===== Misión A · El ranking =====
{
  const llegada = [320, 1200, 75, 980, 510];

  const desastre = [...llegada].sort(); // sin comparador → orden de texto
  console.log("Sin comparador:", desastre);

  const ranking = [...llegada].sort((a, b) => b - a);
  console.log("Ranking:", ranking);
  console.log("Llegada original:", llegada); // intacta gracias a la copia

  llegada.sort((a, b) => b - a); // ahora sí mutamos el original
  console.log("Llegada mutado:", llegada);
}

/*
 * Salida esperada:
 *   Sin comparador: [ 1200, 320, 510, 75, 980 ]
 *   Ranking: [ 1200, 980, 510, 320, 75 ]
 *   Llegada original: [ 320, 1200, 75, 980, 510 ]
 *   Llegada mutado: [ 1200, 980, 510, 320, 75 ]
 *
 * | Operación               | Lo que salió de verdad                              |
 * |-------------------------|-----------------------------------------------------|
 * | sort() sin comparador   | [1200, 320, 510, 75, 980]                           |
 * | sort((a, b) => b - a)   | [1200, 980, 510, 320, 75]                           |
 * | llegada tras las copias | [320, 1200, 75, 980, 510] (intacta)                 |
 * | llegada tras ordenarla  | [1200, 980, 510, 320, 75] (se perdió el orden)      |
 */

// ===== Misión B · La tabla de campeones =====
{
  const jugadores = [
    { nombre: "Ana", pts: 320 },
    { nombre: "Beto", pts: 1200 },
    { nombre: "Caro", pts: 75 },
    { nombre: "Dani", pts: 980 },
    { nombre: "Edu", pts: 510 }
  ];

  console.log("Tercer jugador:", jugadores[2].nombre);

  const ranking = [...jugadores].sort((a, b) => b.pts - a.pts);
  console.log("Campeón:", ranking[0].nombre);

  const alfabetico = [...jugadores].sort((a, b) => a.nombre.localeCompare(b.nombre));
  console.log("Orden alfabético:", alfabetico.map(j => j.nombre));

  const top3 = ranking
    .slice(0, 3)
    .map((j, i) => (i + 1) + ". " + j.nombre.toUpperCase() + " " + j.pts + " pts");
  console.log("Top 3:", top3);

  // Paso 6: empate entre Dani y Fer.
  jugadores.push({ nombre: "Fer", pts: 980 });
  const ranking2 = [...jugadores].sort((a, b) => b.pts - a.pts);
  console.log("Ranking con Fer:", ranking2.map(j => j.nombre + " " + j.pts));
  console.log("Comparador Dani vs Fer:", 980 - 980);

  // Paso 7: el original conserva el orden de llegada.
  console.log("jugadores al final:", jugadores.map(j => j.nombre));
}

/*
 * Salida esperada:
 *   Tercer jugador: Caro
 *   Campeón: Beto
 *   Orden alfabético: [ 'Ana', 'Beto', 'Caro', 'Dani', 'Edu' ]
 *   Top 3: [ '1. BETO 1200 pts', '2. DANI 980 pts', '3. EDU 510 pts' ]
 *   Ranking con Fer: [ 'Beto 1200', 'Dani 980', 'Fer 980', 'Edu 510', 'Ana 320', 'Caro 75' ]
 *   Comparador Dani vs Fer: 0
 *   jugadores al final: [ 'Ana', 'Beto', 'Caro', 'Dani', 'Edu', 'Fer' ]
 *
 * Paso 6 (empate): quedó primero Dani y después Fer. El comparador devolvió 0,
 * así que se consideran equivalentes y mantienen su orden de inserción.
 * Paso 7 (original): jugadores se mantiene intacto porque se ordenó una copia
 * hecha con el operador spread [...].
 */

/*
 * ===== Control de conocimiento =====
 * 1. Devuelve [100, 25, 9]: sin comparador, sort convierte los elementos a
 *    texto y los ordena alfabéticamente ("100" < "25" < "9").
 * 2. Mayor a menor: (a, b) => b - a   ·   Menor a mayor: (a, b) => a - b
 * 3. sort modifica el arreglo sobre el que se llama y devuelve ese mismo
 *    arreglo, así que copia y lista son el mismo. Solución:
 *    const copia = [...lista].sort((a, b) => a - b);
 * 4. (a, b) => a.nombre.localeCompare(b.nombre)
 */
