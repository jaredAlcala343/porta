import React from 'react';
import bombardierLogo from '../bombardier-logo.PNG'; // Importa el logo de Bombardier
import tgcLogo from '../tgc-logo.PNG'; // Importa el logo de TGC
import jabilLogo from '../jabil-logo.PNG'; // Importa el logo de Jabil
import enProduccionesLogo from '../en-producciones-logo.PNG'; // Importa el logo de E.N. Producciones
import sohologo from '../soho_logo.PNG'
import './ExperienciaProfesional.css';

const ExperienciaProfesional = () => {
  return (
    <section id="experiencia-profesional" className="experiencia">
    <h2>Experiencia Profesional</h2>
    <div class="container">
        <div class="card">
            <div class="content">
                <div class="imgBx">
                <img src={bombardierLogo} alt="Bombardier Logo" />
                </div>
                <div class="contentBx">
                    <div>
         
                        <h4>BOMBARDIER</h4>
                        <span>2024-2024</span>
                        <p>
                        Ofrecer soporte técnico para abordar inquietudes vinculadas a sistemas informáticos, redes y software asegurando la operatividad eficiente y efectiva tanto para usuarios individuales como para organizaciones.
                        </p>
                        <p>
                        Desarrollo de una aplicación en ASP.Net MVC con Visual Basic.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="content">
                <div class="imgBx">
                <img src={sohologo} alt="TGC Logo" />
                </div>
                <div class="contentBx">
                    <div>
                        <h4>Especialista en soporte</h4>
                        <span>2023-2024</span>
                        <p>
                        Resolver problemas técnicos y ofrecer soluciones para garantizar que los sistemas informáticos y el software funcionen sin problemas para los usuarios y las organizaciones.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="content">
                <div class="imgBx">
                <img src={tgcLogo} alt="Jabil Logo" />
                </div>
                <div class="contentBx">
                    <div>
                        <h4>Desarrollador de software</h4>
                        <h5>TGC</h5>
                        <span>2021-2023</span>
                        <p>
                        Diseñar, crear y mantener programas y aplicaciones informáticos.
                        </p>
                        <p>
                        Traducir las necesidades de los usuarios en soluciones informáticas funcionales.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="content">
                <div class="imgBx">
                <img src={jabilLogo} alt="Jabil Logo" />
                </div>
                <div class="contentBx">
                    <div>
                        <h4>Ingeniero de Soporte</h4>
                        <h5>JABIL</h5>
                        <span>2020-2021</span>
                        <p>
                        Proporcionar asistencia técnica y resolver problemas relacionados con los sistemas informáticos, las redes y el software, garantizando que los usuarios y las organizaciones puedan trabajar con eficiencia y eficacia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="content">
                <div class="imgBx">
                <img src={enProduccionesLogo} alt="E.N. Producciones Logo" />
                </div>
                <div class="contentBx">
                    <div>
                        <h4>Post Productor</h4>
                        <h5>E.N. PRODUCCIONES</h5>
                        <span>2019-2020</span>
                        <p>
                        Supervisar las fases finales de la producción de una película o vídeo, garantizando que el montaje, el diseño de sonido, los efectos visuales y otros procesos de postproducción se lleven a cabo con éxito para lograr el producto final deseado.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
};

export default ExperienciaProfesional;
