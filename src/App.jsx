import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'
import ScrollToTop from './components/ScrollToTop'

// 1. Import komponen ScrollReveal yang baru saja kita buat
import ScrollReveal from './components/ScrollReveal'

function App() {
  return (
    <div className="portfolio-shell">
      <Navbar />
      <main>
        {/* Hero & About dipadatkan dalam komponen Hero */}
        <Hero />
        
        {/* 2. Bungkus section lainnya dengan ScrollReveal */}
        
        <ScrollReveal>
          <Experience />
        </ScrollReveal>
        
        <ScrollReveal>
          <Skills />
        </ScrollReveal>
        
        <ScrollReveal>
          <Projects />
        </ScrollReveal>
        
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
        
        <ScrollToTop />
      </main>
      <Footer />
    </div>
  )
}

export default App