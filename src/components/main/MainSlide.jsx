// import { useState } from "react";
import React from "react";
import { useRef } from "react";
import { useCallback } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import data from '../../data.json'


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
    arrows:false,
  };

  
    const slideData = data.mainDefaultSlide;

    return (
    <div className="mainSlide-container">
      <div className="btnBox">
        <button className="btn-prev" onClick={previous}></button>
        <button className="btn-next" onClick={next}></button>
      </div>
        <Slider className="slideList" {...settings} ref={slickRef}>
          {/* {slideData ||} */}
          {slideData && slideData.map((el) => <div key={el.id} className="slide-item"><img src={el.src} alt="메인 슬라이드 이미지1번"/></div>)}
        </Slider>   
    </div>
  )
}