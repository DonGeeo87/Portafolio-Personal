import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, Code } from 'lucide-react';

const DevPortfolio: React.FC = () => {
  return (
    <section id="dev-portfolio" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
             <h2 className="text-4xl font-heading font-bold text-white mb-2">
              Mi Camino Dev
            </h2>
            <p className="text-gray-400 max-w-xl">
              Proyectos que resuelven problemas reales. Stack: Kotlin, Compose, React, Firebase.
            </p>
          </div>
          <a 
            href="https://github.com/DonGeeo87" 
            target="_blank" 
            rel="noreferrer"
            className="hidden md:flex items-center gap-2 text-calipso hover:text-white transition-colors font-mono text-sm mt-4 md:mt-0"
          >
            <Github size={16} /> Ver todo en GitHub
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`bg-[#161616] border ${project.highlight ? 'border-calipso shadow-[0_0_15px_rgba(0,169,206,0.15)]' : 'border-gray-800'} rounded-xl overflow-hidden flex flex-col h-full group transition-all`}
            >
              <div className="h-48 overflow-hidden relative border-b border-gray-800">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 text-xs font-bold rounded uppercase ${
                    project.status === 'Beta' || project.status === 'Live' ? 'bg-terminal text-black' : 'bg-gray-700 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-calipso transition-colors">{project.title}</h3>
                </div>
                
                <p className="text-gray-400 text-sm mb-6 flex-1">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="text-xs font-mono text-gray-400 px-2 py-1 bg-gray-900 rounded border border-gray-800">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-gray-800">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm text-white hover:text-calipso transition-colors">
                        <Github size={16} /> Code
                      </a>
                    )}
                    {project.demoUrl ? (
                      <a href={project.demoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm text-white hover:text-calipso transition-colors">
                        <ExternalLink size={16} /> Demo
                      </a>
                    ) : (
                      <span className="flex items-center gap-1 text-sm text-gray-500 cursor-not-allowed">
                        <ExternalLink size={16} /> Demo
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="md:hidden mt-8 text-center">
            <a 
            href="https://github.com/DonGeeo87" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-calipso hover:text-white transition-colors font-mono text-sm"
          >
            <Github size={16} /> Ver todo en GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default DevPortfolio;