import TitleRed from "../../images/who-we-are/title-bg.svg";

function Featured() {
  return (
    <>
      <section className="page-padding py-[12.5rem] bg-white">
        <div className="container">
          {/* title */}
          <div className="flex flex-col text-center items-center relative ">
            <p className="font-semibold text-white text-[15px] relative uppercase z-10 ">
              OUR FEATURED CLASS
            </p>
            <img
              src={TitleRed}
              alt="text_bg"
              className="w-[20%] absolute -top-[10px]"
            />
            <h2 className="text-[3.6rem] text-black font-bold my-10">
              We Are Offering Best Flexible Classes
            </h2>
          </div>
          {/* grid */}
          <div className="grid grid-cols-4 grid-rows-2 gap-7 h-full mt-7">
            <div className="item-0-div">
              <div className="item-0 ease-in duration-[0.4s]"></div>
            </div>
            <div className="item-1-div">
              <div className="item-1 ease-in duration-[0.4s]"></div>
            </div>
            <div className="item-2-div">
              <div className="item-2 ease-in duration-[0.4s]"></div>
            </div>
            <div className="item-3-div">
              <div className="item-3 ease-in duration-[0.4s]"></div>
            </div>
            <div className="item-4-div">
              <div className="item-4 ease-in duration-[0.4s]"></div>
            </div>
            <div className="item-5-div">
              <div className="item-5 ease-in duration-[0.4s]"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Featured;
