import React from 'react';
import { Section, FadeIn } from '../components/Layout';
import { Target, Users, Zap, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      <Section className="bg-brand-gray">
        <FadeIn className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl mb-8">Una Agencia Construida para Crear Marcas Poderosas</h1>
          <p className="text-xl text-brand-dark/70 leading-relaxed">
            Somos una agencia especializada en branding, marketing estratégico y comunicación visual para empresas que buscan posicionarse y crecer en mercados competitivos.
          </p>
        </FadeIn>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <FadeIn direction="right">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
              alt="Nuestro equipo"
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </FadeIn>
          <FadeIn>
            <h2 className="text-4xl mb-8">Nuestra Filosofía</h2>
            <div className="space-y-6 text-brand-dark/70 leading-relaxed">
              <p>
                Nuestro enfoque combina análisis estratégico, creatividad y tecnología para desarrollar campañas que generan resultados medibles. No creemos en soluciones genéricas; cada marca tiene una historia única que merece ser contada con autoridad.
              </p>
              <p>
                Nos enfocamos en crear identidades de marca sólidas, estrategias digitales efectivas y experiencias visuales que conecten profundamente con el público objetivo, transformando la percepción y el valor de mercado de nuestros clientes.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-brand-dark text-white">
        <div className="grid md:grid-cols-3 gap-12">
          <FadeIn delay={0.1}>
            <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center mb-6">
              <Target size={24} />
            </div>
            <h3 className="text-2xl mb-4">Misión</h3>
            <p className="text-white/60 leading-relaxed">
              Empoderar a las empresas a través de estrategias de marketing innovadoras y branding de alto impacto que impulsen su crecimiento y liderazgo en el mercado.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center mb-6">
              <Zap size={24} />
            </div>
            <h3 className="text-2xl mb-4">Visión</h3>
            <p className="text-white/60 leading-relaxed">
              Ser el referente internacional en consultoría de marketing y branding, reconocidos por nuestra capacidad de transformar negocios en marcas icónicas.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center mb-6">
              <Award size={24} />
            </div>
            <h3 className="text-2xl mb-4">Valores</h3>
            <p className="text-white/60 leading-relaxed">
              Excelencia estratégica, creatividad disruptiva, integridad profesional y un compromiso inquebrantable con los resultados de nuestros clientes.
            </p>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
}
