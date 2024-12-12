import React, { useState } from 'react';
import campersData from "../../api/camperSucess";
import "./styles/CampersGrid.css";

const CampersGrid = () => {

    const [campers, setCampers] = useState(campersData)


    return (
        <section className='campersgrid'>
            <h2 className='campersgrid-title'>NUESTROS CAMPERS</h2>
            <div className='grid-container'>
                {
                    campers.map((camper, index) => (
                        <div key={index} className="developer-card">
                            <div className="camper-image">
                                <img src={camper.image} alt={camper.name} className="card-image" />
                            </div>
                            <div className="card-content">
                                <h3>{camper.name}</h3>
                                <p className="title">{camper.role}</p>
                                <div className="technologies">
                                    <span className="tech-label">Tecnologias:</span>
                                    <p>{camper.skills.join(", ")}</p>
                                </div>
                                <div className="buttons">
                                    <button className="info-button">Mas Info</button>
                                    <button className="sponsor-button">Patrocinar</button>
                                </div>
                            </div>
                        </div>
                    ))
                }




            </div>
        </section>


    );
};

export default CampersGrid;