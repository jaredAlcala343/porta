import React from 'react';
import './Gallery.css'; // Asegúrate de tener el archivo CSS para estilizar la galería
import imagen1 from '../foto 1.JPG';
import imagen2 from '../foto 2.JPG';
import imagen3 from '../foto1.jpg';
import imagen4 from '../foto2.jpg';
import imagen5 from '../foto3.jpg';
import imagen6 from '../foto4.jpg';
import imagen7 from '../foto5.jpg';
import imagen8 from '../foto6.jpg';
import imagen9 from '../foto7.jpg';
import imagen11 from '../foto9.jpg';
import imagen12 from '../foto10.jpg';
import imagen13 from '../foto11.jpg';
import imagen14 from '../foto12.jpg';
import imagen15 from '../foto13.JPG';
import imagen16 from '../foto14.jpg';


const Gallery = () => {
  return (
    <div className='galerias'>
        <h1>GALERIA</h1>
    <section className="gallery" id="galeria">
        
      <div className="image-container">
        <img src={imagen1} alt="Imagen 1" />
      </div>
      <div className="image-container">
        <img src={imagen2} alt="Imagen 2" />
      </div>
      <div className="image-container">
        <img src={imagen3} alt="Imagen 1" />
      </div>
      <div className="image-container">
        <img src={imagen4} alt="Imagen 2" />
      </div>
      <div className="image-container">
        <img src={imagen5} alt="Imagen 1" />
      </div>
      <div className="image-container">
        <img src={imagen6} alt="Imagen 2" />
      </div>
      <div className="image-container">
        <img src={imagen7} alt="Imagen 1" />
      </div>
      <div className="image-container">
        <img src={imagen8} alt="Imagen 2" />
      </div>
      <div className="image-container">
        <img src={imagen9} alt="Imagen 1" />
      </div>
      <div className="image-container">
        <img src={imagen11} alt="Imagen 1" />
      </div>
      <div className="image-container">
        <img src={imagen12} alt="Imagen 2" />
      </div>
      <div className="image-container">
        <img src={imagen13} alt="Imagen 1" />
      </div>
      <div className="image-container">
        <img src={imagen14} alt="Imagen 2" />
      </div>
      <div className="image-container">
        <img src={imagen15} alt="Imagen 1" />
      </div>
      <div className="image-container">
        <img src={imagen16} alt="Imagen 2" />
      </div>
    </section>
    </div>
  );
};

export default Gallery;