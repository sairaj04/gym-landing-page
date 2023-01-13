import { useState } from "react";
import Logo from "../../images/logo/logo.svg";
import NavList from "../Nav/NavList";
import { Link } from "react-router-dom";

function Navbar() {
  const [spin, setSpin] = useState(false);
  const [sticky, setSticky] = useState(false);

  const joinSpin = () => {
    setSpin(true);
  };

  const stopSpin = () => {
    setSpin(false);
  };

  // sticky navbar - bg black
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <nav
        className={`flex flex-row bg-transparent items-center justify-between py-8 px-12  fixed top-0 left-0 right-0 w-full z-50 ${
          sticky ? "bg-black shadow-xl" : ""
        }`}
      >
        <img src={Logo} alt="logo_img" />
        <NavList />
        <div className="flex items-center gap-10">
          <div className="flex gap-10">
            <i class="fa-regular fa-user  text-white text-4xl cursor-pointer"></i>
            <i className="fa-regular fa-chart-bar text-white text-4xl cursor-pointer"></i>
          </div>
          <div className="border-[rgb(255,255,255,0.3)] border-solid border-2  p-2 rounded-md">
            <Link
              onMouseEnter={joinSpin}
              onMouseLeave={stopSpin}
              className="flex items-center"
            >
              <i
                className={`fa-solid fa-plus bg-[#FF0336] text-white text-2xl py-3 px-4 rounded-md ${
                  spin ? "nav-btn-hover" : ""
                }`}
              ></i>
              <h3 className="text-white text-[14px] font-bold uppercase ml-4 mr-8 tracking-wider">
                join class now
              </h3>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
