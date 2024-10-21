import { useState , useCallback ,useRef } from "react";
import data from '../../data.json';
import React from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const feedData = data.feed;
// 데이터의 카테고리만 배열 생성
const dataCategori = feedData.map((el) => el.categori)
// 데이터의 카테고리중 중복되는 값 제거 해서 배열 생성
const categoriList = dataCategori.filter((el,index) => dataCategori.indexOf(el) === index)

export default function FeedSlide () {
  
  const slickRef = useRef(null);
  const previous = useCallback(() => slickRef.current.slickPrev(), []);
  const next = useCallback(() => slickRef.current.slickNext(), []);

  const settings = {
    autoplay : false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,
    responsive:[
      {
        breakpoint:640,
        settings:{
          slidesToShow:2
        }
      }
    ]
  };

  const [ListActive,setListActive] = useState('ALL')
  // 초기로딩시 tap-menu 요소중 ALL요소에 active 클래스를 주기위해  State의 기본값으로 'ALL'적용.
  const newFeed = ListActive === 'ALL' ? feedData : feedData.filter((el) => el.categori === ListActive)
  // tap-item 을 클릭시에 랜더링후 feed에 표시될 데이터를 새로 정렬해서 newFeed변수에 담아준다.
  return (
    <>
    <div className="tap-container">
      <button onClick={() => setListActive('ALL')} className={'tap-item' + (ListActive === 'ALL' ? ' active' : '')}>ALL</button>
      {categoriList.map((el,index)=>{
        return <button onClick={() => setListActive(el)} key={index} className={`tap-item ` + (ListActive === el ? 'active' : '')}  >{el.toUpperCase()}</button>
      })}
    </div>
    <div className="feedSlide-container">
      <button className="btn-prev" onClick={previous}></button>
      <button className="btn-next" onClick={next}></button>
      <Slider {...settings} ref={slickRef}>
      {newFeed.map((el,index)=> {
        return (
          <div className="slide-item" key={index}>
              <div>
                <img src={el.image} alt={el.title} />
                <p><strong>{(el.categori === 'NOTICE' ? '공지사항' :  `${el.categori}`)}</strong>I {el.text}</p>
              </div>
          </div>
        )
      })}
      </Slider>
    </div>
    </> 
  )
}