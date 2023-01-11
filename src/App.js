import About from "./components/About/About";
import BmiCalc from "./components/BMI/BmiCalc";
import ChooseUs from "./components/ChooseUs/ChooseUs";
import Featured from "./components/Featured/Featured";
import Gallery from "./components/Gallery/Gallery";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Nav/Navbar";
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
    </>
  );
}

export default App;
