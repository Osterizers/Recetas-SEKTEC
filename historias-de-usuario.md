# SEKTEC Recetas — Historias de usuario

**Proyecto:** Aplicación web de recetas creada con React y Vite.  
**Alcance:** Recetario estático con dos recetas; no necesita cuentas ni base de datos.

## HU-001 — Ver las recetas disponibles

**Como** visitante del recetario, **quiero** visualizar las recetas disponibles al abrir la página, **para** elegir qué platillo preparar.

**Criterios de aceptación:**
- En la página principal se muestran **Aguachiles de winnies en salsa verde** y **Orejas de pollo a las brasas**.
- Cada receta tiene un nombre identificable.
- Es posible distinguir una receta de la otra.

**Prioridad:** Alta.

## HU-002 — Consultar ingredientes

**Como** visitante, **quiero** consultar los ingredientes de la receta seleccionada, **para** saber qué necesito antes de cocinar.

**Criterios de aceptación:**
- Existe una opción visible para consultar cada receta.
- Se muestran los ingredientes de la receta elegida.
- Los ingredientes de una receta no se confunden con los de la otra.

**Prioridad:** Alta.

## HU-003 — Seguir los pasos de preparación

**Como** visitante, **quiero** leer las instrucciones de preparación, **para** elaborar el platillo paso a paso.

**Criterios de aceptación:**
- Cada receta tiene pasos de preparación.
- Los pasos aparecen en un orden comprensible.
- La información mostrada corresponde a la receta seleccionada.

**Prioridad:** Alta.

## HU-004 — Usar el recetario en celular

**Como** visitante que utiliza un teléfono, **quiero** que el contenido se adapte a mi pantalla, **para** leer las recetas sin dificultad.

**Criterios de aceptación:**
- Los títulos, botones y textos se pueden leer en una pantalla pequeña.
- El contenido no requiere desplazamiento horizontal innecesario.
- Los controles para consultar las recetas son accesibles mediante el tacto.

**Prioridad:** Media.

## Relación con los casos de prueba

| Historia | Caso asociado |
|---|---|
| HU-001 | CP-001: Visualización de las dos recetas |
| HU-002 | CP-002: Consulta de ingredientes y preparación |
| HU-003 | CP-002: Consulta de ingredientes y preparación |
| HU-004 | Pendiente de ampliar pruebas de diseño responsivo |

**Nota:** Estos son requisitos y criterios de aceptación propuestos; deben contrastarse con la versión final del proyecto.
