import React from 'react'
import NavMenu from '../components/Navigation/Nav'
import Hero from '../components/Hero/Hero'
import What_i_do from '../components/Work/What_i_do'
import Skills from '@/components/Skills/Skills'
import SciSkill from '@/components/Skills/SciSkill'
import Trainings from '@/components/Trainings/Trainings'
import Projects from '@/components/Projects/Projects'
import Clients from '@/components/Clients/Clients'
import Footer from '@/components/Navigation/Footer'
import Testimonial from '@/components/Testomonials/Testmonial'

function Home() {
  return (
    <div>
      <NavMenu/>
      <Hero/>
      <Clients/>
      <What_i_do/>
      <Skills/>
      <SciSkill/>
      <Trainings/>
      <Projects/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default Home
