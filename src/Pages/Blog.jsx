import BlogBox from "../components/BlogBox/BlogBox";
import Footer from "../components/Footer/Footer";
import Img1 from "../images/blogpage/1.jpg";
import Img2 from "../images/blogpage/2.jpg";
import Img3 from "../images/blogpage/3.jpg";
import Img4 from "../images/blogpage/4.jpg";
import Img5 from "../images/blogpage/5.jpg";
import Img6 from "../images/blogpage/6.jpg";
import Img7 from "../images/blogpage/7.jpg";

function Blog() {
  return (
    <>
      <section>
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Blog
          </h1>
        </div>
        {/* blog */}
        <div className="py-[10rem] container gap-10 page-padding grid grid-cols-[60fr_40fr]">
          {/* blog */}
          <div className="flex flex-col gap-28">
            <BlogBox img={Img1} title="Yoga For Everyone in 2022" />
            <BlogBox
              img={Img2}
              title="Getting Back Into CrossFit After Vacation"
            />
            <BlogBox img={Img3} title="Meet Fitness Ambassador Grace" />
            <BlogBox img={Img4} title="The Best are European Materls Direct" />
            <BlogBox
              img={Img5}
              title="Give your Fitness a Boost with our Gym"
            />
            <BlogBox
              img={Img6}
              title="How to Get Fit Your Kids Moving Throughout The Summer"
            />
            <BlogBox
              img={Img7}
              title="Give your fitness a boost with our new gym challenge"
            />
          </div>

          {/* sidebar */}
          <div>
            {/* form */}
            <form className="flex">
              <input
                className="border-solid border-[1px] text-[#444] text-[16px] font-medium h-[60px] py-[5px] px-[20px] w-full rounded-tl-xl rounded-bl-xl outline-none"
                type="search"
                placeholder="Search..."
              ></input>
              <button type="submit">
                <i className="fa-solid fa-magnifying-glass bg-[#ff0336] text-white text-[23px] h-[60px] w-[60px] rounded-br-xl rounded-tr-xl pt-[18px]"></i>
              </button>
            </form>

            {/* categories */}
            <div className="flex flex-col bg-[#f8f8f8] my-[35px] p-[30px]"></div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Blog;
