import React from 'react';
import '../styles/DeveloperProfiles.css'; // Asegúrate de que este archivo exista o corrige la ruta
import camper from "../assets/camper.png";

const DeveloperProfiles = ({ apiImage }) => {
  // Datos quemados
  const profiles = [
    {
      id: 1,
      name: "Natalia Diaz Suarez",
      title: "Fullstack Software Developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natusque justo suscipit voluptatem accusamus.",
      image: camper,
      buttonText: "Más Información",
    },
    {
      id: 2,
      name: "John Doe",
      title: "Frontend Developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natusque justo suscipit voluptatem accusamus.",
      image: "https://via.placeholder.com/150", // Cambia esto por una URL real
      buttonText: "Más Información",
    },
    {
      id: 3,
      name: "Jane Smith",
      title: "Backend Engineer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natusque justo suscipit voluptatem accusamus.",
      image: "https://via.placeholder.com/150", // Cambia esto por una URL real
      buttonText: "Más Información",
    },
  ];

  return (
    <div className="developer-profiles">
      {profiles.map((profile) => (
        <div className="profile-card" key={profile.id}>
          <div className="profile-card-image">
            <img src={profile.image} alt={`${profile.name}'s profile`} />
          </div>
          <div className="profile-card-content">
            <h2>{profile.name}</h2>
            <h4>{profile.title}</h4>
            <p>{profile.description}</p>
            <div className="profile-card-signature">
              <p>{profile.name}</p>
            </div>
            <button className="profile-card-button">{profile.buttonText}</button>
            <div className="profile-card-nav">
              <button className="profile-card-nav-button">←</button>
              <button className="profile-card-nav-button">→</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeveloperProfiles;
