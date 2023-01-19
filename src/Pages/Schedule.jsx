import Footer from "../components/Footer/Footer";

function Schedule() {
  return (
    <>
      <section className="">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Schedule by Day
          </h1>
        </div>
        {/* schedule */}
        <div className="container page-padding py-[10rem]">
          {/* fiter buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#ff0336] ease-in duration-200 hover:shadow-2xl hover:text-white ">
              Monday
            </button>

            <button className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#ff0336] ease-in duration-200 hover:shadow-2xl hover:text-white ">
              Tuesday
            </button>

            <button className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#ff0336] ease-in duration-200 hover:shadow-2xl hover:text-white ">
              Wednesday
            </button>

            <button className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#ff0336] ease-in duration-200 hover:shadow-2xl hover:text-white ">
              Thursday
            </button>

            <button className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#ff0336] ease-in duration-200 hover:shadow-2xl hover:text-white ">
              Friday
            </button>

            <button className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#ff0336] ease-in duration-200 hover:shadow-2xl hover:text-white ">
              Saturday
            </button>

            <button className="text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] hover:bg-[#ff0336] ease-in duration-200 hover:shadow-2xl hover:text-white ">
              Sunday
            </button>
          </div>

          {/* boxes */}
          <div className="mt-[5rem]">
            {/* monday */}
            <div className="flex flex-col gap-5">
              {/* row */}
              <ul className="flex justify-between w-full">
                {/* class name */}
                <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
                  <p className="text-[14px] font-medium text-[#a0a0a0]">
                    Class Name
                  </p>
                  <p className="text-[18px] text-black font-bold mt-3">
                    Boxing
                  </p>
                </li>
                {/* time */}
                <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
                  <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
                  <p className="text-[18px] text-black font-bold mt-3">
                    9:00am - 10:00am
                  </p>
                </li>
                {/* trainer */}
                <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
                  <p className="text-[14px] font-medium text-[#a0a0a0]">
                    Trainer
                  </p>
                  <p className="text-[18px] text-black font-bold mt-3">
                    Robert Louis
                  </p>
                </li>
                <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full text-right">
                  <button className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] mt-3 hover:bg-[#ff0336] ease-in duration-200 ">
                    Join Now
                  </button>
                </li>
              </ul>
              {/* row */}
              <ul className="flex justify-between w-full">
                {/* class name */}
                <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
                  <p className="text-[14px] font-medium text-[#a0a0a0]">
                    Class Name
                  </p>
                  <p className="text-[18px] text-black font-bold mt-3">
                    Boxing
                  </p>
                </li>
                {/* time */}
                <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
                  <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
                  <p className="text-[18px] text-black font-bold mt-3">
                    9:00am - 10:00am
                  </p>
                </li>
                {/* trainer */}
                <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
                  <p className="text-[14px] font-medium text-[#a0a0a0]">
                    Trainer
                  </p>
                  <p className="text-[18px] text-black font-bold mt-3">
                    Robert Louis
                  </p>
                </li>
                <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full text-right">
                  <button className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] mt-3 hover:bg-[#ff0336] ease-in duration-200 ">
                    Join Now
                  </button>
                </li>
              </ul>
              {/* row */}
              <ul className="flex justify-between w-full">
                {/* class name */}
                <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
                  <p className="text-[14px] font-medium text-[#a0a0a0]">
                    Class Name
                  </p>
                  <p className="text-[18px] text-black font-bold mt-3">
                    Boxing
                  </p>
                </li>
                {/* time */}
                <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
                  <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
                  <p className="text-[18px] text-black font-bold mt-3">
                    9:00am - 10:00am
                  </p>
                </li>
                {/* trainer */}
                <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
                  <p className="text-[14px] font-medium text-[#a0a0a0]">
                    Trainer
                  </p>
                  <p className="text-[18px] text-black font-bold mt-3">
                    Robert Louis
                  </p>
                </li>
                <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full text-right">
                  <button className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] mt-3 hover:bg-[#ff0336] ease-in duration-200 ">
                    Join Now
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Schedule;
