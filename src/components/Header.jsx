import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {

  const [opacityValue , setOpacityValue ] = useState(0);
  function onScroll(){
  const scrollValue = window.scrollY;

  setOpacityValue(Math.min(scrollValue / 500 , 1))    
  }

  useEffect(()=> {
    window.addEventListener("scroll",onScroll);
    return () => window.removeEventListener("scroll",onScroll);
  },[]);


  return (
      <header style={{backgroundColor:`rgba(0,0,0,${opacityValue}`}}>
      {/* 헤더 */}
        <div className="size1442">
        {/* 메인 로고 H1 */}
        <h1>
          <Link to={'/'} className="header">
            <img src="/images/main/Main_logo_header.png" alt="인천유나이티드 로고" />
          </Link>
        </h1>
        {/*  메인 네비게이션 Nav */}
        <nav>
          <ul>
            <li>
              <Link to={'club/introduction'}>CLUB</Link>
              <ul>
                <li>
                  <Link to={'club/introduction'}>구단소개</Link>
                </li>
                <li>
                  <Link to={"club/greeting"}>인사말</Link>
                </li>
                <li>
                <Link to={"club/stadium"}>경기장</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to={'player/coachingstaff'}>PLAYER</Link>
              <ul>
                <li>
                  <Link to={'player/coachingstaff'}>코칭/지원스태프</Link>
                </li>
                <li>
                  <Link to={'player/pro'}>프로</Link>
                </li>
                <li>
                  <Link to={'player/schedule'}>선수단 일정</Link>
                </li>
              </ul>
            </li>
            <li>
              <a href="###">MATCH CENTER</a>
              <ul>
                <li>
                  <a href="###">경기일정/결과</a>
                </li>
                <li>
                  <a href="###">순위표</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="###">FANZONE</a>
              <ul>
                <li>공지사항</li>
                <li>구단뉴스</li>
                <li>UTD기자단</li>
                <li>VOD</li>
                <li>갤러리</li>
                <li>공식매거진</li>
                <li>홍보물</li>
                <li>응원가</li>
                <li>응원마당</li>
                <li>질문과 담변</li>
              </ul>
            </li>
            <li>
              <a href="###">TICKET / MEMBERSHIP</a>
              <ul>
                <li>
                  <a href="###">티켓 구매</a>
                </li>
                <li>
                  <a href="###">멤버쉽/시즌권/예매권북 구매</a>
                </li>
                <li>
                  <a href="###">FAQ</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="###">BLUE MARKET</a>
            </li>
          </ul>
        </nav>
        <div>
          <a href="###">LOGIN</a>
          <a href="###">JOIN US</a>
        </div>
    </div>
      </header>
  );
}
