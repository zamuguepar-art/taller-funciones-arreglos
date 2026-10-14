# Taller Funciones y Arreglos — Niveles 1 al 10

**Integrantes:** Samuel Guevara Parra y Jerónimo Henao Pérez

Solución del taller de JavaScript ambientado en el arcade **Nova Arcade**. Cubre funciones tradicionales, arrow functions, arreglos y métodos de array (`map`, `filter`, `some`, `every`, `sort`, `forEach` y `reduce`).

Cada archivo `.js` tiene al inicio un comentario que explica **qué función o método se usa y por qué**, comentarios a lo largo del código, la **salida esperada** de cada prueba y, al final, las respuestas del **Control de conocimiento**.

## Estructura del repositorio

```
taller-funciones-arreglos/
├── README.md
├── funciones/            ← Funciones tradicionales
│   ├── ejercicio1.js     (Nivel 1 — Apertura Nova Arcade)
│   └── ejercicio2.js     (Nivel 2 — Entrada y salida)
├── arrow-functions/      ← Arrow functions
│   └── ejercicio3.js     (Nivel 3 — Tres traducciones)
├── arreglos/             ← Arreglos básicos y métodos que mutan
│   ├── ejercicio4.js     (Nivel 4 — La caja de datos)
│   └── ejercicio5.js     (Nivel 5 — La fila y el mantenimiento)
└── metodos-array/        ← map, filter, some/every, sort, forEach, reduce
    ├── ejercicio6.js     (Nivel 6 — La fábrica: map)
    ├── ejercicio7.js     (Nivel 7 — Quién entra a la final: filter)
    ├── ejercicio8.js     (Nivel 8 — El detector: some / every)
    ├── ejercicio9.js     (Nivel 9 — Tabla final: sort)
    └── ejercicio10.js    (Nivel 10 — La última vuelta: forEach, cadenas y reduce)
```

## Cómo ejecutar

Se necesita [Node.js](https://nodejs.org/). Desde la carpeta del repositorio:

```bash
node funciones/ejercicio1.js
```

Cambia la ruta para ejecutar cualquier otro ejercicio.

## Documentación de los ejercicios

### Funciones tradicionales

| Ejercicio | Qué usamos | Por qué | Entrada → Salida de ejemplo |
|---|---|---|---|
| [ejercicio1.js](funciones/ejercicio1.js) | `function` sin parámetros ni `return` | Agrupar varios `console.log` bajo un nombre y repetirlos con cada llamado | `mostrarBienvenida()` ×2 → el cartel sale 2 veces · `maquinasOcupadas = 2` → `Libres: 3` |
| [ejercicio2.js](funciones/ejercicio2.js) | `function` con parámetros y `return` | La función recibe datos y **devuelve** un resultado que se puede reutilizar o pasar a otra función | `precioPaquete(5)` → `10000` · `puntosATickets(250, true)` → `4` · `precioPaquete(puntosATickets(1000, true))` → `40000` |

### Arrow functions

| Ejercicio | Qué usamos | Por qué | Entrada → Salida de ejemplo |
|---|---|---|---|
| [ejercicio3.js](arrow-functions/ejercicio3.js) | `const f = (x) => expresión` | Funciones de una sola expresión: más cortas y con `return` implícito | `mitad(9)` → `4.5` · `aplicarDescuento(18000, 25)` → `13500` · `nombreCorto("robloxsixseven")` → `"robloxsixsev"` |

### Arreglos

| Ejercicio | Qué usamos | Por qué | Entrada → Salida de ejemplo |
|---|---|---|---|
| [ejercicio4.js](arreglos/ejercicio4.js) | Índices, `length`, `for`, `for...of`, `indexOf` | Leer y recorrer listas: `for` cuando se necesita la posición, `for...of` cuando solo importa el valor | `[320, 150, 980, 640, 75, 510, 500, 1200]` → Total `4375`, Clasificados `5`, Promedio `546.9` |
| [ejercicio5.js](arreglos/ejercicio5.js) | `push`, `shift`, `unshift`, `pop`, `splice`, `reverse` | Simular una fila y un catálogo que cambian: estos métodos modifican el mismo arreglo | `splice(2, 2)` sobre el catálogo → `[ 'Karts', 'Zombis' ]` · fila final → `[ 'Tungtungsahur', 'Beto', 'Caro', 'Dani', 'Marcos' ]` |

### Métodos de array

| Ejercicio | Qué usamos | Por qué | Entrada → Salida de ejemplo |
|---|---|---|---|
| [ejercicio6.js](metodos-array/ejercicio6.js) | `map` | Transformar cada elemento y obtener un arreglo nuevo del mismo tamaño sin tocar el original | `[2500, 18000, 9000, 4500, 12000].map(p => p * 0.8)` → `[2000, 14400, 7200, 3600, 9600]` |
| [ejercicio7.js](metodos-array/ejercicio7.js) | `filter` y `filter` + `map` | Quedarse solo con los elementos que cumplen una condición | `partidas.filter(p => p >= 500)` → `[980, 640, 500, 1200]` |
| [ejercicio8.js](metodos-array/ejercicio8.js) | `some` / `every` | Obtener una respuesta sí/no: ¿alguno cumple? / ¿todos cumplen? | `[true, true, true, false, true, true].every(r => r)` → `false` · semáforo → `ROJO` |
| [ejercicio9.js](metodos-array/ejercicio9.js) | `sort` con comparador, `[...copia]`, `localeCompare`, `slice` | Ordenar rankings sin perder el orden original (por eso se ordena una copia) | `[320, 1200, 75, 980, 510]` → `[1200, 980, 510, 320, 75]` · Campeón → `Beto` |
| [ejercicio10.js](metodos-array/ejercicio10.js) | `forEach`, cadena `filter → sort → map → forEach`, `reduce` | `forEach` solo recorre para imprimir; la cadena arma el tablero paso a paso; `reduce` acumula todo en un solo valor | Tablero → `1. BETO — 12 tickets`, `2. DANI — 9 tickets`, `3. EDU — 5 tickets` · `reduce` total de puntos → `3525` |

## Resumen: ¿qué devuelve cada método y si muta?

| Método | ¿Qué devuelve? | ¿Muta el original? |
|---|---|---|
| `map` | Un arreglo nuevo del mismo tamaño | No |
| `filter` | Un arreglo nuevo, más corto o igual (o vacío) | No |
| `some` / `every` | `true` o `false` | No |
| `sort` | El mismo arreglo, ya ordenado | **Sí** |
| `forEach` | `undefined` | No |
| `reduce` | Un solo valor acumulado | No |
| `push` / `unshift` | La nueva longitud | **Sí** |
| `pop` / `shift` | El elemento retirado | **Sí** |
| `splice` | Un arreglo con los elementos retirados | **Sí** |
