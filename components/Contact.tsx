import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Mail, MessageCircle, Heart } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construir mensaje formateado para WhatsApp
    const whatsappMessage = `Hola Giorgio! 👋

*Nombre:* ${formData.name}
*Email:* ${formData.email}

*Mensaje:*
${formData.message}`;

    // Codificar el mensaje para la URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/56939688275?text=${encodedMessage}`;
    
    // Abrir WhatsApp en nueva pestaña
    window.open(whatsappUrl, '_blank');
    
    // Limpiar formulario después de enviar
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <footer id="contact" className="bg-[#0a0a0a] border-t border-gray-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Hablemos de tu proyecto
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-md">
              Si buscas una app, un diseño, una web, o una solución creativa que combine oficio y tecnología, este es el lugar.
            </p>
            
            <a 
              href="https://wa.me/56939688275" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-green-900/20"
            >
              <MessageCircle size={24} />
              WhatsApp Directo
            </a>
          </div>

          <div className="bg-zinc-900/50 p-8 rounded-2xl border border-gray-800">
             <form className="space-y-4" onSubmit={handleSubmit}>
                 <div>
                     <label className="block text-sm font-medium text-gray-400 mb-1">Nombre</label>
                     <input 
                       type="text" 
                       name="name"
                       value={formData.name}
                       onChange={handleChange}
                       required
                       className="w-full bg-black border border-gray-800 rounded-lg p-3 text-white focus:outline-none focus:border-calipso transition-colors" 
                       placeholder="Tu nombre" 
                     />
                 </div>
                 <div>
                     <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                     <input 
                       type="email" 
                       name="email"
                       value={formData.email}
                       onChange={handleChange}
                       required
                       className="w-full bg-black border border-gray-800 rounded-lg p-3 text-white focus:outline-none focus:border-calipso transition-colors" 
                       placeholder="tu@email.com" 
                     />
                 </div>
                 <div>
                     <label className="block text-sm font-medium text-gray-400 mb-1">Mensaje</label>
                     <textarea 
                       rows={4} 
                       name="message"
                       value={formData.message}
                       onChange={handleChange}
                       required
                       className="w-full bg-black border border-gray-800 rounded-lg p-3 text-white focus:outline-none focus:border-calipso transition-colors" 
                       placeholder="¿Cómo te puedo ayudar?"
                     ></textarea>
                 </div>
                 <button 
                   type="submit"
                   className="w-full bg-calipso text-black font-bold py-3 rounded-lg hover:bg-white transition-colors"
                 >
                     Enviar por WhatsApp
                 </button>
             </form>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm font-mono">
            © 2025 Giorgio Interdonato. All rights reserved.
          </div>
          
          <div className="flex gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs text-gray-700 flex items-center justify-center gap-1">
            Made with <Heart size={10} className="text-red-900" /> and React
        </div>
      </div>
    </footer>
  );
};

export default Contact;