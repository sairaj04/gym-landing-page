import About from "./components/About/About";
import ChooseUs from "./components/ChooseUs/ChooseUs";
import Featured from "./components/Featured/Featured";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Nav/Navbar";
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
    </>
  );
}

export default App;
