import GlobalShowcase from '../components/(global)/GlobalShowcase'
import TermsOfService from '../components/(global)/TermsOfService'
import Footer from '../components/(global)/Footer'
const page = () => {
  return (
    <div className='bg-primary'>
        <GlobalShowcase pageTitle='Terms of Service' bgClass='privacy_bg' />
        <TermsOfService />
        <Footer />
    </div>
  )
}

export default page