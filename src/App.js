import About from "./components/About/About";
import ChooseUs from "./components/ChooseUs/ChooseUs";
import Featured from "./components/Featured/Featured";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Nav/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Featured />
      <ChooseUs />
    </>
  );
}

export default App;
