import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Navbar from "./components/Nav/Navbar";

import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Classes from "./Pages/Classes";
import Price from "./Pages/Price";
import Blog from "./Pages/Blog";
import Schedule from "./Pages/Schedule";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/pricing" element={<Price />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
