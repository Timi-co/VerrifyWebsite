import React from 'react'
import Navbar from '../components/(global)/Navbar'
import ContactContent from '../components/(Contact)/ContactContent'
import Footer from '../components/(global)/Footer'
const page = () => {
  return (
    <div className='bg-primary'>
        <Navbar />
        <ContactContent />
        <Footer />
    </div>
  )
}

export default page