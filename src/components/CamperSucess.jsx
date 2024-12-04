import React from "react";
import "../styles/camperSucces.css";

// Importa las imágenes directamente
import campersexitosos from "../assets/campersexitosos.png";
import christopherImg from "../assets/Christopher.svg";
import silviaImg from "../assets/Silvia.svg";
import hernanImg from "../assets/Hernan.svg";
import angieImg from "../assets/Angie.svg";

const CamperSuccess = () => {
  return (
    <div className="container">
      <div className="title">
        <img src={campersexitosos} alt="Campers Exitosos" />
      </div>

      <div className="cards-container">
        <a href="#" className="card">
          <div className="perfil">
            <img src={christopherImg} alt="Cristopher Buitrago" className="card-image" />
          </div>
          <div className="card-content">
            <h3>Cristopher Buitrago</h3>
            <h4>Fullstack Software Developer</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Justo
              suscipit pharetra semectus duis, modi himenaeos liquido dopibus
              fermentum pellentesque vivamus vulputate mollis magnus sed.
            </p>
          </div>
        </a>

        <a href="#" className="card">
          <div className="perfil">
            <img src={silviaImg} alt="Silvia Angarita" className="card-image" />
          </div>
          <div className="card-content">
            <h3>Silvia Angarita</h3>
            <h4>Fullstack Software Developer</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Justo
              suscipit pharetra semectus duis, modi himenaeos liquido dopibus
              fermentum pellentesque vivamus vulputate mollis magnus sed.
            </p>
          </div>
        </a>

        <a href="#" className="card">
          <div className="perfil">
            <img src={hernanImg} alt="Hernan Mendez" className="card-image" />
          </div>
          <div className="card-content">
            <h3>Hernan Mendez</h3>
            <h4>Fullstack Software Developer</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Justo
              suscipit pharetra semectus duis, modi himenaeos liquido dopibus
              fermentum pellentesque vivamus vulputate mollis magnus sed.
            </p>
          </div>
        </a>

        <a href="#" className="card">
          <div className="perfil">
            <img src={angieImg} alt="Angie Ardila" className="card-image" />
          </div>
          <div className="card-content">
            <h3>Angie Ardila</h3>
            <h4>Fullstack Software Developer</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Justo
              suscipit pharetra semectus duis, modi himenaeos liquido dopibus
              fermentum pellentesque vivamus vulputate mollis magnus sed.
            </p>
          </div>
        </a>
      </div>

      <div className="navigation">
        <button className="nav-button">←</button>
        <button className="nav-button">→</button>
      </div>
    </div>
  );
};

export default CamperSuccess;
