import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import ProfileHeader from "../../components/camperProfile/ProfileHeader";
import VideoPlayer from "../../components/camperProfile/VIdeoPlayer";
import ProjectCard from "../../components/camperProfile/ProjectCard";
import TikTokEmbed from "../../components/camperProfile/TiktokEmbed";
import Footer from "../../components/footer/Footer";
import styles from './styles/CamperProfile.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import NavbarProfile from '../../components/navbar/NavbarProfile';
import DreamsGrid from '../../components/camperProfile/DreamsGrid';

const CamperProfile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const swiperRef = useRef(null);
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // Forzar actualización del Swiper cuando cambia isMobile
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.update();
        }
    }, [isMobile]);

    const handleSlideChange = (swiper) => {
        setCurrentIndex(swiper.activeIndex);
    };

    const camper = {
        name: "Cristopher Buitrago",
        ciudadOrigen: "Bucaramanga, Santander",
        edad: "17",
        mainImage: "/src/assets/Christopher.svg",
        mainVideo: "https://www.youtube.com/embed/OKMsheDmK8Q",
        about:
            "Aprovechando la tecnología para crear soluciones impactantes, cuento con más de 2 años de experiencia en tecnología y administración, especializándome en desarrollo FullStack. Mi enfoque es aplicar tecnología a problemas del día a día",
        processTikToks: [
            {
                title: "TikTok1",
                url: "https://www.tiktok.com/@campuslands/video/7441695191163063559",
            },
            {
                title: "TikTok2",
                url: "https://www.tiktok.com/@campuslands/video/7441695191657975048",
            },
            {
                title: "TikTok3",
                url: "https://www.tiktok.com/@campuslands/video/7441694512537275656",
            },
            {
                title: "TikTok2",
                url: "https://www.tiktok.com/@campuslands/video/7390518130801462533",
            },
        ],
        skills: [
            { name: "Espiritu Guerrero ⚔️" },
            { name: "Nuevos horizontes🌅" },
            { name: "Trota mundos 🌎"},
            { name: "Primer programador 💻"},
            { name: "Gran jefe 👑"},
            { name: "Cabeza de familia 👨‍👩‍👧‍👦"},
            { name: "Mujer de Impacto 💪"},
            { name: "Emprendedor 💼"},
            { name: "Rompe Esquemas 💥"}
        ],
        projects: [
            {
                title: "E-commerce Platform",
                description:
                    "Una plataforma de comercio electrónico completa con carrito de compras, pagos y gestión de pedidos.",
                image: "src/assets/proyecto.png",
                technologies: ["React", "Node.js", "MongoDB"],
                codeUrl: "https://github.com/example/e-commerce",
            },
            {
                title: "Task Manager App",
                description:
                    "Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real.",
                image: "src/assets/proyecto.png",
                technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
                codeUrl: "https://github.com/example/task-manager",
            },
            {
                title: "Weather Forecast Dashboard",
                description:
                    "Dashboard interactivo que muestra pronósticos del tiempo utilizando datos de API en tiempo real.",
                image: "src/assets/proyecto.png",
                technologies: ["React", "D3.js", "Weather API"],
                codeUrl: "https://github.com/example/weather-dashboard",
            }
        ],
    };

    return (
        <div className={styles.camperProfileView}>
            <NavbarProfile />
            <div className={styles.profileMainContent}>
                <ProfileHeader
                    skills={camper.skills}
                    name={camper.name}
                    ciudadOrigen={camper.ciudadOrigen}
                    edad={camper.edad}
                    mainImage={camper.mainImage}
                />
 
                <section className={styles.about} id="sobre-mi-profile">
                    <div className={styles.aboutContent}>
                        <div className={styles.colVideo}>
                            <VideoPlayer videoUrl={camper.mainVideo} title="Historia Camper" />
                        </div>
                        <div className={styles.colInfo}>
                            <h2 className={styles.aboutSubtitle}>Acerca de</h2>
                            <p>{camper.about}</p>
                            <button className={styles.btnPatrocinar}>Patrocinar</button>
                        </div>
                    </div>
                </section>
 
                <section className={styles.dreams} id="sueños-grid">
                    <h2 className={styles.profileSubtitle}>
                        <span className={styles.highlight}>&lt;/</span> Mis Sueños
                    </h2>
                    <div className={styles.dreamsGridContainer}>
                        <DreamsGrid />
                    </div>
                </section>
 
                <section className={styles.process} id='proceso-formacion-profile'>
                    <h2 className={styles.profileSubtitle}>
                        <span className={styles.highlight}>&lt;/</span> Mi proceso de Formación
                    </h2>
                    <div className={styles.videos}>
                        {isMobile ? (
                            <Swiper
                                ref={swiperRef}
                                modules={[Pagination]}
                                spaceBetween={30}
                                slidesPerView={1}
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true,
                                }}
                                onSlideChange={handleSlideChange}
                                className={`${styles.profileSwiper} ${styles.mobileSwiper}`}
                            >
                                {camper.processTikToks.map((video, index) => (
                                    <SwiperSlide key={index} className={styles.swiperSlide}>
                                        <TikTokEmbed videoUrl={video.url} title={video.title} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        ) : (
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className={styles.profileSwiper}
                            >
                                {camper.processTikToks.map((video, index) => (
                                    <SwiperSlide key={index} className={styles.videoItem}>
                                        <TikTokEmbed videoUrl={video.url} title={video.title} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}
                    </div>
                </section>
 
                <section className={styles.tecInfo}>
                    <h2 className={styles.profileSubtitle}>
                        <span className={styles.highlight}>&lt;/</span> Mis Proyectos
                    </h2>
                    <div className={styles.projects} id="projects-profile">
                        {camper.projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                technologies={project.technologies}
                                codeUrl={project.codeUrl}
                            />
                        ))}
                    </div>
                </section>
 
                <section className={styles.sponsorCallToAction} id="patrocinar-profile">
                    <p className={styles.ctaText}>
                        "Con tu apoyo, puedo continuar desarrollando habilidades y creando soluciones innovadoras. ¡Gracias por creer en mi potencial!"
                    </p>
                    <button className={styles.btnSponsor}>Patrocinar Ahora</button>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default CamperProfile;