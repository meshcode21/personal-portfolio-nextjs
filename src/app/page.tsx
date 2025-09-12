import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Technologies from '@/components/Technologies'
import FunProjects from '@/components/FunProjects'
import React from 'react'

export default function page() {
  return (
    <>
      <Header />
      <Hero />
      <Technologies />
      <About />
      <Projects />
      <FunProjects/>
      <Contact />
      <Footer />
    </>
  )
}
