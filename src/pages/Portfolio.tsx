import React from 'react';
import { Section, FadeIn } from '../components/Layout';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Restaurante Premium "El Olivo"',
    category: 'Branding & Marketing Digital',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000',
    description: 'Rediseño total de identidad y estrategia de captación digital.',
    results: 'Incremento del 120% en visibilidad digital.',
  },
  {
    title: 'TechCorp Solutions',
    category: 'Estrategia de Marca',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000',
    description: 'Posicionamiento de marca para empresa de software B2B.',
    results: 'Aumento del 45% en leads calificados.',
  },
  {
    title: 'Moda Sostenible "EcoVibe"',
    category: 'Gestión de Redes & Contenido',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000',
    description: 'Campaña de lanzamiento y gestión de comunidad activa.',
    results: 'Comunidad de 50k seguidores en 6 meses.',
  },
  {
    title: 'Inmobiliaria "Skyline"',
    category: 'Publicidad Digital',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000',
    description: 'Campañas de Ads para proyectos residenciales de lujo.',
    results: 'Venta del 80% del proyecto en fase de preventa.',
  },
];

export default function Portfolio() {
  return (
    <div className="pt-20">
      <Section className="bg-brand-gray">
        <FadeIn className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl mb-8">Nuestro Portafolio</h1>
          <p className="text-xl text-brand-dark/70 leading-relaxed">
            Una muestra de las marcas que hemos ayudado a transformar y los resultados que hemos alcanzado juntos.
          </p>
        </FadeIn>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <FadeIn key={i} delay={i * 0.1} className="group cursor-pointer">
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-dark">
                    <ArrowUpRight size={32} />
                  </div>
                </div>
              </div>
              <p className="text-brand-blue font-bold text-sm uppercase tracking-widest mb-2">{project.category}</p>
              <h3 className="text-2xl mb-4 group-hover:text-brand-blue transition-colors">{project.title}</h3>
              <p className="text-brand-dark/60 mb-4">{project.description}</p>
              <div className="inline-block px-4 py-2 bg-brand-gray rounded-lg text-sm font-bold text-brand-blue">
                Resultado: {project.results}
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
    </div>
  );
}
