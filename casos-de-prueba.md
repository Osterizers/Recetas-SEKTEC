# SEKTEC Recetas — Casos de prueba

**Proyecto:** Recetario web desarrollado en React y Vite  
**Alcance:** Dos recetas estáticas: Aguachiles de winnies en salsa verde y Orejas de pollo a las brasas.  
**Objetivo:** Verificar la visualización de las recetas y la consulta de sus detalles.  
**Nota:** Los casos están diseñados, pero no se han ejecutado ni validado. Completar el resultado real después de probar la aplicación.

## CP-001 — Visualización de las dos recetas

| Campo | Detalle |
|---|---|
| ID | CP-001 |
| Función | Listado de recetas |
| Prioridad | Alta |
| Precondición | Proyecto instalado e iniciado con `npm run dev` |
| Datos de prueba | Nombres de las dos recetas definidas en el código |
| Estado | Pendiente de ejecución |

**Pasos:**
1. Abrir la URL local que muestre Vite (normalmente `http://localhost:5173/`).
2. Revisar la página principal.
3. Buscar la tarjeta de **Aguachiles de winnies en salsa verde**.
4. Buscar la tarjeta de **Orejas de pollo a las brasas**.
5. Comprobar que ambas tarjetas muestren título, imagen y opción de consultar la receta.

**Resultado esperado:** Las dos recetas aparecen correctamente y sus textos e imágenes son visibles.

**Resultado obtenido:** __________________________  
**Estado final:** ☐ Aprobado ☐ Fallido ☐ No ejecutado  
**Evidencia:** Captura de pantalla de la página principal.  
**Observaciones:** __________________________

## CP-002 — Consulta de ingredientes y preparación

| Campo | Detalle |
|---|---|
| ID | CP-002 |
| Función | Consulta de detalles de una receta |
| Prioridad | Alta |
| Precondición | La página muestra las dos recetas y sus controles de consulta |
| Datos de prueba | Ambas recetas disponibles en la página |
| Estado | Pendiente de ejecución |

**Pasos:**
1. Abrir el recetario.
2. Seleccionar el botón o control para consultar **Aguachiles de winnies en salsa verde**.
3. Verificar que aparezcan sus ingredientes y los pasos de preparación.
4. Volver al listado o cerrar el detalle, según el diseño de la página.
5. Consultar **Orejas de pollo a las brasas**.
6. Verificar que se muestren los ingredientes y pasos correspondientes a esta segunda receta, sin mezclar el contenido de la primera.

**Resultado esperado:** Se puede consultar la información de cada receta y el contenido corresponde a la opción seleccionada.

**Resultado obtenido:** __________________________  
**Estado final:** ☐ Aprobado ☐ Fallido ☐ No ejecutado  
**Evidencia:** Capturas de los detalles de cada receta.  
**Observaciones:** __________________________

## Recomendación de ejecución

Ejecutar cada caso en el navegador, guardar las capturas de pantalla y registrar el resultado real. Si falla una prueba, anotar el error observado y repetirla después de corregirlo.
