import TitleRed from "../../images/who-we-are/title-bg.svg";

function Trainers() {
  return (
    <>
      <section className="trainers-section">
        <div className="container page-padding py-[12rem]">
          {/* title div */}
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
        </div>
      </section>
    </>
  );
}

export default Trainers;
