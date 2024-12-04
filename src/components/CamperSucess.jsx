import React from "react";
import "../styles/camperSucces.css";

const CamperSuccess = () => {
  return (
    <div className="container">
      <div className="title">
        <img src="../assets/img/campersexitosos.png" alt="Campers Exitosos" />
      </div>

      <div className="cards-container">
        <a href="#" className="card">
          <div className="perfil">
            <img
              src="../assets/img/Christopher Daniel Ramirez Buitrago 1.svg"
              alt="Cristopher Buitrago"
              className="card-image"
            />
            <div className="card-img"></div>
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
            <img
              src="../assets/img/Silvia Giovanna Angarita Castillo 1.svg"
              alt="Silvia Angarita"
              className="card-image"
            />
            <div className="card-img"></div>
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
            <img
              src="../assets/img/Hernan Mendez Guerrero 1.svg"
              alt="Hernan Mendez"
              className="card-image"
            />
            <div className="card-img"></div>
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
            <img
              src="../assets/img/Angie Katherine Ardila Parra 1.svg"
              alt="Angie Ardila"
              className="card-image"
            />
            <div className="card-img"></div>
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
