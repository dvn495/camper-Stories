// Archivo para almacenar los perfiles

import camperImage from "../assets/camper.png"; // Importar la imagen

const profiles = [
  {
    id: 1,
    name: "Natalia Diaz Suarez",
    title: "Fullstack Software Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natusque justo suscipit voluptatem accusamus.",
    image: camperImage, // Usar la imagen importada
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

export default profiles;