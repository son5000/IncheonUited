import { useContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import QuickSns from "../../src/components/QuickSns";
// import { UserContext } from "../contexts/userContext";
export default function Header() {

  // const { user } = useContext(UserContext)
  // console.log(user)

  const [id, setId] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(true);  
  useEffect(() => {
    // 로그인된 유저 정보를 /session API로 가져오기
    fetch('http://localhost:5000/session', {
      method: 'GET',
      credentials: 'include', // 세션 쿠키를 포함하여 요청
    })
      .then((response) => {
        if (response.ok) {
          return response.json(); //두번째 then 으로 값 전달.
        } else {
          throw new Error('로그인 상태가 아닙니다.');
        }
      })
      .then((data) => { //첫번째 then 에서 data 로 값을 받음.
        setId(data.userId)
        setIsLoggedIn(true);}) // 로그인한 유저 ID 상태에 저장
        .catch((error) => {
        setId(''); // 로그인되지 않은 상태
        setIsLoggedIn(false)
      });
  }, [isLoggedIn]);

  const handleLogout = () => {
    if(isLoggedIn){
      fetch('http://localhost:5000/logout' , {
      method: 'POST',
      credentials:'include',
      }).then((response) => {
        if(response.ok){
        setIsLoggedIn(false)
        setId('')
        alert('로그아웃 되었습니다.')
      }else{
        return response.json().then((data) => {
          throw new Error(data.error || '세션 상태를 확인할 수 없습니다.')
        })
      }
      }).catch((error) => {
        console.error(error.message);
        alert(error.message); // 에러 메시지를 사용자에게 표시 (예: alert)
      })
    } 
  }


    
  const location = useLocation();
  const firstLocation = location.pathname.split('/')[1];

  const [opacityValue , setOpacityValue ] = useState(0);
  
  function onScroll() {
    const scrollValue = window.scrollY;
    setOpacityValue(Math.min(scrollValue / 500 , 1))    
  }

  useEffect(()=> {
    window.addEventListener("scroll",onScroll);
    return () => window.removeEventListener("scroll",onScroll);
  },[]);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1120);

  const handleResize = () => {
      setIsMobile(window.innerWidth <= 1120)
  }

  useEffect(() => {
      window.addEventListener('resize',handleResize)
      handleResize()
      return () =>{
          window.removeEventListener('resize',handleResize)
      } 
  },[])

  const hamburgerMenuRef = useRef();
  const clickHamburgerOutSide = (e) => {
    if(isMobile){
      if(hamburgerMenuRef.current && !hamburgerMenuRef.current.contains(e.target)){
        setOpenHamburgerMenu(false);
        setisActive(Array(5).fill(null));
      }
    }
  }

  const handleHamburger = () =>  {
    if(isMobile  && !OpenHamburgerMenu){
      return  setOpenHamburgerMenu(true);
    } 
    return 
  }
  
  const [OpenHamburgerMenu , setOpenHamburgerMenu] = useState(false);
  // useEffect 함수로 햄버거 바깥요소에 mousedown 이벤트가 일어났을때
  // clickHamburgerOutSide 를 실행하게 한다.
  useEffect(()=> {
    if(OpenHamburgerMenu){
      document.addEventListener('mousedown',clickHamburgerOutSide);
    } else {
      document.removeEventListener('mousedown',clickHamburgerOutSide);
    }
    return () => document.removeEventListener('mousedown',clickHamburgerOutSide);
  })

  // 햄버거 메뉴안의 각각의 서브메뉴의 active를 위한  state
  const [isActive,setisActive] = useState(Array(5).fill(false));
  // 서브메뉴의 핸들러 
  // 햄버거 메뉴의 상태가 열려있는 상태에만 작동하게 만들었다.
  const handleMenuOpen = (index,e) => {
    if(!OpenHamburgerMenu){
      return;
    }
    if(isMobile){
      let temp = Array(5).fill(false);
      if(isActive[index]){
        return setisActive(temp);
      }
      temp[index] = true;
      e.preventDefault();
      return setisActive(temp);
    }
  }

  const style = {
    '--header--opacity':opacityValue,
    '--boarder--bottom': firstLocation ? '1px solid #666666' : '',
  }

  return (
      <header style={style}>
      {/* 헤더 */}
        <div className="size1442">
        {/* 메인 로고 H1 */}
        <h1>
          <Link to={'/'}>
            인천유나이티드 공식 홈페이지
          </Link>
        </h1>
        {firstLocation && (<span>{firstLocation.toUpperCase()}</span>)}
        <nav ref={hamburgerMenuRef} onClick={() => handleHamburger()} className={OpenHamburgerMenu ? "active" : ""}>
          { isMobile && 
          <div>
          <Link to={"login"}>LOGIN</Link>
          <Link to={"login/joinUs"}>JOIN US</Link>
          </div>
          }
          <ul>
            <li className={isActive[0] ? "active" : ""}>
              <Link onClick={(e) => handleMenuOpen(0,e)} to={"club/introduction"}>CLUB</Link>
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
              <Link onClick={(e) => handleMenuOpen(1,e)}  to={"player/coachingstaff"}>PLAYER</Link>
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
              <Link onClick={(e) => handleMenuOpen(2,e)}  to={"matchCenter/gameSchedule"}>MATCH CENTER</Link>
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
              <Link onClick={(e) => handleMenuOpen(3,e)}  to={"fanZone/announcement"}>FANZONE</Link>
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
              <Link onClick={(e) => handleMenuOpen(4,e)}  to={"ticketMembership/buyTickets"}>TICKET / MEMBERSHIP</Link>
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
          {isMobile && <QuickSns />}
        </nav>
        { !isMobile && 
          <div>{isLoggedIn ? 
          <><Link>{id}님</Link><Link onClick={handleLogout}>LOGOUT</Link></> 
          : 
          <><Link to={"login"}>LOGIN</Link> <Link to={"login/joinUs"}>JOIN US</Link></>
          }</div>
        }
    </div>
      </header>
  );
}



