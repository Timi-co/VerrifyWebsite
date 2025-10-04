
import AboutShowcase from '../components/(About)/AboutShowcase'
import AboutIdentity from '../components/(About)/AboutIdentity'
import Mission from '../components/(About)/Mission'
import Founder from '../components/(About)/Founder'
import Team from '../components/(About)/Team'
import Testimonial from '../components/(global)/Testimonial'
import Footer from '../components/(global)/Footer'
const about = () => {
  return (
    <div className='bg-primary'>
        <AboutShowcase />
        <AboutIdentity />
        <Mission />
        <Founder />
        <Team />
        <Testimonial />
        <Footer />
    </div>
    
  )
}

export default about