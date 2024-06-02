import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Vector from "../assets/Vector.png";
import LeftArrow from "../assets/left.png";
import RightArrow from "../assets/right.png";
import sectionbg1 from "../assets/sectionbg1.png";
import sectionbg2 from "../assets/sectionbg2.png";
import sectionbg from "../assets/sectionbg.png";

const ArticlesSection = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <div className="max-w-[1512px] flex flex-col lg:flex-row max-h-[607px]  gap-5">
        {/*pl-5 lg:pl-40 pb-20*/}
        <div className="w-[383px] h-[607px] mb-14 md:mb-5 flex items-center justify-center">
          <div className="">
            <h1 className="text-5xl font-light py-2">
              ONS <span className="font-bold">TEAM</span>
            </h1>
            <div className="flex items-center gap-3">
              <div className="w-[40.74px] h-[62px]">
                <img src={Vector} alt="Vector" />
              </div>
              <h1 className="text-2xl font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </h1>
            </div>
            <button className="relative inline-block w-32 h-10 sm:w-48 sm:h-12">
              <div className="skew-background rounded-sm absolute inset-0 transform skew-x-12 bg-[#161734]"></div>
              <div className="relative flex justify-center items-center h-12 px-6 bg-transparent text-white font-medium text-base sm:text-lg">
                Alle artikelen
              </div>
            </button>
          </div>
        </div>
        <div className="relative  w-full overflow-hidden">{/* h-[607px]*/}
          <Slider ref={sliderRef} {...settings}>
            <div className="relative w-full overflow-hidden h-[607px]">
              <div className="absolute top-0 right-0 w-full h-[607px] md:hf">
                <img
                  src={sectionbg2}
                  alt="Image 1"
                  className="absolute top-12 right-60 md:right-80 w-3/4 md:w-full h-[480px] object-cover"
                />
                <img
                  src={sectionbg1}
                  alt="Image 2"
                  className="absolute top-5 right-28 md:right-44 w-3/4 md:w-full h-[550px] object-cover"
                />
                <img
                  src={sectionbg}
                  alt="Image 3"
                  className="absolute top-0 right-[-100px] w-3/4 md:w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="relative w-full overflow-hidden h-[607px]">
              <div className="absolute top-0 right-0 w-full h-[607px]">
                <img
                  src={sectionbg2}
                  alt="Image 1"
                  className="absolute top-12 right-60 md:right-80 w-3/4 md:w-full h-[480px] object-cover"
                />
                <img
                  src={sectionbg1}
                  alt="Image 2"
                  className="absolute top-5 right-28 md:right-44 w-3/4 md:w-full h-[550px] object-cover"
                />
                <img
                  src={sectionbg}
                  alt="Image 3"
                  className="absolute top-0 right-[-100px] w-3/4 md:w-full h-full object-cover"
                />
              </div>
            </div>
          </Slider>
          <div className="absolute bottom-4 left-4 flex gap-2">
            <button className="custombtn" onClick={handlePrev}>
              <img src={LeftArrow} className="w-7 h-5" alt="Left Arrow" />
            </button>
            <button className="custombtn" onClick={handleNext}>
              <img src={RightArrow} className="w-7 h-5" alt="Right Arrow" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticlesSection;
