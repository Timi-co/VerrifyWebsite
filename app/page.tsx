import Showcase from "./components/(Home)/Showcase";
import About from "./components/(Home)/About";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="bg-primary ">
      <Showcase />
      <About />
      <Footer />
    </div>
  );
}
