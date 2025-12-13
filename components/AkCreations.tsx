import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Hammer, QrCode } from 'lucide-react';

const AkCreations: React.FC = () => {
  return (
    <section id="ak-creaciones" className="py-24 bg-zinc-900/30 relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-amber/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              AK Creaciones
            </h2>
            <p className="text-amber font-mono mb-8">Tecnología + Madera + Diseño con Identidad</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Card 1 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-zinc-900 border border-gray-800 rounded-xl overflow-hidden group"
          >
            <div className="h-48 overflow-hidden">
              <img src={`${import.meta.env.BASE_URL}images/ak-creaciones/emprendedores-artesanos.jpg`} alt="Exhibidores para aros en madera" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Productos para Emprendedores y Artesanos</h3>
              <p className="text-gray-400 text-sm mb-4">Exhibidores para aros, tarjetas de presentación en madera y soluciones personalizadas para tu negocio.</p>
              <span className="text-xs font-mono text-amber px-2 py-1 bg-amber/10 rounded">Emprendedores</span>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-zinc-900 border border-gray-800 rounded-xl overflow-hidden group"
          >
            <div className="h-48 overflow-hidden">
              <img src={`${import.meta.env.BASE_URL}images/ak-creaciones/turismolocal.jpg`} alt="Souvenirs Turísticos" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Turismo Local</h3>
              <p className="text-gray-400 text-sm mb-4">Limache, Olmué, Valparaíso. Souvenirs que cuentan la historia de la zona.</p>
              <span className="text-xs font-mono text-amber px-2 py-1 bg-amber/10 rounded">Colección 2025</span>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-zinc-900 border border-gray-800 rounded-xl overflow-hidden group"
          >
            <div className="h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <QrCode className="text-amber w-12 h-12" />
              </div>
              <img src={`${import.meta.env.BASE_URL}images/ak-creaciones/NFC QR.jpg`} alt="Tecnología NFC" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Smart Wood (NFC/QR)</h3>
              <p className="text-gray-400 text-sm mb-4">Conectamos lo físico con lo digital. Menús, tarjetas de visita y catálogos inteligentes.</p>
              <span className="text-xs font-mono text-terminal px-2 py-1 bg-terminal/10 rounded">Tech Integrated</span>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center gap-6">
          <a href="https://wa.me/c/56939688275" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-amber text-black font-bold rounded-lg hover:bg-white transition-colors">
            Ver Catálogo en WhatsApp <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AkCreations;