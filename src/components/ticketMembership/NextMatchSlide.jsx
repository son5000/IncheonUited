// import { useState } from "react";
import React from "react";
import { useRef } from "react";
import { useCallback } from "react";
import Slider from "react-slick";


export default function NextMatchSlide() {
     
  const slickRef = useRef(null);
  const previous = useCallback(() => slickRef.current.slickPrev(), []);
  const next = useCallback(() => slickRef.current.slickNext(), []);

  const settings = {
    autoplay : false,
    autoplaySpeed:1500,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  };

 
  return (
    <>
    <div className="nextMatch_slide">
        <button className="btn-next" onClick={next}></button>
        <button className="btn-prev" onClick={previous}></button>
        <Slider className="slideList" {...settings} ref={slickRef}>
            <div className="slide-item">
              <div>
                <div>
                    <span>
                        <strong>인천UTD</strong>
                        <img src="/images/ticketMembership/K18.png" alt="인천유나이티드 엠블럼" />
                    </span>
                    VS
                    <span>
                        <img src="/images/ticketMembership/K21.png" alt="강원FC 엠블럼" />
                        <strong>강원FC</strong>
                    </span>
                </div>
                <time dateTime="2024-10-06/15:00">10월 06일 (일) 15:00</time>
                <mark>인천축구전용경기장</mark>
              </div>
            </div>
            <div className="slide-item">
              <div>
                <div>
                    <span>
                        <strong>인천UTD</strong>
                        <img src="/images/ticketMembership/K18.png" alt="인천유나이티드 엠블럼" />
                    </span>
                    VS
                    <span>
                        <img src="/images/ticketMembership/K21.png" alt="강원FC 엠블럼" />
                        <strong>강원FC</strong>
                    </span>
                </div>
                <time dateTime="2024-10-06/15:00">10월 06일 (일) 15:00</time>
                <mark>인천축구전용경기장</mark>
              </div>
            </div>
            <div className="slide-item">
              <div>
                <div>
                    <span>
                        <strong>인천UTD</strong>
                        <img src="/images/ticketMembership/K18.png" alt="인천유나이티드 엠블럼" />
                    </span>
                    VS
                    <span>
                        <img src="/images/ticketMembership/K21.png" alt="강원FC 엠블럼" />
                        <strong>강원FC</strong>
                    </span>
                </div>
                <time dateTime="2024-10-06/15:00">10월 06일 (일) 15:00</time>
                <mark>인천축구전용경기장</mark>
              </div>
            </div>
        </Slider>   
    </div>     
    </>
  );
}