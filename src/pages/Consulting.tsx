import React from 'react';
import { Section, FadeIn } from '../components/Layout';
import { CheckCircle2, ArrowRight, BarChart3, Target, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Consulting() {
  return (
    <div className="pt-20">
      <Section className="bg-brand-dark text-white">
        <FadeIn className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl mb-8">Consultoría Estratégica para Empresas</h1>
          <p className="text-xl text-white/70 leading-relaxed">
            Ayudamos a empresas a construir marcas fuertes, optimizar su comunicación y desarrollar estrategias de marketing que generen crecimiento real.
          </p>
        </FadeIn>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <FadeIn>
            <h2 className="text-4xl mb-8">Un Enfoque Basado en Resultados</h2>
            <p className="text-brand-dark/70 text-lg mb-10 leading-relaxed">
              Nuestra consultoría no se trata solo de consejos; se trata de ejecución estratégica. Analizamos tu situación actual, identificamos oportunidades de mercado y diseñamos una hoja de ruta clara para el éxito.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center text-brand-blue flex-shrink-0">
                  <BarChart3 size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Análisis de Datos</h4>
                  <p className="text-brand-dark/60 text-sm">Tomamos decisiones basadas en métricas reales y comportamiento del consumidor.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center text-brand-blue flex-shrink-0">
                  <Target size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Estrategia de Mercado</h4>
                  <p className="text-brand-dark/60 text-sm">Identificamos tu ventaja competitiva y cómo comunicarla efectivamente.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center text-brand-blue flex-shrink-0">
                  <Lightbulb size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Innovación Creativa</h4>
                  <p className="text-brand-dark/60 text-sm">Desarrollamos conceptos disruptivos que diferencian tu marca.</p>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="left">
            <div className="bg-brand-gray p-12 rounded-[40px] border border-black/5">
              <h3 className="text-2xl mb-8">¿Qué incluye la consultoría?</h3>
              <ul className="space-y-4 mb-10">
                {[
                  'Auditoría completa de marca y marketing',
                  'Análisis de competencia y mercado',
                  'Definición de Buyer Persona y Customer Journey',
                  'Estrategia de canales y contenidos',
                  'Plan de inversión publicitaria optimizado',
                  'KPIs y sistema de medición de resultados',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-brand-blue" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contacto" className="btn-primary w-full flex items-center justify-center gap-2">
                Agendar Sesión de Diagnóstico <ArrowRight size={18} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
}
