import React from 'react';
import './about.css'; // Importamos el archivo de estilos CSS
import profilePic from '../foto1.jpg'; // Ajusta la ruta según la estructura de tu proyecto



const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me-content">
        <img src={profilePic} alt="Jared Alcala" className="profile-pic-Am" />
        <div className="about-me-text">
          <h2>About Me</h2>
          <p>Soy un apasionado ingeniero en sistemas con experiencia en desarrollo de software. Me encanta crear soluciones innovadoras y trabajar en equipo para lograr grandes resultados.</p>
          <div className="social-links">
            <a href="https://github.com/jaredAlcala343" target="_blank" rel="noopener noreferrer"><i className="fab fa-github">github</i></a>
            <a href="https://www.instagram.com/jared.alcala.902/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram">instagram</i></a>
            <a href="https://www.linkedin.com/in/jared-alcala-955816195/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin">linkedin</i></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;