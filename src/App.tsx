import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import DevPortfolio from './components/DevPortfolio'
import AkCreations from './components/AkCreations'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <DevPortfolio />
        <AkCreations />
        <Contact />
      </main>
    </div>
  )
}

export default App
