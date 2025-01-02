import React, { useState, useEffect } from 'react';
import { Pagination } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import campersData from "../../services/camperSucess";
import "./styles/CampersGrid.css";
import "./styles/GridPagination.css";

const CampersGrid = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [campersPerPage, setCampersPerPage] = useState(9);
    const [expandedSkills, setExpandedSkills] = useState({});
    const [selectedSkills, setSelectedSkills] = useState([]);
    const predefinedSkills = [
        "Espiritu Guerrero ⚔",
        "Nuevos horizontes🌅",
        "Trota mundos 🌎",
        "Primer programador 💻",
        "Gran jefe 👑",
        "Despegue Digital 🚀",
        "Cabeza de familia 👨‍👩‍👧‍👦",
        "Mujer de Impacto 💪",
        "Emprendedor 💼",
        "Rompe Esquemas 💥"
    ];

    useEffect(() => {
        const updateCampersPerPage = () => {
            setCampersPerPage(window.innerWidth <= 768 ? 4 : 9);
        };
        updateCampersPerPage();
        window.addEventListener("resize", updateCampersPerPage);
        return () => window.removeEventListener("resize", updateCampersPerPage);
    }, []);

    const filteredCampers = selectedSkills.length === 0 
        ? campersData 
        : campersData.filter(camper => 
            selectedSkills.every(skill => 
                camper.skills.some(camperSkill => camperSkill.name === skill)
            ));

    const startIndex = (currentPage - 1) * campersPerPage;
    const currentCampers = filteredCampers.slice(startIndex, startIndex + campersPerPage);

    const handleSkillFilter = (skill) => {
        setSelectedSkills(prev => 
            prev.includes(skill) 
                ? prev.filter(s => s !== skill) 
                : [...prev, skill]
        );
        setCurrentPage(1);
    };

    return (
        <section className='campersgrid'>
            <div className='badge-filters'>
                <div className="skill-filters">
                    <div className="filter-buttons">
                        {predefinedSkills.map(skill => (
                            <Button
                                key={skill}
                                variant={selectedSkills.includes(skill) ? "secondary" : "outline"}
                                onClick={() => handleSkillFilter(skill)}
                            >
                                {skill}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentPage}
                    className='grid-container'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                >
                    {currentCampers.map((camper) => (
                        <div key={camper.id} className="developer-card">
                            <div className="dev-card-content">
                                <div className="camper-image">
                                    <img src={camper.image} alt={camper.name} />
                                </div>
                                <div className='camper-maininfo'>
                                    <h3>{camper.name}</h3>
                                    <p>{camper.role}</p>
                                
                                    <div className="technologies">
                                        <span className="tech-label">Meritos:</span>
                                        <motion.div layout className="skills-wrapper">
                                            <div className={`skills-container ${expandedSkills[camper.id] ? 'expanded' : ''}`}>
                                                <AnimatePresence>
                                                    {camper.skills.map((skill, index) => (
                                                        <motion.div
                                                            key={skill.name}
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            exit={{ opacity: 0, scale: 0.8 }}
                                                            transition={{ delay: index * 0.1 }}
                                                            className="skill-item"
                                                        >
                                                            {skill.name}
                                                        </motion.div>
                                                    ))}
                                                </AnimatePresence>
                                            </div>
                                            {camper.skills.length > 4 && (
                                                <button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="expand-skills-button"
                                                    onClick={() => setExpandedSkills(prev => ({
                                                        ...prev,
                                                        [camper.id]: !prev[camper.id]
                                                    }))}
                                                >
                                                    {expandedSkills[camper.id] ? 'Ver menos' : 'Ver más'}
                                                    <ChevronDown
                                                        className={`ml-2 h-4 w-4 transition-transform ${expandedSkills[camper.id] ? 'rotate-180' : ''
                                                            }`}
                                                    />
                                                </button>
                                            )}
                                        </motion.div>
                                    </div>
                                    <div className="buttons">
                                        <button className="info-button">Mas Info</button>
                                        <button className="sponsor-button">Patrocinar</button>
                                    </div>
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
                total={filteredCampers.length}
                onChange={setCurrentPage}
            />
        </section>
    );
};

export default CampersGrid;