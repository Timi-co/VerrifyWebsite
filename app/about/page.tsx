
import AboutShowcase from '../components/(global)/GlobalShowcase'
import AboutIdentity from '../components/(About)/AboutIdentity'
import Mission from '../components/(About)/Mission'
import Founder from '../components/(About)/Founder'
import Team from '../components/(About)/Team'
import Testimonial from '../components/(global)/Testimonial'
import Footer from '../components/(global)/Footer'
const about = () => {
  return (
    <div className='bg-primary'>
        <AboutShowcase bgClass='about_bg' pageTitle='About us' />
        <AboutIdentity />
        <Mission />
        <Founder />
        {/* <Team /> */}
        <Testimonial />
        <Footer />
    </div>
    
  )
}

export default about