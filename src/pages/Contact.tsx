import React from 'react';
import { Section, FadeIn } from '../components/Layout';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
  };

  return (
    <div className="pt-20">
      <Section className="bg-brand-gray">
        <FadeIn className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl mb-8">Contacto</h1>
          <p className="text-xl text-brand-dark/70 leading-relaxed">
            ¿Listo para elevar tu marca? Estamos aquí para escucharte y diseñar la estrategia perfecta para tu negocio.
          </p>
        </FadeIn>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-20">
          <FadeIn>
            <h2 className="text-4xl mb-8">Hablemos de tu proyecto</h2>
            <p className="text-brand-dark/70 mb-12 text-lg">
              Completa el formulario y uno de nuestros estrategas se pondrá en contacto contigo en menos de 24 horas.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Correo Electrónico</h4>
                  <p className="text-brand-dark/60">info@josuecarcamo.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Teléfono</h4>
                  <p className="text-brand-dark/60">+1 (555) 000-0000</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Ubicación</h4>
                  <p className="text-brand-dark/60">San Pedro Sula, Honduras</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" className="bg-white p-10 rounded-3xl border border-black/5 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-brand-dark/50">Nombre</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-brand-gray border-none rounded-xl focus:ring-2 focus:ring-brand-blue transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-brand-dark/50">Empresa</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-brand-gray border-none rounded-xl focus:ring-2 focus:ring-brand-blue transition-all"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-brand-dark/50">Correo Electrónico</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-brand-gray border-none rounded-xl focus:ring-2 focus:ring-brand-blue transition-all"
                    placeholder="email@ejemplo.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-brand-dark/50">Teléfono</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-brand-gray border-none rounded-xl focus:ring-2 focus:ring-brand-blue transition-all"
                    placeholder="+1 000 000 000"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-brand-dark/50">Tipo de Servicio</label>
                <select className="w-full px-4 py-3 bg-brand-gray border-none rounded-xl focus:ring-2 focus:ring-brand-blue transition-all appearance-none">
                  <option>Branding Estratégico</option>
                  <option>Marketing Digital</option>
                  <option>Diseño Creativo</option>
                  <option>Consultoría Estratégica</option>
                  <option>Otro</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-brand-dark/50">Mensaje</label>
                <textarea
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-brand-gray border-none rounded-xl focus:ring-2 focus:ring-brand-blue transition-all resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 py-4">
                Solicitar Asesoría Estratégica <Send size={18} />
              </button>
            </form>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
}
