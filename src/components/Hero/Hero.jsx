import { Link } from "react-router-dom";
import TitleBg from "../../images/pricing/titlebg.svg";

function Hero() {
  return (
    <>
      <section className="hero-section w-full h-screen">
        <div className="container">
          <div
            className="flex flex-col text-white
           absolute hero-text "
          >
            <p className="text-black text-[16px] uppercase font-medium relative z-10 pl-16 mb-8">
              find your energy
            </p>
            <img
              src={TitleBg}
              className=" w-[52%] absolute -top-3 title-white "
            />
            <h1 className="font-bold text-[48px] uppercase mb-[4rem]">
              make your body <br />
              <span className="font-thin">fit & perfect</span>
            </h1>
            <Link className="text-[15px] bg-white text-black text-center pt-[18px] font-[600] w-[20rem] h-[5.5rem] uppercase hero-cta relative ml-2 ">
              Our Classes <i class="fa-solid fa-arrow-right text-[#FF0336]"></i>
            </Link>
          </div>
        </div>

        <div
          className="flex flex-row-reverse -rotate-90 text-white
          absolute top-2/4 right-0 items-center"
        >
          <p className="uppercase  text-3xl font-bold tracking-widest">share</p>
          <span className="w-[35px] bg-[#FF0336] h-[2.5px] mr-6"></span>
          <div className="text-white gap-7 flex mr-7 ">
            <i className="fa-brands rotate-90 hover:text-[#FF0336] fa-facebook text-3xl cursor-pointer"></i>
            <i className="fa-brands rotate-90 hover:text-[#FF0336] fa-twitter text-3xl cursor-pointer"></i>
            <i className="fa-brands rotate-90 hover:text-[#FF0336]  fa-linkedin-in text-3xl cursor-pointer "></i>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
