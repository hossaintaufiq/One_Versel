import Vector from "../assets/Vector.png";
import Image from "../assets/image.png";
// import ImageBg from "../assets/imageBg.png";
// import arrow from "../assets/right.png";

const StorySection = () => {
  return (
    <div className="max-w-[1512px] max-h-[632px] flex flex-col lg:flex-row mb-12 md:mb-5 lg:mb-0 mt-5">
      <div className="relative w-full lg:w-2/5 flex justify-center items-center lg:justify-start lg:items-start">
        {/* <div
          className="absolute bottom-0 z-20 left-0 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[300px] lg:h-3/6 bg-cover"
          style={{ backgroundImage: `url(${ImageBg})` }}
        ></div> */}
        <div className="relative z-10 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-full lg:h-auto">
          <img src={Image} alt="Main" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="w-full lg:w-3/5 flex flex-col gap-6 lg:gap-10 lg:py-10 items-center lg:items-start lg:mr-36 p-5 lg:p-0">
        <div className="flex flex-col gap-3 lg:gap-6">
          <div>
            <h1 className="text-3xl text-[#161734] sm:text-4xl lg:text-5xl font-light">
              ONS <span className="font-bold">VERHAAL</span>
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-[20px] h-[30px] sm:w-[28.74px] sm:h-[42px]">
              <img src={Vector} alt="Vector" />
            </div>
            <h1 className="text-xl text-[#161734] sm:text-2xl font-normal">
              Hier is ruimte voor een korte introductie van één a twee regels
              tekst.
            </h1>
          </div>
        </div>
        <div className="text-base sm:text-lg font-light leading-7 text-[#161734]">
          Hier is ruimte voor een korte introductie van één a twee regels tekst.
          Hier is ruimte voor een korte introductie van één a twee regels tekst.
          Hier is ruimte voor een korte introductie van één a twee regels tekst.
        </div>
        <div className="text-base sm:text-lg font-light leading-7 text-[#161734]">
          Hier is ruimte voor een korte introductie van één a twee regels tekst.
          Hier is ruimte voor een korte introductie van één a twee regels tekst.
          Hier is ruimte voor een korte introductie van één a twee regels tekst.
        </div>
        <div className="flex gap-5">
          <button className="relative inline-block w-32 h-10 sm:w-48 sm:h-12">
            <div className="skew-background rounded-sm absolute inset-0 transform skew-x-12 bg-[#161734]"></div>
            <div className="relative flex justify-center items-center h-12 px-6 bg-transparent text-white font-medium text-base sm:text-lg">
              Lees meer
            </div>
          </button>
          {/* <button className="w-32 h-10 sm:w-48 sm:h-12 sqew flex justify-center items-center bg-[#161734] text-white font-medium text-base sm:text-lg">
            Lees meer
          </button> */}
          <button className="relative  inline-block w-32 h-10 sm:w-48 sm:h-12">
            <div className="skew-background bdr rounded-sm absolute inset-0 transform skew-x-12 bg-white"></div>
            <div className="relative flex justify-center items-center h-12 px-6 bg-transparent text-[#161734] font-medium text-base sm:text-lg">
              Contact
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
