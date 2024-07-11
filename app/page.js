import React from 'react'
import NavMenu from './components/Navigation/Nav'
import Hero from './components/Hero/Hero'
import What_i_do from './components/Work/What_i_do'

function Home() {
  return (
    <div>
      <NavMenu/>
      <Hero/>
      <What_i_do/>
    </div>
  )
}

export default Home
