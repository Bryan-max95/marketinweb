import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold text-xl">
              JC
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-none">JOSUÉ CARCAMO</span>
              <span className="text-[10px] tracking-[0.2em] text-brand-blue font-bold uppercase">Marketing Agency</span>
            </div>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed">
            Impulsamos marcas que dominan el mercado a través de estrategias innovadoras, branding de alto nivel y marketing digital de resultados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue transition-colors">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-6">Navegación</h4>
          <ul className="flex flex-col gap-4 text-white/60 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Inicio</Link></li>
            <li><Link to="/nosotros" className="hover:text-white transition-colors">Sobre Nosotros</Link></li>
            <li><Link to="/servicios" className="hover:text-white transition-colors">Servicios</Link></li>
            <li><Link to="/portafolio" className="hover:text-white transition-colors">Portafolio</Link></li>
            <li><Link to="/casos-de-exito" className="hover:text-white transition-colors">Casos de Éxito</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-6">Servicios</h4>
          <ul className="flex flex-col gap-4 text-white/60 text-sm">
            <li><Link to="/servicios" className="hover:text-white transition-colors">Branding Estratégico</Link></li>
            <li><Link to="/servicios" className="hover:text-white transition-colors">Marketing Digital</Link></li>
            <li><Link to="/servicios" className="hover:text-white transition-colors">Diseño Creativo</Link></li>
            <li><Link to="/consultoria" className="hover:text-white transition-colors">Consultoría de Negocios</Link></li>
            <li><Link to="/servicios" className="hover:text-white transition-colors">Gestión de Redes</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-6">Contacto</h4>
          <ul className="flex flex-col gap-4 text-white/60 text-sm">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-brand-blue" />
              <span>+1 (555) 000-0000</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-brand-blue" />
              <span>info@josuecarcamo.com</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-brand-blue" />
              <span>San Pedro Sula, Honduras</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-xs">
        <p>© 2024 Josué Carcamo Marketing Agency. Todos los derechos reservados.</p>
        <div className="flex gap-8">
          <Link to="/trabaja-con-nosotros" className="hover:text-white transition-colors">Trabaja con Nosotros</Link>
          <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
          <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
        </div>
      </div>
    </footer>
  );
}
