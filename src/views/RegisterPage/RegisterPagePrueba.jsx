import { useState } from 'react';
import { Loader2, User, Mail, Lock, MapPin, FileText, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      // Handle registration logic here
    } catch (err) {
      setError('Hubo un error al registrarse. Por favor intente nuevamente.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1a1b26] p-4">
      <Card className="w-full max-w-lg border-0 bg-[#1f2937]/50 shadow-2xl shadow-purple-500/10">
        <CardHeader className="space-y-6 text-center">
          <div className="flex justify-center">
            <div className="w-24 h-24">
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="2" />
                <path
                  d="M50 20C35 20 25 35 25 50C25 65 35 80 50 80C65 80 75 65 75 50C75 35 65 20 50 20Z"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight text-white">
            Camper Stories
          </CardTitle>
          <CardDescription className="text-gray-400 max-w-sm mx-auto">
            Cada historia tiene el poder de inspirar. Únete a Camper Stories y comparte tu historia con el mundo. Comparte tus logros, desafíos y sueños mientras te conectas con una comunidad apasionada por crecer y aprender juntos.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="nombre" className="text-white">
                  Nombre
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Input
                    id="nombre"
                    placeholder="Tu nombre"
                    required
                    className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="apellido" className="text-white">
                  Apellido
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Input
                    id="apellido"
                    placeholder="Tu apellido"
                    required
                    className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="documento" className="text-white">
                Número de documento
              </Label>
              <div className="relative">
                <FileText className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  id="documento"
                  placeholder="Tu número de documento"
                  required
                  className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Correo electrónico
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@ejemplo.com"
                  required
                  className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">
                Contraseña
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  required
                  placeholder="••••••••"
                  className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500"
                />
              </div>
              <p className="text-xs text-gray-400">
                La contraseña debe tener al menos 8 caracteres, una mayúscula y un número
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="edad" className="text-white">
                  Edad
                </Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Input
                    id="edad"
                    type="number"
                    min="18"
                    max="120"
                    required
                    placeholder="Tu edad"
                    className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="ciudad" className="text-white">
                  Ciudad
                </Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Input
                    id="ciudad"
                    placeholder="Tu ciudad"
                    required
                    className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500"
                  />
                </div>
              </div>
            </div>
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Registrando...
                </>
              ) : (
                'Registrarse'
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full bg-white text-gray-900 hover:bg-gray-100"
              disabled={isLoading}
            >
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Continuar con Google
            </Button>
            <div className="text-center text-sm">
              <a href="#" className="text-purple-400 hover:text-purple-300">
                ¿Ya tienes una cuenta? Inicia sesión
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
