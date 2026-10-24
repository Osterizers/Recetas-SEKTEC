import React from "react";
import { useState } from 'react';

// Las recetas se guardan aquí: no necesitamos una base de datos.
const recetas = [
  {
    id: 1,
    nombre: 'Aguachiles de winnies en salsa verde',
    descripcion: 'Una botana fresca, picosita y con mucho limón.',
    tiempo: '25 minutos',
    porciones: '4 personas',
    imagen: 'https://www.chimex.mx/storage/app/uploads/public/61f/d58/8e5/thumb_473_1400_584_0_0_crop.jpg',
    imagenAlternativa: 'Aguachile de salchichas con salsa verde',
    ingredientes: [
      '8 salchichas tipo winnie, listas para comer',
      '6 limones (su jugo)',
      '2 chiles serranos',
      '1 pepino',
      '1/2 cebolla morada',
      '1 puñito de cilantro',
      'Sal y pimienta al gusto',
      'Tostadas para acompañar'
    ],
    pasos: [
      'Corta las salchichas en rodajas y colócalas en un recipiente.',
      'Licúa el jugo de limón con los chiles, el cilantro, sal y un poco de agua.',
      'Rebana el pepino y la cebolla morada en tiras delgadas.',
      'Mezcla las salchichas, el pepino y la cebolla con la salsa verde.',
      'Refrigera 15 minutos y sirve con tostadas.'
    ]
  },
  {
    id: 2,
    nombre: 'Orejas de pollo a las brasas',
    descripcion: 'Tiritas de pollo en forma de orejitas, doraditas al carbón.',
    tiempo: '45 minutos',
    porciones: '4 personas',
    imagen: 'https://img77.uenicdn.com/image/upload/v1568137039/business/f1093e3e-4410-4cfb-b9ee-6e2cb9362fd4/IMG-20190822-142016-592jpg.jpg',
    imagenAlternativa: 'Pollo dorado cocinándose en una parrilla de carbón',
    ingredientes: [
      '600 g de pechuga de pollo sin hueso',
      '2 cucharadas de aceite',
      '2 dientes de ajo picados',
      '1 cucharadita de paprika',
      '1 limón (su jugo)',
      'Sal y pimienta al gusto',
      'Tortillas y salsa para acompañar'
    ],
    pasos: [
      'Corta la pechuga en tiras delgadas y curvas, parecidas a orejitas.',
      'Mezcla aceite, ajo, paprika, limón, sal y pimienta.',
      'Unta el pollo con el marinado y déjalo reposar 15 minutos en refrigeración.',
      'Coloca el pollo sobre una parrilla limpia a fuego medio, sin llamas directas.',
      'Voltea hasta que esté dorado y alcance 74 °C en el centro.',
      'Sirve con tortillas y tu salsa favorita.'
    ]
  }
];

function TarjetaReceta({ receta }) {
  const [mostrarPreparacion, cambiarPreparacion] = useState(false);

  return (
    <article className="tarjeta-receta" id={`receta-${receta.id}`}>
      <img className="imagen-receta" src={receta.imagen} alt={receta.imagenAlternativa} />
      <div className="contenido-receta">
        <p className="categoria">RECETA CASERA</p>
        <h2>{receta.nombre}</h2>
        <p className="descripcion">{receta.descripcion}</p>
        <div className="datos-receta">
          <span>⏱ {receta.tiempo}</span>
          <span>🍽 {receta.porciones}</span>
        </div>
        <button
          className="boton-receta"
          type="button"
          onClick={() => cambiarPreparacion(!mostrarPreparacion)}
          aria-expanded={mostrarPreparacion}
        >
          {mostrarPreparacion ? 'Ocultar receta ↑' : 'Ver receta ↓'}
        </button>
        {mostrarPreparacion && (
          <section className="detalle-receta">
            <h3>Ingredientes</h3>
            <ul>
              {receta.ingredientes.map((ingrediente, indice) => (
                <li key={indice}>{ingrediente}</li>
              ))}
            </ul>
            <h3>Preparación</h3>
            <ol>
              {receta.pasos.map((paso, indice) => (
                <li key={indice}>{paso}</li>
              ))}
            </ol>
          </section>
        )}
      </div>
    </article>
  );
}

export default function Aplicacion() {
  return (
    <>
      <header className="encabezado">
        <div className="contenedor encabezado-interior">
          <a href="#inicio" className="nombre-sitio">🍴 SEKTEC <span>Recetas</span></a>
          <nav aria-label="Menú principal">
            <a href="#recetas">Nuestras recetas</a>
          </nav>
        </div>
      </header>

      <main id="inicio">
        <section className="presentacion">
          <div className="contenedor">
            <span className="etiqueta">HECHO CON SABOR</span>
            <h1>Dos recetas, <span>mucho antojo.</span></h1>
            <p>Descubre dos ideas deliciosas para preparar en casa. ¡Fáciles y sin complicaciones!</p>
            <a className="enlace-principal" href="#recetas">Explorar recetas ↓</a>
          </div>
        </section>

        <section className="contenedor seccion-recetas" id="recetas">
          <div className="titulo-seccion">
            <p className="categoria">PARA COCINAR HOY</p>
            <h2>Nuestras recetas</h2>
            <p>Elige la que más se te antoje y conoce cómo prepararla.</p>
          </div>
          <div className="cuadricula-recetas">
            {recetas.map((receta) => (
              <TarjetaReceta key={receta.id} receta={receta} />
            ))}
          </div>
        </section>
      </main>

      <footer className="pie-pagina">
        <p>SEKTEC Recetas · Proyecto escolar desarrollado con React</p>
      </footer>
    </>
  );
}
