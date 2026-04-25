import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Partners from './components/Partners'
import About from './components/About'
import Highlights from './components/Highlights'
import Leaderboard from './components/Leaderboard'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import CloudReveal from './components/CloudReveal'
import PageLoadReveal from './components/PageLoadReveal'

function App() {
  return (
    <div className="min-h-screen bg-[#F0F9FF] font-['League_Spartan','Inter',sans-serif] text-[#0d2845]">
      <Navbar />
      <main>
        <PageLoadReveal>
          <Hero />
        </PageLoadReveal>
        
        <CloudReveal>
          <Partners />
        </CloudReveal>
        
        <CloudReveal>
          <About />
        </CloudReveal>
        
        <CloudReveal>
          <Highlights />
        </CloudReveal>
        
        <div className="relative z-[4] bg-gradient-to-br from-[#F0F9FF] to-[#E0F2FE]">
          <CloudReveal>
            <Leaderboard />
          </CloudReveal>
          
          <CloudReveal>
            <Testimonials />
          </CloudReveal>
          
          <CloudReveal>
            <CTA />
          </CloudReveal>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
