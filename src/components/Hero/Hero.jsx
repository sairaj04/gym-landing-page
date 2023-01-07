import TitleBg from "../../images/pricing/titlebg.svg";
import MainButton from "../MainButton";

function Hero() {
  return (
    <>
      <section className="hero-section w-full h-screen">
        <div className="container-hero">
          {/* hero section */}
          <div
            className="flex flex-col text-white
           absolute hero-text "
          >
            <p className="text-black text-[16px] uppercase font-medium relative z-10 pl-16 mb-8">
              find your energy
            </p>
            <img
              src={TitleBg}
              alt="text_bg"
              className=" w-[52%] absolute -top-3 title-white "
            />
            <h1 className="font-bold text-[48px] uppercase mb-[4rem]">
              make your body <br />
              <span className="font-thin">fit & perfect</span>
            </h1>

            <MainButton
              color={`text-black`}
              bg={`bg-white`}
              text="our classes"
            />
          </div>
        </div>
        {/* socials */}
        <div
          className="flex flex-row-reverse -rotate-90 text-white
          absolute top-2/4 right-0 items-center"
        >
          <p className="uppercase  text-3xl font-bold tracking-widest">share</p>
          <span className="w-[35px] bg-[#FF0336] h-[2.5px] mr-6"></span>
          <div className="text-white gap-7 flex mr-7 ">
            <i className="fa-brands rotate-90 hover:text-[#FF0336] fa-facebook text-3xl cursor-pointer ease-in duration-200 "></i>
            <i className="fa-brands rotate-90 hover:text-[#FF0336] fa-twitter text-3xl cursor-pointer ease-in duration-200"></i>
            <i className="fa-brands rotate-90 hover:text-[#FF0336]  fa-linkedin-in text-3xl cursor-pointer ease-in duration-200 "></i>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
