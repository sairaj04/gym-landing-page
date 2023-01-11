function BmiCalc() {
  return (
    <>
      <section className="bmi-section py-[6rem]">
        <div className="container page-padding">
          <div className="text-white w-[52rem]">
            <h2 className="text-[4rem] font-bold leading-[1.1] mb-8">
              Let's Calculate Your <span className="text-[#FF0336]">BMI</span>
            </h2>
            <p className="text-[16px] text-[#a1a1a1]">
              Easily determine your body mass index with our accurate
              calculation tool.
            </p>
            <div className="flex flex-col">
              <form className="flex w-full gap-6 h-[50px] mt-10 ">
                <input
                  className="w-[50%] bg-transparent text-[14px] border-2 border-[#ffffff7d] pl-6"
                  type="text"
                  placeholder="Weight / kg"
                ></input>
                <input
                  className="w-[50%] bg-transparent text-[14px] border-2 border-[#ffffff7d] pl-6"
                  type="text"
                  placeholder="Height / cm"
                ></input>
              </form>
              {/* output */}
              <p className="mt-10 gap-3 text-[16px] font-medium flex items-center ">
                <span>Your BMI is:</span> <span>Your weight is:</span>
              </p>
              <button
                style={{ transition: "all 0.3s" }}
                type="submit"
                className="text-[15px] uppercase font-bold mt-10 bg-[#323232] w-[15rem] h-[5rem] hover:bg-[#FF0336]"
              >
                Calculate
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BmiCalc;
