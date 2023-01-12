import About from "./components/About/About";
import BmiCalc from "./components/BMI/BmiCalc";
import Blog from "./components/Blog/Blog";
import ChooseUs from "./components/ChooseUs/ChooseUs";
import Featured from "./components/Featured/Featured";
import Gallery from "./components/Gallery/Gallery";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Nav/Navbar";
import Pricing from "./components/Pricing/Pricing";
import Testimonials from "./components/Testimonials/Testimonials";
import Trainers from "./components/Trainers/Trainers";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Featured />
      <ChooseUs />
      <Trainers />
      <Testimonials />
      <Gallery />
      <BmiCalc />
      <Pricing />
      <Blog />
    </>
  );
}

export default App;
