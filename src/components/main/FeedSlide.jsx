import { useState , useCallback ,useRef } from "react";
import data from '../../data.json';
import React from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const feedData = data.feed;
const dataCategori = feedData.map((el) => el.categori)
const categoriList = dataCategori.filter((el,index) => dataCategori.indexOf(el) === index)

const changeLink = (value) => {
  switch(value){
    case 'NOTICE' :
      return '/fanZone/announcement'
    case 'UTDREPORT' :
      return '/fanZone/utdReporter'
    case 'INSTAGRAM' :
      return 'https://www.instagram.com/incheonutd/'
    case 'YOUTUBE' :
      return '/fanZone/vod'
    case 'NEWS' :
      return '/fanZone/news'
    case 'ACADEMY' :
      return '/fanZone/gallery'
    default :
      return '/';
  }
}

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
        breakpoint:1120,
        settings:{
          slidesToShow:3
        }
      },
      {
        breakpoint:840,
        settings:{
          slidesToShow:2
        }
      }
    ]
  };

  const [ListActive,setListActive] = useState('ALL')
  const newFeed = ListActive === 'ALL' ? feedData : feedData.filter((el) => el.categori === ListActive)

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
              <Link to={changeLink(el.categori)}>
                <img src={el.image} alt={el.title} />
                <p><strong>{(el.categori === 'NOTICE' ? '공지사항' :  `${el.categori}`)}</strong>I {el.text}</p>
              </Link>
          </div>
        )
      })}
      </Slider>
    </div>
    </> 
  )
}