import Showcase from "./components/(Home)/Showcase";
import About from "./components/(Home)/About";
import Footer from "./components/(global)/Footer";
import VerifiedEasy from "./components/(Home)/VerifiedEasy";
import WhyChoose from "./components/(Home)/WhyChoose";
import BlogShowcase from "./components/(Home)/BlogShowcase";
// import Testimonial from "./components/(global)/Testimonial";
import Endorsement from "./components/(global)/Endorsement";
import Faq from "./components/(Faq)/Faq";
export default function Home() {
  return (
    <div className="bg-primary ">
      <Showcase />
      <About />
      <VerifiedEasy />
      <WhyChoose />
      <BlogShowcase />
      <Endorsement />
      {/* <Testimonial /> */}
      <Faq />
       <Footer />
    </div>
  );
}
