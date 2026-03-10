import React from 'react';
import { Section, FadeIn } from '../components/Layout';
import { Briefcase, Heart, Rocket, Users, Send } from 'lucide-react';

export default function WorkWithUs() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Gracias por tu interés. Revisaremos tu perfil y nos pondremos en contacto.');
  };

  return (
    <div className="pt-20">
      <Section className="bg-brand-gray">
        <FadeIn className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl mb-8">Trabaja con Nosotros</h1>
          <p className="text-xl text-brand-dark/70 leading-relaxed">
            Buscamos mentes brillantes, creativas y apasionadas por el marketing que quieran transformar el futuro de las marcas.
          </p>
        </FadeIn>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <FadeIn>
            <h2 className="text-4xl mb-8">¿Por qué unirte a JC Agency?</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue flex-shrink-0">
                  <Rocket size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Crecimiento Constante</h4>
                  <p className="text-brand-dark/60">Fomentamos el aprendizaje continuo y te damos las herramientas para que alcances tu máximo potencial.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue flex-shrink-0">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Cultura Colaborativa</h4>
                  <p className="text-brand-dark/60">Creemos en el poder del equipo. Aquí tu voz cuenta y tus ideas son valoradas.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue flex-shrink-0">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Proyectos de Alto Nivel</h4>
                  <p className="text-brand-dark/60">Trabajarás con marcas líderes e internacionales en desafíos estratégicos reales.</p>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="left" className="bg-brand-gray p-10 rounded-3xl border border-black/5">
            <h3 className="text-2xl mb-8">Envíanos tu Perfil</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-brand-dark/50">Nombre Completo</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-white border-none rounded-xl focus:ring-2 focus:ring-brand-blue transition-all"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-brand-dark/50">Correo Electrónico</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-white border-none rounded-xl focus:ring-2 focus:ring-brand-blue transition-all"
                  placeholder="email@ejemplo.com"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-brand-dark/50">Área de Interés</label>
                <select className="w-full px-4 py-3 bg-white border-none rounded-xl focus:ring-2 focus:ring-brand-blue transition-all appearance-none">
                  <option>Diseño Gráfico / Branding</option>
                  <option>Estrategia Digital</option>
                  <option>Copywriting / Contenido</option>
                  <option>Publicidad (Ads)</option>
                  <option>Administración / Cuentas</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-brand-dark/50">Link a Portafolio / LinkedIn</label>
                <input
                  type="url"
                  required
                  className="w-full px-4 py-3 bg-white border-none rounded-xl focus:ring-2 focus:ring-brand-blue transition-all"
                  placeholder="https://..."
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-brand-dark/50">¿Por qué quieres unirte?</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 bg-white border-none rounded-xl focus:ring-2 focus:ring-brand-blue transition-all resize-none"
                  placeholder="Cuéntanos un poco sobre ti..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 py-4">
                Enviar Candidatura <Send size={18} />
              </button>
            </form>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
}
