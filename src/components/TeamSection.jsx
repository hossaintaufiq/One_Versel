import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Vector from "../assets/Vector.png";
import LeftArrow from "../assets/left.png";
import RightArrow from "../assets/right.png";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";
import Img4 from "../assets/img4.png";

const TeamSection = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <div className="max-w-[1512px] max-h-[794px]  gap-5">{/*pl-5 lg:pl-40 py-10 pb-20*/}
        <div className="max-w-[1312px] max-h-[132px] mr-20 mb-14 md:mb-5">
          <h1 className="text-5xl font-light py-2">
            ONS <span className="font-bold">TEAM</span>
          </h1>
          <div className="flex items-end justify-between">
            <div className="flex items-center gap-3">
              <div className="w-[28.74px] h-[42px]">
                <img src={Vector} alt="Vector" />
              </div>
              <h1 className="text-2xl font-normal">
                Die het hoogst mogelijke rendement halen uit uw <br />
                zichtbaarheidspotentieel
              </h1>
            </div>
            <div className="w-[120px] h-[38px] gap-2 flex">
              <button className="custombtn" onClick={handlePrev}>
                <img src={LeftArrow} className="w-7 h-5" alt="Left Arrow" />
              </button>
              <button className="custombtn" onClick={handleNext}>
                <img src={RightArrow} className="w-7 h-5" alt="Right Arrow" />
              </button>
            </div>
          </div>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {/* Card 1 */}
          <div className="card w-[357.29px] h-[462px] opacity-40 hover:opacity-100 relative overflow-hidden">
            <div className="relative w-full h-[380px]">
              <img
                src={Img1}
                alt="Card Image"
                className="w-full h-full object-cover"
              />
              <div className="card-overlay absolute inset-0 bg-gradient-to-b from-[rgba(19,33,71,0.7)] to-[rgba(32,110,84,0.7)] z-10 flex items-center justify-center opacity-0 transition-opacity duration-300">
                <span className="text-white px-5 text-center">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore.
                </span>
              </div>
            </div>
            <div className="w-full h-[62px]  flex flex-col justify-center px-6 mt-5">
              <h1 className="text-lg font-semibold">Employee Name</h1>
              <p className="text-sm text-gray-700">
                Employee position goes here
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card w-[357.29px] h-[462px]  opacity-40 hover:opacity-100 relative overflow-hidden">
            <div className="relative w-full h-[380px]">
              <img
                src={Img2}
                alt="Card Image"
                className="w-full h-full object-cover"
              />
              <div className="card-overlay absolute inset-0 bg-gradient-to-b from-[rgba(19,33,71,0.7)] to-[rgba(32,110,84,0.7)] z-10 flex items-center justify-center opacity-0 transition-opacity duration-300">
                <span className="text-white px-5 text-center">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore.
                </span>
              </div>
            </div>
            <div className="w-full h-[62px] flex flex-col justify-center px-6 mt-5">
              <h1 className="text-lg font-semibold">Employee Name</h1>
              <p className="text-sm text-gray-700">
                Employee position goes here
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="card w-[357.29px] h-[462px] opacity-40 hover:opacity-100 relative overflow-hidden">
            <div className="relative w-full h-[380px]">
              <img
                src={Img3}
                alt="Card Image"
                className="w-full h-full object-cover"
              />
              <div className="card-overlay absolute inset-0 bg-gradient-to-b from-[rgba(19,33,71,0.7)] to-[rgba(32,110,84,0.7)] z-10 flex items-center justify-center opacity-0 transition-opacity duration-300">
                <span className="text-white px-5 text-center">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore.
                </span>
              </div>
            </div>
            <div className="w-full h-[62px] flex flex-col justify-center px-6 mt-5">
              <h1 className="text-lg font-semibold">Employee Name</h1>
              <p className="text-sm text-gray-700">
                Employee position goes here
              </p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="card w-[357.29px] h-[462px] opacity-40 hover:opacity-100 relative overflow-hidden">
            <div className="relative w-full h-[380px]">
              <img
                src={Img4}
                alt="Card Image"
                className="w-full h-full object-cover"
              />
              <div className="card-overlay absolute inset-0 bg-gradient-to-b from-[rgba(19,33,71,0.7)] to-[rgba(32,110,84,0.7)] z-10 flex items-center justify-center opacity-0 transition-opacity duration-300">
                <span className="text-white px-5 text-center">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore.
                </span>
              </div>
            </div>
            <div className="w-full h-[62px] flex flex-col justify-center px-6 mt-5">
              <h1 className="text-lg font-semibold">Employee Name</h1>
              <p className="text-sm text-gray-700">
                Employee position goes here
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default TeamSection;
