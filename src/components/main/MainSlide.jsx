// import { useState } from "react";
import React from "react";
import { useRef } from "react";
import { useCallback } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function MainSlide() {

  const slickRef = useRef(null);
  const previous = useCallback(() => slickRef.current.slickPrev(), []);
  const next = useCallback(() => slickRef.current.slickNext(), []);

  const settings = {
    autoplay : true,
    autoplaySpeed:1500,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
 
  return (
    <div className="mainSlide-container">
            <button className="btn-next" onClick={next}></button>
            <button className="btn-prev" onClick={previous}></button>
        <Slider className="slideList" {...settings} ref={slickRef}>
           <div className="slide-item"><img src="/images/main/main_slide_img_1.png" alt="메인 슬라이드 이미지1번"/></div>
           <div className="slide-item"><img src="/images/main/main_slide_img_2.png" alt="메인 슬라이드 이미지2번"/></div>
           <div className="slide-item"><img src="/images/main/main_slide_img_3.png" alt="메인 슬라이드 이미지3번"/></div>
        </Slider>   
    </div>
  );
}