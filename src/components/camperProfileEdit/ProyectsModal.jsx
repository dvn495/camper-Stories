import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import 'boxicons'
import "./styles/Proyects.Modal.css"
import { useState } from "react"
import { time } from "framer-motion"

// async function saveToDatabase(data) {
//     const response = await fetch("/api/saveProject", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });
//     if (!response.ok) {
//       throw new Error("Error guardando en la base de datos");
//     }
//   }
  

export function ProyectsModal({onAddProject, technologuies}) {
    const [formData, setFormData]= useState({
        title:"",
        description:"",
        image:"",
        codeUrl: "",
        technologies: [],
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    // const handleSubmit = async = () => {
    //     try {
    //         setFormData()
    //     } catch(error){

    //     }
    // }

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

        onAddProject(formData);

        // Limpiar el formulario
        setFormData({
        title: "",
        description: "",
        image: "",
        codeUrl: "",
        technologies: [],
        });

    }
    
    

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="addButton">
        <box-icon name='plus-circle' color='#fdfcfc' size="80px"></box-icon></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Añadir Proyectos</DialogTitle>
          <DialogDescription>
            Añade tus proyectos aqui, presiona guardar cuando hayas acabado.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Titulo
            </Label>
            <Input 
                id="title" 
                value = {formData.title}
                onChange={handleChange}
                className="col-span-3" 
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Descripcion
            </Label>
            <Input 
                id="description"   
                value = {formData.description} 
                onChange={handleChange}
                className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              URL imagen
            </Label>
            <Input 
                id="image" 
                value = {formData.image} 
                onChange={handleChange}
                className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Link del proyecto
            </Label>
            <Input 
                id="codeUrl" 
                value = {formData.codeUrl} 
                onChange={handleChange}
                className="col-span-3" />
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
          <Button type="submit" onClick={handleSubmit}>Guardar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
