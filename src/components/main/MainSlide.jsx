// import { useState } from "react";
import React from "react";
import { useRef } from "react";
import { useCallback } from "react";
import Slider from "react-slick";
import { useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import data from '../../data.json'


export default function MainSlide() {
     
  const location = useLocation();
  const firstLocation = location.pathname.split('/')[1];

  const slickRef = useRef(null);
  const previous = useCallback(() => slickRef.current.slickPrev(), []);
  const next = useCallback(() => slickRef.current.slickNext(), []);

  const settings = {
    autoplay : !firstLocation,
    autoplaySpeed:1500,
    dots: !firstLocation,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  };

  if(!firstLocation){
    const slideData = data.mainDefaultSlide;
    return (
    <div className="mainSlide-container">
        <button className="btn-next" onClick={next}></button>
        <button className="btn-prev" onClick={previous}></button>
        <Slider className="slideList" {...settings} ref={slickRef}>
          {/* {slideData ||} */}
          {slideData && slideData.map((el) => <div key={el.id} className="slide-item"><img src={el.src} alt="메인 슬라이드 이미지1번"/></div>)}
        </Slider>   
    </div>
  )}

 
  return (
    <>
    <div className="mainSlide-container">
        <button className="btn-next" onClick={next}></button>
        <button className="btn-prev" onClick={previous}></button>
        <Slider className="slideList" {...settings} ref={slickRef}>
            <div className="slide-item">
              <div>
                <p>
                  <span>인천UTD</span>
                  <img src="/images/ticketMembership/K18.png" alt="인천유나이티드 엠블럼" />
                  <b>VS</b>
                  <img src="/images/ticketMembership/K21.png" alt="강원FC 엠블럼" />
                  <span>강원FC</span>
                </p>
                <time datetime="2024-10-06/15:00">10월 06일 (일) 15:00</time>
                <mark>인천축구전용경기장</mark>
              </div>
            </div>
            <div className="slide-item">
              <div>
                <p>
                  <span>인천UTD</span>
                  <img src="/images/ticketMembership/K18.png" alt="인천유나이티드 엠블럼" />
                  <b>VS</b>
                  <img src="/images/ticketMembership/K21.png" alt="강원FC 엠블럼" />
                  <span>강원FC</span>
                </p>
                <time datetime="2024-10-06/15:00">10월 06일 (일) 15:00</time>
                <mark>인천축구전용경기장</mark>
              </div>
            </div>
            <div className="slide-item">
              <div>
                <p>
                  <span>인천UTD</span>
                  <img src="/images/ticketMembership/K18.png" alt="인천유나이티드 엠블럼" />
                  <b>VS</b>
                  <img src="/images/ticketMembership/K21.png" alt="강원FC 엠블럼" />
                  <span>강원FC</span>
                </p>
                <time datetime="2024-10-06/15:00">10월 06일 (일) 15:00</time>
                <mark>인천축구전용경기장</mark>
              </div>
            </div>
        </Slider>   
    </div>     
    </>
  );
}