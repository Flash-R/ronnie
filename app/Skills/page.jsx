import Footer from '@/components/Navigation/Footer'
import NavMenu from '@/components/Navigation/Nav'
import React from 'react'

function page() {
  return (
    <div>
        <NavMenu/>
        <div className="px-8 text-center py-10">
            <h2>My Skills</h2>
        </div>
        <Footer/>
    </div>
  )
}

export default page