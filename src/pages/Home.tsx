import React from 'react';
import { ArrowRight, BarChart3, Target, Users, Zap, Award, Globe, MessageSquare, Briefcase, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section, FadeIn } from '../components/Layout';

const services = [
  {
    title: 'Branding e identidad de marca',
    description: 'Creamos identidades visuales poderosas que conectan emocionalmente con tu audiencia.',
    icon: <Award className="text-brand-blue" size={32} />,
  },
  {
    title: 'Marketing digital estratégico',
    description: 'Estrategias personalizadas para maximizar tu presencia online y captar clientes potenciales.',
    icon: <Target className="text-brand-blue" size={32} />,
  },
  {
    title: 'Diseño publicitario',
    description: 'Creatividad visual diseñada para impactar y comunicar el mensaje correcto de tu marca.',
    icon: <Zap className="text-brand-blue" size={32} />,
  },
  {
    title: 'Gestión de redes sociales',
    description: 'Construimos comunidades activas y generamos engagement real para tu negocio.',
    icon: <MessageSquare className="text-brand-blue" size={32} />,
  },
  {
    title: 'Campañas de publicidad digital',
    description: 'Optimización de inversión en Google Ads, Meta Ads y más para obtener el mejor ROI.',
    icon: <TrendingUp className="text-brand-blue" size={32} />,
  },
  {
    title: 'Optimización de conversión',
    description: 'Analizamos y mejoramos cada punto de contacto para convertir visitantes en clientes.',
    icon: <BarChart3 className="text-brand-blue" size={32} />,
  },
  {
    title: 'Consultoría de crecimiento',
    description: 'Asesoramiento estratégico para escalar tu empresa y dominar tu industria.',
    icon: <Briefcase className="text-brand-blue" size={32} />,
  },
  {
    title: 'Producción de contenido visual',
    description: 'Fotografía y video de alta calidad que elevan la percepción de tu marca.',
    icon: <Globe className="text-brand-blue" size={32} />,
  },
];

const stats = [
  { label: 'Incremento promedio en conversión', value: '+120%' },
  { label: 'Reconocimiento de marca', value: '95%' },
  { label: 'Optimización de campañas', value: '45%' },
  { label: 'Crecimiento de audiencia', value: '3x' },
];

const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/b/b1/Apple_logo_grey.svg',
  'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
];

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="min-h-[80vh] flex items-center relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              Impulsamos Marcas que <span className="text-brand-blue">Dominan</span> el Mercado
            </h1>
            <p className="text-xl text-brand-dark/70 mb-10 max-w-xl leading-relaxed">
              Estrategia, branding y marketing digital diseñados para empresas que quieren crecer, posicionarse y liderar su industria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/consultoria" className="btn-primary flex items-center justify-center gap-2">
                Solicitar Consultoría Estratégica <ArrowRight size={18} />
              </Link>
              <Link to="/portafolio" className="btn-secondary flex items-center justify-center">
                Ver Nuestros Proyectos
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} direction="left" className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000"
                alt="Equipo de marketing trabajando"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-black/5 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <p className="text-xs text-brand-dark/50 font-bold uppercase tracking-wider">Crecimiento Promedio</p>
                  <p className="text-2xl font-display font-bold">+120%</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Trust Section */}
      <Section className="bg-brand-gray py-12">
        <p className="text-center text-sm font-bold text-brand-dark/40 uppercase tracking-[0.3em] mb-10">
          Empresas que confían en nuestras estrategias
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all">
          {logos.map((logo, i) => (
            <img key={i} src={logo} alt="Partner logo" className="h-8 md:h-10 object-contain" referrerPolicy="no-referrer" />
          ))}
        </div>
      </Section>

      {/* Services Section */}
      <Section id="servicios">
        <FadeIn className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl mb-6">Soluciones Estratégicas de Marketing y Branding</h2>
          <p className="text-brand-dark/60 max-w-2xl mx-auto">
            Ofrecemos un enfoque integral para transformar tu presencia de marca y acelerar el crecimiento de tu negocio.
          </p>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <FadeIn key={i} delay={i * 0.1} className="p-8 rounded-2xl border border-black/5 hover:border-brand-blue/20 hover:shadow-xl transition-all group">
              <div className="mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-xl mb-4">{service.title}</h3>
              <p className="text-brand-dark/60 text-sm leading-relaxed">{service.description}</p>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Results Section */}
      <Section dark className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl mb-8">Resultados que Impactan Negocios</h2>
            <p className="text-white/70 text-lg mb-12 leading-relaxed">
              No solo creamos diseños bonitos; construimos herramientas estratégicas que generan un impacto real en el balance de tu empresa.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-4xl font-display font-bold text-brand-blue mb-2">{stat.value}</p>
                  <p className="text-sm text-white/50 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn direction="left" className="bg-white/5 p-1 rounded-3xl backdrop-blur-sm border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
              alt="Análisis de datos"
              className="rounded-[22px] w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </FadeIn>
        </div>
      </Section>

      {/* CEO Section */}
      <Section className="bg-brand-gray">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000"
                  alt="Josué Carcamo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-blue p-8 rounded-2xl text-white shadow-xl max-w-xs">
                <p className="text-sm font-bold uppercase tracking-widest mb-2">Liderazgo Estratégico</p>
                <p className="text-lg font-display font-bold">"La creatividad sin estrategia es solo arte. Con estrategia, es marketing."</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            <h2 className="text-4xl mb-2">Josué Carcamo</h2>
            <p className="text-brand-blue font-bold text-lg mb-8">CEO & Director de Estrategia Creativa</p>
            <div className="space-y-6 text-brand-dark/70 leading-relaxed">
              <p>
                Josué Carcamo es especialista en branding, marketing estratégico y diseño de identidad corporativa. Cuenta con experiencia desarrollando estrategias de posicionamiento para marcas emergentes y empresas consolidadas.
              </p>
              <p>
                Su enfoque combina creatividad, análisis de mercado y comunicación visual para construir marcas sólidas, memorables y competitivas.
              </p>
              <div className="pt-6 border-t border-black/10">
                <p className="font-bold text-brand-dark mb-2">Especialidades:</p>
                <ul className="grid grid-cols-2 gap-4 text-sm">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-blue rounded-full"></div> Diseñador de Branding</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-blue rounded-full"></div> Especialista en Marketing</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-blue rounded-full"></div> Estrategia Digital</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-blue rounded-full"></div> Comunicación Visual</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="text-center">
        <FadeIn className="bg-brand-blue rounded-[40px] p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl mb-8">¿Listo para que tu marca lidere el mercado?</h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Agenda una consultoría estratégica hoy mismo y descubre cómo podemos transformar tu negocio.
            </p>
            <Link to="/consultoria" className="bg-white text-brand-blue px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-gray transition-all inline-flex items-center gap-3">
              Solicitar Consultoría Estratégica <ArrowRight size={20} />
            </Link>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}
