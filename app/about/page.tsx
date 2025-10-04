
import AboutShowcase from '../components/(About)/AboutShowcase'
import AboutIdentity from '../components/(About)/AboutIdentity'
import Mission from '../components/(About)/Mission'
import Founder from '../components/(About)/Founder'
const about = () => {
  return (
    <div className='bg-primary'>
        <AboutShowcase />
        <AboutIdentity />
        <Mission />
        <Founder />
    </div>
    
  )
}

export default about