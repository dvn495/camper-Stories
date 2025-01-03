import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
  
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function ProyectsEditModal({ project, technologuies, onUpdateProject, onClose }) {
  const [formData, setFormData] = useState({
    title: project?.title || '',
    description: project?.description || '',
    image: project?.image || '',
    codeUrl: project?.codeUrl || '',
    technologies: project?.technologies || [],
  });

  useEffect(() => {
    setFormData({
      title: project?.title || "",
      description: project?.description || "",
      image: project?.image || "",
      codeUrl: project?.codeUrl || "",
      technologies: project?.technologies || [],
    });
  }, [project]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectTechnology = (techName) => {
    setFormData((prev) => ({
      ...prev,
      technologies: prev.technologies.includes(techName)
        ? prev.technologies // Evita duplicados
        : [...prev.technologies, techName],
    }));
  };

  const handleRemoveTechnology = (techName) => {
    setFormData((prev) => ({
      ...prev,
      technologies: prev.technologies.filter((t) => t !== techName),
    }));
  };

  const handleSubmit = () => {
    if (!formData.title || !formData.description || !formData.image || !formData.codeUrl) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    onUpdateProject(formData);
    onClose(); // Cerrar el modal
  };

  return (
    <Dialog open onClose={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editar Proyecto</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Título
            </Label>
            <Input 
              id="title" 
              value={formData.title} 
              onChange={handleChange} 
              className="col-span-3" 
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Descripción
            </Label>
            <Input 
              id="description" 
              value={formData.description} 
              onChange={handleChange} 
              className="col-span-3" 
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="image" className="text-right">
              URL Imagen
            </Label>
            <Input 
              id="image" 
              value={formData.image} 
              onChange={handleChange} 
              className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="codeUrl" className="text-right">
              Link del Proyecto
            </Label>
            <Input 
              id="codeUrl" 
              value={formData.codeUrl} 
              onChange={handleChange} 
              className="col-span-3" 
            />
          </div>
          <div>
            <label>Tecnologías</label>
            <Select
              onValueChange={(value) => handleSelectTechnology(value)} // Manejar selección
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecciona tecnologías" />
              </SelectTrigger>
              <SelectContent>
                {technologuies.map((tech) => (
                  <SelectItem key={tech.name} value={tech.name}>
                    {tech.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <ul className="mt-2">
              {formData.technologies.map((tech) => (
                <li key={tech} className="flex justify-between items-center text-sm text-gray-600">
                  {tech}
                  <button
                    type="button"
                    onClick={() => handleRemoveTechnology(tech)}
                    className="text-red-500 hover:text-red-700 ml-2"
                  >
                    &times;
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleSubmit}>
            Guardar Cambios
          </Button>
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancelar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
