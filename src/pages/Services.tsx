import React from 'react';
import { Section, FadeIn } from '../components/Layout';
import { Award, Target, Zap, Briefcase, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const serviceCategories = [
  {
    title: 'Branding Estratégico',
    icon: <Award className="text-brand-blue" size={40} />,
    items: [
      'Creación de identidad visual',
      'Diseño de logotipo',
      'Manual de marca',
      'Estrategia de posicionamiento',
    ],
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Marketing Digital',
    icon: <Target className="text-brand-blue" size={40} />,
    items: [
      'Gestión de redes sociales',
      'Publicidad digital (Ads)',
      'SEO y posicionamiento web',
      'Automatización de marketing',
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Diseño Creativo',
    icon: <Zap className="text-brand-blue" size={40} />,
    items: [
      'Diseño publicitario',
      'Diseño editorial',
      'Diseño de contenido digital',
      'Diseño de campañas visuales',
    ],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Consultoría Estratégica',
    icon: <Briefcase className="text-brand-blue" size={40} />,
    items: [
      'Análisis de mercado',
      'Estrategia de crecimiento',
      'Optimización de campañas',
      'Estrategia de marca',
    ],
    image: 'https://images.unsplash.com/photo-1454165833767-02a698d48769?auto=format&fit=crop&q=80&w=1000',
  },
];

export default function Services() {
  return (
    <div className="pt-20">
      <Section className="bg-brand-gray">
        <FadeIn className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl mb-8">Soluciones que Impulsan tu Negocio</h1>
          <p className="text-xl text-brand-dark/70 leading-relaxed">
            Ofrecemos un ecosistema de servicios diseñados para cubrir cada aspecto de tu presencia de marca y estrategia comercial.
          </p>
        </FadeIn>
      </Section>

      {serviceCategories.map((category, i) => (
        <Section key={i} className={i % 2 === 1 ? 'bg-brand-gray' : ''}>
          <div className={cn('grid lg:grid-cols-2 gap-16 items-center', i % 2 === 1 ? 'lg:flex-row-reverse' : '')}>
            <FadeIn direction={i % 2 === 0 ? 'right' : 'left'} className={i % 2 === 1 ? 'lg:order-2' : ''}>
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <img src={category.image} alt={category.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </FadeIn>
            <FadeIn className={i % 2 === 1 ? 'lg:order-1' : ''}>
              <div className="mb-6">{category.icon}</div>
              <h2 className="text-4xl mb-6">{category.title}</h2>
              <ul className="space-y-4 mb-10">
                {category.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-lg text-brand-dark/70">
                    <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contacto" className="btn-primary inline-flex items-center gap-2">
                Solicitar Información <ChevronRight size={18} />
              </Link>
            </FadeIn>
          </div>
        </Section>
      ))}

      <Section dark className="text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl mb-8">¿Necesitas una solución a medida?</h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Entendemos que cada empresa es diferente. Diseñamos planes estratégicos personalizados según tus objetivos específicos.
          </p>
          <Link to="/consultoria" className="btn-primary bg-white text-brand-blue hover:bg-brand-gray">
            Hablar con un Estratega
          </Link>
        </FadeIn>
      </Section>
    </div>
  );
}
