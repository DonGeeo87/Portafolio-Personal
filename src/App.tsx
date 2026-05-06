import { ChapterProvider } from './context/ChapterContext'
import ChapterNav from './components/chapters/ChapterNav'
import LaMirada from './components/chapters/LaMirada'
import LaGente from './components/chapters/LaGente'
import ElPuente from './components/chapters/ElPuente'
import ElCodigo from './components/chapters/ElCodigo'
import LaConexion from './components/chapters/LaConexion'
import SEO from './components/SEO'

function App() {
  return (
    <ChapterProvider>
      <SEO />
      <ChapterNav />
      <main>
        <LaMirada />
        <LaGente />
        <ElPuente />
        <ElCodigo />
        <LaConexion />
      </main>
    </ChapterProvider>
  )
}

export default App