import "./App.css";
import NavBar from "./NavBar";
import HeaderImage from "./images/image-hero-desktop.png";
import phoneImage from "./images/image-hero-mobile.png";
import databiz from "./images/client-databiz.svg";
import audiophile from "./images/client-audiophile.svg";
import meet from "./images/client-meet.svg";
import make from "./images/client-maker.svg";

function App() {
  return (
    <main className=" bg-MediumGray2 font-Epilogue  ">
      <div className=" mx-auto w-[375px] md:w-[1440px]  container">
        <NavBar />
        <div className=" grid md:grid-cols-2 mt-4 md:gap-4  ">
          <picture className=" md:order-2  ">
            <source media="(min-width: 768px)" srcSet={HeaderImage} />
            <img src={phoneImage} className="md:h-[80%] " alt="" />
          </picture>
          {/* Remote text div */}
          <div className=" flex flex-col mt-10 order-1 md:mt-[10rem] ">
            <h1 className=" md:text-start md:text-[5.4rem] md:leading-[6rem]  text-center text-4xl font-[800] ">
              Make <br className=" hidden md:block" /> remote work
            </h1>
            <p className="  md:w-[65%] md:text-start text-[18px] md:mt-10 text-center mt-4 text-MediumGray">
              {" "}
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <button className=" hover:bg-transparent font-[800] font-Epilogue border-[1px] border-AlmostBlack hover:text-AlmostBlack bg-AlmostBlack md:justify-self-start text-AlmostWhite rounded-[10px] mt-4 py-4 px-4 md:py-3 md:mt-10 md:w-[20%] mx-auto md:mx-0 w-[40%] md:mb-20 ">
              Learn more
            </button>
            <div className=" flex gap-10  justify-center items-center mt-[4rem] md:justify-start md:gap-[4rem] md:mt-20 ">
              <img
                className=" w-[80px] h-[20px] md:w-[100px] md:h-[20px]  "
                src={databiz}
                alt=""
              />
              <img
                className="w-[80px] h-[30px] md:w-[80px] md:h-[35px]  "
                src={audiophile}
                alt=""
              />
              <img
                className="w-[80px] h-[20px] md:w-[100px] md:h-[20px]  "
                src={meet}
                alt=""
              />
              <img
                className=" w-[80px] h-[20px] md:w-[100px] md:h-[25px] "
                src={make}
                alt=""
              />
            </div>
          </div>
          {/* Remote text div */}
        </div>
      </div>
    </main>
  );
}

export default App;
