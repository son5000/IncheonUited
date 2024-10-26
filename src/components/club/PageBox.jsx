import {useLocation, NavLink } from 'react-router-dom';
import { useEffect , useState } from 'react';
import Banner from '../Banner';
import data from '../../data.json'

// sub page > club Layout

export default function PageBox ({children,aniWidth}){
    
    const location = useLocation();
    const secondLocation = location.pathname.split('/')[2]; 
    const tabs = data[secondLocation];
    const [isMenuClick,setIsMenuClick] = useState('none');
    let temp  = '';

    // 스위치 문을 사용한 이유는 메뉴를 클릭했을때 최상단의 현재 페이지를 보여줘야하는데 
    // 로케이션 값을 사용해서 초기값을 잡아주지 않는다면 유저가 url 값으로 직접 서브페이지에
    // 도달했을때 현재페이지의 값을 표현해주는  text 의 오류가 생길것 같아서 
    // location 에 따라서 초기값을 잡아줘야 한다고 생각했다.

    switch(secondLocation) {
        case 'vision': temp = '비전 2033';
        break;
        case 'tel': temp = '조직도 연락처';
        break;
        case 'emblem': temp = '엠블럼,마스코트';
        break;
        case 'history': temp = '연혁 2003년 창단';
        break;
        default:
            temp = '구단소개';
        }
        
    if (secondLocation === 'stadium'){
        switch(secondLocation) {
            case 'parkingInformation' : temp = '주차장 안내';
            break;
            case 'seatInformation' : temp = '좌석 안내';
            break;
            default : 
            temp = '찾아오시는길';
        }
    }
    
    const [selectedMenu,setSelectedMenu] = useState(temp);
    

    useEffect (() => {
        setSelectedMenu(temp);
    },[temp])    
    const handleMenuOpen = () => {
        if(isMenuClick === 'block'){
            return setIsMenuClick('none');
        }
        setIsMenuClick('block');
    }

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 640)
    }

    useEffect(() => {
        window.addEventListener('resize',handleResize)
        handleResize()
        return () =>{
            window.removeEventListener('resize',handleResize)
        } 
    },[])


    if(isMobile){
        return (
            <div className="size1442">
                <aside onClick={() => handleMenuOpen()} className='clubSubTabs' style={{'--menu--display':`${isMenuClick}`}}>
                    <button>{selectedMenu}</button>
                     {tabs.map((el,index)=> 
                        <button onClick={() => setIsMenuClick('60px')} key={index}>
                            <NavLink onClick={() => setSelectedMenu(el.text)}  className={({ isActive }) => ( el.link === location.pathname ? 'active' : '')} to={el.link}>{el.text}</NavLink>
                        </button>)}
                </aside>
                <h2>
                    {secondLocation === 'introduction' ? <>인천,<br />한계를 돌파하라!</> : 'Inchoen Football Stadium'}          
                </h2>
                {children}
            </div>
        )
    }


    return (
        <>
        <Banner aniWidth={aniWidth} />
        <div className="size1442">
            <h2>
                {secondLocation === 'introduction' ? <>인천,<br />한계를 돌파하라!</> : 'Inchoen Football Stadium'}          
            </h2>
            <div>
                <aside>
                     {tabs.map((el,index)=> 
                        <button key={index}>
                            <NavLink  className={({ isActive }) => ( el.link === location.pathname ? 'active' : '')} to={el.link}>{el.text}</NavLink>
                        </button>)}
                </aside>
                {children}
            </div>
        </div>
        </>
    )

}