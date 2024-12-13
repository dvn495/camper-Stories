import React, { useState } from 'react';
import { Pagination } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import campersData from "../../api/camperSucess";
import "./styles/CampersGrid.css";
import "./styles/GridPagination.css";

const CampersGrid = () => {
    const campersPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * campersPerPage;
    const endIndex = startIndex + campersPerPage;
    const currentCampers = campersData.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const animationVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
    };

    return (
        <section className='campersgrid'>
            <h2 className='campersgrid-title'>NUESTROS CAMPERS</h2>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentPage} // Importante: clave única basada en la página actual
                    className='grid-container'
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={animationVariants}
                    transition={{ duration: 0.2 }}
                >
                    {currentCampers.map((camper) => (
                        <div key={camper.id} className="developer-card">
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
                                    <p>{camper.skills.map(skill => skill.name).join(", ")}</p>
                                </div>
                                <div className="buttons">
                                    <button className="info-button">Mas Info</button>
                                    <button className="sponsor-button">Patrocinar</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </AnimatePresence>
            <Pagination
                className="campers-pagination"
                current={currentPage}
                pageSize={campersPerPage}
                total={campersData.length}
                onChange={handlePageChange}
                itemRender={(page, type, originalElement) => {
                    if (type === "page") {
                        return (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {originalElement}
                            </motion.div>
                        );
                    }
                    return originalElement;
                }}
            />

        </section>
    );
};

export default CampersGrid;
