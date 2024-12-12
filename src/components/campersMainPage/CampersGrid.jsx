import React, { useState } from 'react';
import { Pagination } from 'antd';
import campersData from "../../api/camperSucess";
import "./styles/CampersGrid.css";

const CampersGrid = () => {

    const campersPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage -1) * campersPerPage;
    const endIndex = startIndex + campersPerPage;
    const currentCampers = campersData.slice(startIndex, endIndex)
    
    const handlePageChange = (page) => {
        setCurrentPage(page)
    }


    return (
        <section className='campersgrid'>
            <h2 className='campersgrid-title'>NUESTROS CAMPERS</h2>
            <div className='grid-container'>
                {
                    currentCampers.map((camper, index) => (
                        <div key={index} className="developer-card">
                            <div className="camper-image">
                                <img src={camper.image} alt={camper.name} className="card-image" />
                            </div>
                            <div className="dev-card-content">
                                <div className='camper-maininfo'>
                                    <h3 className='camper-name'>{camper.name}</h3>
                                    <p className="camper-title">{camper.role}</p>
                                </div>
                                <div className="technologies">
                                    <span className="tech-label">Tecnologias:</span>
                                    <p>
                                        {camper.skills.map(skill => skill.name).join(", ")}
                                    </p>
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
            <Pagination 
                className='campers-pagination'
                current={currentPage}
                pageSize={campersPerPage}
                total={campersData.length}
                onChange={handlePageChange}
            />
        </section>


    );
};

export default CampersGrid;