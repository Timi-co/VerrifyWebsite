import React from 'react'
import GlobalShowcase from '../components/(global)/GlobalShowcase'
import PrivacyPolicy from '../components/(global)/PrivacyPolicy'
import Footer from '../components/(global)/Footer'

const page = () => {
  return (
    <div className='bg-primary'>
        <GlobalShowcase pageTitle='Privacy Policy' bgClass='privacy_bg' />
        <PrivacyPolicy />
        <Footer />

    </div>
  )
}

export default page