import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calendar, Code, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "antd";

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
      institution: "Campus Lands",
      degree: "Certificado en Desarrollo FullStack",
      period: "2023 - 2024",
      skills: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "HTML/CSS"],
      description: "Programa intensivo de desarrollo web full stack con énfasis en tecnologías modernas y metodologías ágiles.",
      icon: Code,
    },
    {
      institution: "Campus Lands",
      degree: "Certificado en Desarrollo FullStack",
      period: "2023 - 2024",
      skills: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "HTML/CSS"],
      description: "Programa intensivo de desarrollo web full stack con énfasis en tecnologías modernas y metodologías ágiles.",
      icon: Code,
    },
    {
      institution: "Campus Lands",
      degree: "Certificado en Desarrollo FullStack",
      period: "2023 - 2024",
      skills: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "HTML/CSS"],
      description: "Programa intensivo de desarrollo web full stack con énfasis en tecnologías modernas y metodologías ágiles.",
      icon: Code,
    },
    {
      institution: "Campus Lands",
      degree: "Certificado en Desarrollo FullStack",
      period: "2023 - 2024",
      skills: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "HTML/CSS"],
      description: "Programa intensivo de desarrollo web full stack con énfasis en tecnologías modernas y metodologías ágiles.",
      icon: Code,
    },
    {
      institution: "Campus Lands",
      degree: "Certificado en Desarrollo FullStack",
      period: "2023 - 2024",
      skills: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "HTML/CSS"],
      description: "Programa intensivo de desarrollo web full stack con énfasis en tecnologías modernas y metodologías ágiles.",
      icon: Code,
    },
    {
      institution: "Campus Lands",
      degree: "Certificado en Desarrollo FullStack",
      period: "2023 - 2024",
      skills: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "HTML/CSS"],
      description: "Programa intensivo de desarrollo web full stack con énfasis en tecnologías modernas y metodologías ágiles.",
      icon: Code,
    },
    {
      institution: "Campus Lands",
      degree: "Certificado en Desarrollo FullStack",
      period: "2023 - 2024",
      skills: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "HTML/CSS"],
      description: "Programa intensivo de desarrollo web full stack con énfasis en tecnologías modernas y metodologías ágiles.",
      icon: Code,
    },
    {
      institution: "Campus Lands",
      degree: "Certificado en Desarrollo FullStack",
      period: "2023 - 2024",
      skills: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "HTML/CSS"],
      description: "Programa intensivo de desarrollo web full stack con énfasis en tecnologías modernas y metodologías ágiles.",
      icon: Code,
    },
    {
      institution: "Campus Lands",
      degree: "Certificado en Desarrollo FullStack",
      period: "2023 - 2024",
      skills: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "HTML/CSS"],
      description: "Programa intensivo de desarrollo web full stack con énfasis en tecnologías modernas y metodologías ágiles.",
      icon: Code,
    },
    // Más elementos...
  ];

  const [expanded, setExpanded] = useState(Array(education.length).fill(false));
  const [showAllCards, setShowAllCards] = useState(false);

  const toggleExpand = (index) => {
    setExpanded((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };

  const toggleShowAll = () => {
    setShowAllCards(!showAllCards);
  };

  const visibleEducation = showAllCards ? education : education.slice(0, 9); // Máximo 9 elementos

  const renderEducationCard = (item, index) => (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1 }}
      key={index}
    >
      <Card className="hover:shadow-lg transition-shadow duration-300">
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
    </motion.div>
  );

  return (
    <AnimatePresence>
      <motion.div className="education-section">
        <motion.div
          className="grid gap-4"
          style={{
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))", // Tres columnas
          }}
        >
          {visibleEducation.map((item, index) => renderEducationCard(item, index))}
        </motion.div>

        {education.length > 9 && (
          <motion.div
            className="flex justify-center mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.button
              onClick={toggleShowAll}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAllCards ? (
                <>
                  Ver menos
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Ver más
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default EducationSection;
