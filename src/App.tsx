import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Marquee } from './components/Marquee'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { useVisualEffects } from './useVisualEffects'

export function App() {
  useVisualEffects()
  return <>
    <div className="ambient-field" aria-hidden="true"><div className="ambient-scan" /><div className="ambient-code">const craft = clarity + motion + intent;</div></div>
    <div className="cursor-halo" aria-hidden="true" />
    <a className="skip-link" href="#home">Ir para o conteúdo</a>
    <div className="scroll-progress" aria-hidden="true" />
    <Navigation />
    <main><Hero /><Marquee /><About /><Skills /><Projects /><Contact /></main>
    <Footer />
  </>
}
