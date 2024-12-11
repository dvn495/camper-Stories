import React from 'react';
import { HandCoins } from 'lucide-react';
import ProfileHeader from '../components/camperProfile/ProfileHeader';
import VideoPlayer from '../components/camperProfile/VIdeoPlayer';
import ProjectCard from '../components/camperProfile/ProjectCard';
import '../styles/CamperProfile.css';

const CamperProfile = () => {
    const camper = {
        name: "Natalia Diaz Suarez",
        title: "Fullstack Software Developer",
        mainImage: "/placeholder.svg?height=280&width=280",
        mainVideo: "https://www.youtube.com/embed/example",
        about: "Aprovechando la tecnología para crear soluciones impactantes, cuento con más de 2 años de experiencia en tecnología y administración, especializándome en desarrollo FullStack. Mi enfoque es aplicar tecnología a problemas del día a día, creando soluciones escalables y eficientes que optimizan procesos y resuelven desafíos reales. Me desempeño en entornos dinámicos, siempre motivado a aprender y adaptarme continuamente a nuevas tecnologías. Mi objetivo es aportar valor en cada proyecto en el que participo, mientras sigo creciendo junto a equipos multidisciplinarios.",
        trainingVideos: [
            { title: "Video 1", url: "https://www.youtube.com/embed/example1" },
            { title: "Video 2", url: "https://www.youtube.com/embed/example2" },
            { title: "Video 3", url: "https://www.youtube.com/embed/example3" },
            { title: "Video 4", url: "https://www.youtube.com/embed/example4" },
        ],
        skills: [
            { name: "TypeScript", level: "Avanzado" },
            { name: "JavaScript", level: "Avanzado" },
            { name: "SpringBoot", level: "Intermedio" },
            { name: "MySQL", level: "Intermedio" },
            { name: "ReactJS", level: "Avanzado" },
            { name: "HTML/CSS", level: "Experto" },
        ],
        projects: [
            {
                title: "E-commerce Platform",
                description: "Una plataforma de comercio electrónico completa con carrito de compras, pagos y gestión de pedidos.",
                image: "/placeholder.svg?height=200&width=400",
                technologies: ["React", "Node.js", "MongoDB"],
                codeUrl: "https://github.com/example/e-commerce"
            },
            {
                title: "Task Manager App",
                description: "Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real.",
                image: "/placeholder.svg?height=200&width=400",
                technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
                codeUrl: "https://github.com/example/task-manager"
            },
            {
                title: "Weather Forecast Dashboard",
                description: "Dashboard interactivo que muestra pronósticos del tiempo utilizando datos de API en tiempo real.",
                image: "/placeholder.svg?height=200&width=400",
                technologies: ["React", "D3.js", "Weather API"],
                codeUrl: "https://github.com/example/weather-dashboard"
            },
            {
                title: "Weather Forecast Dashboard",
                description: "Dashboard interactivo que muestra pronósticos del tiempo utilizando datos de API en tiempo real.",
                image: "/placeholder.svg?height=200&width=400",
                technologies: ["React", "D3.js", "Weather API"],
                codeUrl: "https://github.com/example/weather-dashboard"
            },
            {
                title: "Weather Forecast Dashboard",
                description: "Dashboard interactivo que muestra pronósticos del tiempo utilizando datos de API en tiempo real.",
                image: "/placeholder.svg?height=200&width=400",
                technologies: ["React", "D3.js", "Weather API"],
                codeUrl: "https://github.com/example/weather-dashboard"
            }
        ]
    }

    return (
        <div className='camper-profile-view'>
            <ProfileHeader
                name={camper.name}
                title={camper.title}
                mainImage={camper.mainImage}
            />

            <section className='about'>
                <div className='col-video'>
                    <h2 className="title">
                        <span className="highlight">&lt;/</span> Su historia
                    </h2>
                    <VideoPlayer
                        videoUrl={camper.mainVideo}
                        title="Historia Camper"
                    />
                </div>
                <div className='col-info'>
                    <h2 className="title">
                        <span className="highlight">&lt;/</span> Acerca de
                    </h2>
                    <p>{camper.about}</p>
                    <button className='btn-patrocinar'>Patrocinar</button>
                </div>
            </section>

            <section className='process'>
                <h2 className="title">
                    <span className="highlight">&lt;/</span> Su proceso de Formación
                </h2>
                <div className='videos'>
                    {camper.trainingVideos.map((video, index) => (
                        <div key={index} className="video-item">
                            <VideoPlayer
                                videoUrl={video.url}
                                title={video.title}
                            />
                        </div>
                    ))}
                </div>
            </section>

            <section className='tec-info'>
                <h2 className="title">
                    <span className="highlight">&lt;/</span> Proyectos
                </h2>
                <div className='tec-content'>
                    <div className='projects'>
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

                    <div className='skills'>
                        <h2 className="title">Tecnologías</h2>
                        <div className='skills-container'>
                            {camper.skills.map((skill, index) => (
                                <div key={index} className='skillCard'>
                                    <div className='skill-name'>{skill.name}</div>
                                    <div className='skill-level'>{skill.level}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default CamperProfile;
