import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import DevPortfolio from './components/DevPortfolio'
import AkCreations from './components/AkCreations'
import Contact from './components/Contact'
import SEO from './components/SEO'
import { motion } from 'framer-motion'

function App() {
  return (
    <>
      <SEO />
      <div className="min-h-screen bg-bg-primary relative overflow-hidden selection:bg-accent-primary selection:text-white">
        {/* Background Decorative Blobs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-primary/20 rounded-full blur-[120px] animate-blob" />
          <div className="absolute top-[20%] right-[-5%] w-[35%] h-[35%] bg-accent-secondary/15 rounded-full blur-[100px] animate-blob animation-delay-2000" />
          <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-accent-tertiary/10 rounded-full blur-[120px] animate-blob animation-delay-4000" />
        </div>

        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Services />
          <DevPortfolio />
          <AkCreations />
          <Contact />
        </main>
      </div>
    </>
  )
}

export default App
