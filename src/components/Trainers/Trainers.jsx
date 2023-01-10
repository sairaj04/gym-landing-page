import TitleRed from "../../images/who-we-are/title-bg.svg";
import TrainerBox from "./TrainerBox";
import TestimonialImg from "../../images/testimonials/testimonial-new.jpg";
import Quotes from "../../images/testimonials/quotes.png";
import BoxShape from "../../images/testimonials/testimonial-shape.svg";

function Trainers() {
  return (
    <>
      <section className="trainers-section">
        <div className="container page-padding py-[12rem]">
          {/* title div -- */}
          <div className="flex flex-col text-center relative">
            <p className="text-white relative z-10 text-[16px] uppercase font-bold mb-10">
              gym trainers
            </p>
            <img
              src={TitleRed}
              alt="text_bg"
              className="w-[18%] absolute -top-[6px] left-[48rem] "
            />

            <h2 className="text-[3.4rem] font-bold mb-4">
              Team Of Expert Coaches
            </h2>
            <p className="text-[#646464] font-medium text-[15px] ">
              Expert team of coaches helps you succeed in any goal,
              <br /> personalized guidance and motivation provided!
            </p>
          </div>

          {/* trainers div -- */}
          <div className="flex mt-20">
            <TrainerBox />
          </div>

          {/* testim onials div */}
          <div className="mt-[30rem] w-[85%] mx-auto">
            {/* testimonials wrapper */}
            <div className="border-[#efefef] bg-white border-solid border-[9px] p-[30px]">
              <div className="bg-black overflow-x-clip w-full h-[33rem] relative">
                {/* img */}
                <img
                  alt="girl_img"
                  src={TestimonialImg}
                  className="absolute bottom-0 -left-10 z-20 h-[46rem] rounded-tr-[200px]"
                />
                {/* all text-boxes */}
                <div className="flex">
                  {/* text box */}
                  <div className="absolute flex flex-col bg-black  top-0 right-0 w-[60%] h-full py-[47px] px-[55px]">
                    <img alt="quote_img" src={Quotes} className="w-[6rem]" />
                    <p className=" text-[16px] italic text-[#dedede] my-6 z-10">
                      “When an unknown printer took a galley of type and smbled
                      it togtye their make a type specimen book. It has survived
                      not the leap into electronic types remaining essentially”
                    </p>
                    <h3 className="text-white text-[21px] mb-1 font-bold">
                      Harry Potter
                    </h3>
                    <p className="text-[14px] font-medium text-[#dedede]">
                      CEO of Hogwarts
                    </p>
                    <img
                      alt="box_img"
                      src={BoxShape}
                      className="w-[17.5rem] absolute bottom-0 right-[13.5rem] invert opacity-40"
                    />
                  </div>
                </div>
                {/* buttons */}
                <div className="flex gap-3 absolute bottom-[25px] right-[35px]">
                  <button
                    style={{ transition: "all 0.2s" }}
                    className="py-5 px-7 bg-white text-black text-2xl hover:bg-[#FF0336] hover:text-white"
                  >
                    <i class="fa-solid fa-arrow-left"></i>
                  </button>
                  <button
                    style={{ transition: "all 0.2s" }}
                    className="py-5 px-7 bg-white text-black text-2xl hover:bg-[#FF0336] hover:text-white"
                  >
                    <i class="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Trainers;
