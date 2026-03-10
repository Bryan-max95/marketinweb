import React from 'react';
import { Section, FadeIn } from '../components/Layout';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const team = [
  {
    name: 'Josué Carcamo',
    role: 'CEO y Director de Branding',
    bio: 'Especialista en marketing estratégico, identidad corporativa y desarrollo de marcas con visión global.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000',
  },
  {
    name: 'Elena Rodríguez',
    role: 'Directora Creativa',
    bio: 'Experta en diseño visual y comunicación publicitaria con más de 10 años de experiencia en agencias internacionales.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1000',
  },
  {
    name: 'Carlos Mendoza',
    role: 'Estratega de Publicidad Digital',
    bio: 'Especialista en optimización de ROI y gestión de presupuestos publicitarios de alto nivel.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1000',
  },
  {
    name: 'Sofía Martínez',
    role: 'Estratega de Contenido',
    bio: 'Creadora de narrativas de marca que conectan y generan engagement real en plataformas digitales.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1000',
  },
];

export default function Team() {
  return (
    <div className="pt-20">
      <Section className="bg-brand-gray">
        <FadeIn className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl mb-8">Nuestro Equipo</h1>
          <p className="text-xl text-brand-dark/70 leading-relaxed">
            Mentes creativas y estratégicas unidas por un solo objetivo: el éxito de tu marca.
          </p>
        </FadeIn>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <FadeIn key={i} delay={i * 0.1} className="group">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-blue/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-blue hover:scale-110 transition-transform">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-blue hover:scale-110 transition-transform">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-blue hover:scale-110 transition-transform">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
              <h3 className="text-2xl mb-1">{member.name}</h3>
              <p className="text-brand-blue font-bold text-sm mb-4 uppercase tracking-wider">{member.role}</p>
              <p className="text-brand-dark/60 text-sm leading-relaxed">{member.bio}</p>
            </FadeIn>
          ))}
        </div>
      </Section>
    </div>
  );
}
