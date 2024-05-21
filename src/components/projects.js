import React from 'react';
import './projects.css';
import puntoVentaImg from '../punto_de_venta.JPG'; // Importa la imagen del punto de venta

const Projects = () => {
  return (
    <section className="projects">
      <h2>Proyectos</h2>
      <div className="project">
        <img src={puntoVentaImg} alt="Punto de Venta" className="project-img" />
        <div className="project-info">
          <h3>Punto de Venta</h3>
          <p>
Un punto de venta sencillo sin base de datos registra transacciones, calcula el total de ventas, imprime recibos y gestiona inventario básico. Permite agregar productos, modificar precios y aplicar descuentos. Facilita el pago en efectivo y tarjeta, emite facturas y genera reportes de ventas diarias. Esencialmente, actúa como una caja registradora electrónica, manteniendo un registro básico de las transacciones comerciales sin almacenar datos a largo plazo.</p>
          <a href='https://store-ten-tawny.vercel.app'>Visitar Proyecto</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;