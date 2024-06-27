import BackgroundSVG from "../assets/bg.svg";
import { BsFillPlayFill } from "react-icons/bs";
import { IoPlayCircle } from "react-icons/io5";

const HeroSection: React.FC = () => {
  const bgStyle = {
    backgroundImage: `url(${BackgroundSVG})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="w-full relative top-0 bg-[#f1fef4f2] overflow-hidden flex flex-col items-center gap-6">
      <div
        className="absolute md:top-[60px] right-0 h-full w-full md:w-[60%]  z-10 "
        style={bgStyle}
      ></div>
      <div className="w-full md:max-w-7xl relative px-4 md:px-10 py-12 md:py-[70px] lg:py-[100px] flex items-center justify-between z-30">
        <div className="w-full md:w-[50%] flex flex-col items-start gap-4 md:gap-5">
          <h1 className="text-left text-3xl font-bold md:text-4xl lg:text-5xl">
            Modern online and offline payments for Africa
          </h1>
          <p className="text-left md:text-lg">
            Paystack helps businesses in Africa get paid by anyone, anywhere in
            the world
          </p>
          <div className="flex items-center gap-4 mt-3">
            <button className="bg-[#3bb75e] px-4 py-3 text-sm md:text-base text-white rounded font-semibold transition-all duration-300 hover:bg-[#3f9457] hover:transform hover:-translate-y-[1px]">
              Create a free account
            </button>
            <button className="text-[#3bb75e] text-sm md:text-base font-semibold">
              or Contact Sales
            </button>
          </div>
        </div>
      </div>
      {/* bottom Hero */}
      <div className="w-full md:max-w-7xl">
        <div className="w-full relative z-20 px-4 md:px-10 py-12 flex flex-col md:flex-row items-center justify-between ">
          <div className="w-full md:w-[50%] mb-6 flex flex-col items-start gap-2">
            <p className="text-sm md:text-base">
              Trusted by over 200,000 businesses
            </p>
            <div className="flex items-center gap-4 mt-1">
              <img
                src="https://assets.paystack.com/assets/img/logos/merchants/Dominos-Plain.svg"
                className="h-[15px] w-auto"
                alt=""
              />
              <img
                src="https://assets.paystack.com/assets/img/logos/merchants/mtn-group-grayscale.svg"
                className="h-[15px] w-auto"
                alt=""
              />
              <img
                src="https://assets.paystack.com/assets/img/logos/merchants/Bolt-Stack-Blue_200304_153027.svg"
                className="h-[15px] w-auto"
                alt=""
              />
              <img
                src="https://assets.paystack.com/assets/img/logos/merchants/Axa-mansard-_-Plain.svg"
                className="h-[15px] w-auto"
                alt=""
              />
            </div>
          </div>

          <div className="w-full md:w-[45%] pt-6 border-t md:border-none border-[#dfe1e0] flex flex-col md:flex-row items-start md:items-center gap-2 ">
            <p className="text-bold text-base md:text-right md:font-semibold">
              Watch MTN Chief Transformation Officer, Olubayo Adekanmbi, discuss
              working with Paystack
            </p>
            <IoPlayCircle color="#0ba4db" className="w-12 h-12 hidden md:block" />
            <button className="text-[#0ba4db] font-semibold flex items-center md:hidden">
              <BsFillPlayFill color="#0ba4db" className="w-6 h-6" />
              Play Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
