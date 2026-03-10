import React from 'react';
import { Section, FadeIn } from '../components/Layout';
import { CheckCircle2, TrendingUp, Users, Target } from 'lucide-react';

const cases = [
  {
    company: 'Restaurante Premium',
    industry: 'Gastronomía de Lujo',
    problem: 'Bajo posicionamiento de marca y poca afluencia de clientes entre semana.',
    solution: 'Rediseño integral de identidad visual, creación de contenido gastronómico de alta calidad y campañas de publicidad segmentadas geográficamente.',
    results: [
      'Incremento del 120% en visibilidad digital.',
      'Aumento del 40% en reservas directas.',
      'Posicionamiento como el restaurante #1 en su categoría local.',
    ],
    image: 'https://images.unsplash.com/photo-1550966842-2849a2830a28?auto=format&fit=crop&q=80&w=1000',
  },
  {
    company: 'Global Logistics S.A.',
    industry: 'Logística & Transporte',
    problem: 'Identidad visual obsoleta que no reflejaba su capacidad tecnológica actual.',
    solution: 'Branding estratégico enfocado en modernidad y eficiencia, desarrollo de manual de marca para flota internacional y estrategia de LinkedIn Ads.',
    results: [
      'Cierre de 3 contratos corporativos mayores en el primer trimestre.',
      'Mejora del 85% en la percepción de marca según encuestas a clientes.',
      'Unificación de imagen en 5 países.',
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000',
  },
];

export default function SuccessCases() {
  return (
    <div className="pt-20">
      <Section className="bg-brand-gray">
        <FadeIn className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl mb-8">Casos de Éxito</h1>
          <p className="text-xl text-brand-dark/70 leading-relaxed">
            Historias detalladas de cómo nuestras estrategias han impulsado el crecimiento real de nuestros clientes.
          </p>
        </FadeIn>
      </Section>

      {cases.map((item, i) => (
        <Section key={i} className={i % 2 === 1 ? 'bg-brand-gray' : ''}>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction={i % 2 === 0 ? 'right' : 'left'} className={i % 2 === 1 ? 'lg:order-2' : ''}>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src={item.image} alt={item.company} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </FadeIn>
            <FadeIn className={i % 2 === 1 ? 'lg:order-1' : ''}>
              <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-bold uppercase tracking-wider">
                  {item.industry}
                </span>
              </div>
              <h2 className="text-4xl mb-8">{item.company}</h2>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Target size={20} className="text-brand-blue" /> El Problema
                  </h4>
                  <p className="text-brand-dark/70 leading-relaxed">{item.problem}</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <TrendingUp size={20} className="text-brand-blue" /> Nuestra Solución
                  </h4>
                  <p className="text-brand-dark/70 leading-relaxed">{item.solution}</p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm">
                  <h4 className="font-bold text-lg mb-4">Resultados Obtenidos:</h4>
                  <ul className="space-y-4">
                    {item.results.map((res, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="font-medium">{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </Section>
      ))}
    </div>
  );
}
