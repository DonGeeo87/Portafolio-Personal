import { motion } from 'framer-motion'
import { CHAPTERS } from '../../data/chapters'
import ChapterLayout from './ChapterLayout'
import { ProductCard } from '../pop/ProductCard'
import { Onomatopoeia } from '../pop/Onomatopoeia'
import { Panel } from '../pop/Panel'
import { usePanelExpand } from '../../hooks/usePanelExpand'

const chapter = CHAPTERS[2]

const akProducts = [
  {
    name: 'Emprendedores Artesanos',
    description: 'Corte láser para emprendedores. La precisión milimétrica al servicio de la artesanía chilena.',
    image: 'images/ak-creaciones/emprendedores-artesanos.jpg',
  },
  {
    name: 'NFC QR',
    description: 'Soluciones NFC + QR que fusionan objetos físicos con interacciones digitales inteligentes.',
    image: 'images/ak-creaciones/NFC QR.jpg',
  },
  {
    name: 'Turismo Local',
    description: 'Soluciones digitales para turismo local. Souvenirs y experiencias que cuentan historias del territorio.',
    image: 'images/ak-creaciones/turismolocal.jpg',
  },
] as const

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
}

export default function ElPuente() {
  const { isExpanded } = usePanelExpand()

  return (
    <ChapterLayout chapter={chapter}>
      <motion.div
        className="mx-auto max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10%' }}
      >
        {/* Section heading */}
        <motion.div variants={itemVariants}>
          <h2
            className="font-heading text-4xl font-black uppercase tracking-tight md:text-6xl"
            style={{ color: chapter.accent }}
          >
            {chapter.title}
          </h2>
          <p className="mt-2 text-lg font-medium text-pop-cream/70 md:text-xl">
            {chapter.subtitle}
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          className="mt-6 text-base leading-relaxed text-pop-cream/60 md:text-lg"
          variants={itemVariants}
        >
          Conectando los mundos de la comunicaci&oacute;n y los negocios &mdash; donde la
          precisi&oacute;n milim&eacute;trica del l&aacute;ser se encuentra con el alma de la
          artesan&iacute;a chilena.
        </motion.p>

        {/* AK Creaciones SpA section */}
        <motion.div variants={itemVariants} className="mt-10">
          <h3
            className="font-heading text-2xl font-black uppercase tracking-wider md:text-3xl"
            style={{ color: chapter.accent }}
          >
            AK Creaciones SpA
          </h3>
          <p className="mt-1 text-sm text-pop-cream/50">
            Corte l&aacute;ser &middot; Audiovisual &middot; Soluciones digitales
          </p>
        </motion.div>

        {/* Product cards grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {akProducts.map((product, i) => {
            const panelId = `puente-${product.name}`
            const expanded = isExpanded(panelId)

            return (
              <motion.div
                key={product.name}
                variants={itemVariants}
                custom={i}
              >
                <Panel id={panelId} accent={chapter.accent}>
                  <div className="relative">
                    <Onomatopoeia
                      text="¡BOOM!"
                      color={chapter.accent}
                      trigger={!!expanded}
                    />
                    <ProductCard
                      name={product.name}
                      description={product.description}
                      image={product.image}
                      accent={chapter.accent}
                    />
                  </div>
                </Panel>
              </motion.div>
            )
          })}
        </div>

        {/* Newsletter section */}
        <motion.div
          className="mt-12"
          variants={itemVariants}
        >
          <Panel id="puente-newsletter" accent={chapter.accent}>
            <div className="relative p-6 md:p-8">
              <Onomatopoeia
                text="¡BOOM!"
                color={chapter.accent}
                trigger={isExpanded('puente-newsletter')}
              />
              <div className="flex items-center gap-4">
                {/* Broadcast signal icon */}
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center comic-border"
                  style={{ borderColor: chapter.accent }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-8 w-8"
                    stroke={chapter.accent}
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 12 C2 6 6 2 12 2 C18 2 22 6 22 12" />
                    <path d="M6 12 C6 8.7 8.7 6 12 6 C15.3 6 18 8.7 18 12" />
                    <circle cx="12" cy="12" r="2" fill={chapter.accent} />
                  </svg>
                </div>
                <div>
                  <h4
                    className="font-heading text-xl font-black uppercase tracking-wider"
                    style={{ color: chapter.accent }}
                  >
                    Lanza tu Marca Digital
                  </h4>
                  <p className="mt-1 text-sm text-pop-cream/60 leading-relaxed">
                    Newsletter sobre emprendimiento digital, contenido y
                    estrategia. Se&ntilde;al transmitiendo desde Valpara&iacute;so.
                  </p>
                </div>
              </div>
            </div>
          </Panel>
        </motion.div>
      </motion.div>
    </ChapterLayout>
  )
}