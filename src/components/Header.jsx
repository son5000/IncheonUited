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

  const [hamburgerMenu , setHamburgerMenu] = useState(false);
  const [isActive,setisActive] = useState(Array(5).fill(false));
  
  const handleMenuOpen = (index,e) => {
    if(!hamburgerMenu){
      return;
    }

    if(window.innerWidth <= 680){
      let temp = isActive.slice();
      if(temp[index]){
        e.preventDefault();
        temp[index] =false;
        return setisActive(temp)
      }
      e.preventDefault();
      temp[index] = true;
      return setisActive(temp)
    }
  }

  return (
      <header style={{'--header--opacity':opacityValue}}>
      {/* 헤더 */}
        <div className="size1442">
        {/* 메인 로고 H1 */}
        <h1>
          <Link to={'/'} className="header">
            <img src="/images/main/Main_logo_header.png" alt="인천유나이티드 로고" />
          </Link>
        </h1>
        {/*  메인 네비게이션 Nav */}
        <nav onClick={() => setHamburgerMenu(true)} className={hamburgerMenu ? "active" : ""}>
          <ul>
            <li className={isActive[0] ? "active" : ""}>
              <Link onClick={(e) => handleMenuOpen(0,e)} className={isActive[0] ? "active" : ""} to={"club/introduction"}>CLUB</Link>
              <ul>
                <li>
                  <Link to={"club/introduction"}>구단소개</Link>
                </li>
                <li>
                  <Link to={"club/greeting"}>인사말</Link>
                </li>
                <li>
                <Link to={"club/stadium"}>경기장</Link>
                </li>
              </ul>
            </li>
            <li className={isActive[1] ? "active" : ""} >
              <Link onClick={(e) => handleMenuOpen(1,e)} className={isActive[1] ? "active" : ""}  to={"player/coachingstaff"}>PLAYER</Link>
              <ul>
                <li>
                  <Link to={"player/coachingstaff"}>코칭/지원스태프</Link>
                </li>
                <li>
                  <Link to={"player/pro"}>프로</Link>
                </li>
                <li>
                  <Link to={"player/schedule"}>선수단 일정</Link>
                </li>
              </ul>
            </li>
            <li className={isActive[2] ? "active" : ""}>
              <Link onClick={(e) => handleMenuOpen(2,e)} className={isActive[2] ? "active" : ""} to={"matchCenter/gameSchedule"}>MATCH CENTER</Link>
              <ul>
                <li>
                  <Link to={"matchCenter/gameSchedule"}>경기일정/결과</Link>
                </li>
                <li>
                  <Link to={"matchCenter/ranking"}>순위표</Link>
                </li>
              </ul>
            </li>
            <li  className={isActive[3] ? "active" : ""}>
              <Link onClick={(e) => handleMenuOpen(3,e)} className={isActive[3] ? "active" : ""} to={"fanZone/announcement"}>FANZONE</Link>
              <ul>
                <li>
                  <Link to={"fanZone/announcement"}>공지사항</Link>
                </li>
                <li>
                  <Link to={"fanZone/news"}>구단뉴스</Link> 
                </li>
                <li>
                  <Link to={"fanZone/utdReporter"}>UTD기자단</Link>
                </li>
                <li>
                  <Link to={"fanZone/vod"}>VOD</Link>
                </li>
                <li>
                  <Link to={"fanZone/gallery"}>갤러리</Link>
                </li>
                <li>
                  <Link to={"fanZone/magazine"}>공식매거진</Link>
                </li>
                <li>
                  <Link to={"fanZone/cheerSong"}>응원가</Link>
                </li>
                <li>
                  <Link to={"fanZone/cheeringGrounds"}>응원마당</Link>
                </li>
                <li>
                  <Link to={"fanZone/event"}>이벤트</Link>
                </li>
                <li>
                  <Link to={"fanZone/lostItem"}>분실물</Link>
                </li>
              </ul>
            </li>
            <li className={isActive[4] ? "active" : ""}>
              <Link onClick={(e) => handleMenuOpen(4,e)} className={isActive[4] ? "active" : ""} to={"ticketMembership/buyTickets"}>TICKET / MEMBERSHIP</Link>
              <ul>
                <li>
                  <Link to={"ticketMembership/buyTickets"}>티켓 구매</Link>
                </li>
                <li>
                  <Link to={"ticketMembership/buyMembership"}>멤버쉽/시즌권/예매권북 구매</Link>
                </li>
                <li>
                  <Link to={"ticketMembership/groupTour"}>단체 관람</Link>
                </li>
                <li>
                  <Link to={"ticketMembership/frequentlyQ&A"}>FAQ</Link>
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
