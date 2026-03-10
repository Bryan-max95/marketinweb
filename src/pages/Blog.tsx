import React from 'react';
import { Section, FadeIn } from '../components/Layout';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    title: 'Tendencias de Branding para el 2024',
    excerpt: 'Descubre cómo las marcas están evolucionando hacia identidades más dinámicas y humanas.',
    date: '15 Mar, 2024',
    author: 'Josué Carcamo',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Cómo optimizar tu presupuesto de Ads',
    excerpt: 'Estrategias prácticas para reducir el costo por adquisición y mejorar el ROI de tus campañas.',
    date: '10 Mar, 2024',
    author: 'Carlos Mendoza',
    category: 'Publicidad',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'El poder del Storytelling en redes sociales',
    excerpt: 'Por qué contar historias es más efectivo que vender productos en el entorno digital actual.',
    date: '05 Mar, 2024',
    author: 'Sofía Martínez',
    category: 'Estrategia',
    image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=1000',
  },
];

export default function Blog() {
  return (
    <div className="pt-20">
      <Section className="bg-brand-gray">
        <FadeIn className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl mb-8">Nuestro Blog</h1>
          <p className="text-xl text-brand-dark/70 leading-relaxed">
            Compartimos conocimientos, tendencias y estrategias para ayudarte a navegar el mundo del marketing moderno.
          </p>
        </FadeIn>
      </Section>

      <Section>
        <div className="grid md:grid-cols-3 gap-12">
          {posts.map((post, i) => (
            <FadeIn key={i} delay={i * 0.1} className="group">
              <div className="aspect-video rounded-2xl overflow-hidden mb-6 relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-brand-blue text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs text-brand-dark/40 mb-4 font-bold uppercase tracking-widest">
                <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
              </div>
              <h3 className="text-2xl mb-4 group-hover:text-brand-blue transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-brand-dark/60 mb-6 line-clamp-2">{post.excerpt}</p>
              <Link to={`/blog/${i}`} className="text-brand-blue font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                Leer más <ArrowRight size={18} />
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>
    </div>
  );
}
