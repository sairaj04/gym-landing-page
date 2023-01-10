import TestimonialImg from "../../images/testimonials/testimonial-new.jpg";
import Quotes from "../../images/testimonials/quotes.png";
import BoxShape from "../../images/testimonials/testimonial-shape.svg";
import TitleBg from "../../images/pricing/titlebg.svg";

function Testimonials() {
  return (
    <>
      {/* testimonials div */}
      <section className="my-[10rem] w-[107rem] mx-auto">
        <div className="container pagepadding">
          {/* title */}
          <div className="text-center relative">
            <p className="text-white relative z-10 text-[16px] uppercase font-bold -mb-[10.5rem]">
              Testimonials
            </p>
            <img
              alt="title_img"
              src={TitleBg}
              className="w-[21rem] absolute -top-[6px] left-[43rem]"
            />
          </div>

          {/* testimonials wrapper */}
          <div className="border-[#efefef] mt-[17rem] bg-white border-solid border-[9px] p-[30px]">
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
                    “I've been a member of Gymate for the past 6 months and it
                    has been an amazing experience. The trainers are
                    knowledgeable and supportive, the equipment is top-notch,
                    and the community of members is friendly and encouraging.”
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
      </section>
    </>
  );
}

export default Testimonials;
