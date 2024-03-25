import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    onClick={onClick}
    className={"block absolute -right-10 top-2 cursor-pointer" }
  >
    <FaAngleRight  size={30} className="text-red"/>

    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    onClick={onClick}
    className={"block absolute -left-10 top-2 cursor-pointer" }
    >
      <FaAngleLeft size={30} className="text-red"/>

      </div>
  );
}

function Headerslider() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    speed: 2000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="min-w-0 min-h-0 w-[500px]">

    <Slider {...settings}>
      {[1,2,3,4,5].map((items,index)=>
      <div key={index} className="!flex items-center justify-center gap-6 text-sm text-center  ">
      <div >
        <h3  className="text-red">UAN </h3>
        <p>+92348901234987</p>
      </div>
      <div>
        <h3  className="text-red">Mrs.shah</h3>
        <p>+92348901234987</p>
      </div>
      <div>
        <h3 className="text-red">Mr.farroqi</h3>
        <p>+9223958623745</p>
      </div></div>)}
     
    </Slider>
    </div>

  );
}

export default Headerslider;
