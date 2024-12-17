import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, Award, Code } from "lucide-react";
import { motion } from "framer-motion";


const EducationSection = () => {
  const education = [
    {
      institution: "Campus Lands",
      degree: "Certificado en Desarrollo FullStack",
      period: "2023 - 2024",
      skills: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "HTML/CSS"],
      description: "Programa intensivo de desarrollo web full stack con énfasis en tecnologías modernas y metodologías ágiles.",
      icon: Code,
    },
    {
      institution: "Universidad X",
      degree: "Licenciatura en Ciencias de la Computación",
      period: "2019 - 2023",
      skills: ["Algoritmos", "Estructuras de Datos", "Sistemas Operativos", "Bases de Datos", "Java", "Python"],
      description: "Formación integral en ciencias de la computación con especialización en desarrollo de software.",
      icon: BookOpen,
    },
    {
      institution: "Coursera",
      degree: "Curso de React Avanzado",
      period: "2022",
      skills: ["React Hooks", "Redux", "TypeScript", "Testing", "Next.js", "Performance Optimization"],
      description: "Especialización avanzada en desarrollo frontend con React y sus ecosistemas modernos.",
      icon: Award,
    },
  ];

  const [expanded, setExpanded] = useState(Array(education.length).fill(false));

  const toggleExpand = (index) => {
    setExpanded((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };

  return (
    <div className="education-section">
      <div className="flex items-center space-x-2 mb-4">
        <Code className="w-8 h-8 text-yellow-500" />
        <h1 className="text-3xl font-bold">Educación</h1>
      </div>

      <div className="grid gap-4">
        {education.map((item, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader className="p-4">
              <div className="flex items-center space-x-3">
                <div className="p-1 bg-blue-100 rounded-lg">
                  <item.icon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-lg font-semibold">
                    {item.institution}
                  </CardTitle>
                  <p className="text-sm text-gray-600">{item.degree}</p>
                </div>
              </div>
            </CardHeader>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: expanded[index] ? "auto" : 0 }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <CardContent className="p-4">
                <div className="text-sm text-gray-600 mb-2">
                  <p>{item.description}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Habilidades clave:</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center text-gray-500 text-sm mt-4">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{item.period}</span>
                </div>
              </CardContent>
            </motion.div>
            <div className="p-4 pt-0">
              <Button
                onClick={() => toggleExpand(index)}
                variant="outline"
                className="text-blue-600 border-blue-600 w-full"
              >
                {expanded[index] ? "Ver menos" : "Ver más"}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
