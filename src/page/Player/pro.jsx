import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import data from "../../data.json"

const playersData = data.pro["players"];


export default function Pro () {

    const [isCategori,setIsCategori] = useState('전체');
    const newFeed = isCategori === '전체' ? playersData : playersData.filter((el) => el.categori === isCategori);
    const [isPopup,setIsPopup] = useState ('');
    const [currentScrollY , setCurrentScrollY] = useState(0);
    const [isMobile,setIsMobile] = useState(window.innerWidth <= 1120);
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 1120);
    }

    useEffect(() => {

        window.addEventListener('resize',handleResize);
        handleResize();
        if(isPopup){
            setCurrentScrollY(window.scrollY);
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow ='auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('resize',handleResize);
        };
        
    },[isPopup]);

    return(
        <>
          <Banner aniWidth={'50%'}/>
          <section className="size1442 proArea">
                <h2 className="hiddenH2">프로 선수들 프로필</h2>
                <TabMenu isMobile={isMobile} isCategori={isCategori} setIsCategori={setIsCategori} playersData={playersData} />
                <ul>
                    {newFeed.map((el, index) => (
                        <li key={el.id || index}>
                            <p>{el.title}</p>
                            {el.categori === '군입대' || el.categori === '임대' || el.categori === '우선지명' ? 
                            <ul>
                                {el.profile.map((i, index) => (
                                    <li key={i.id || index}>
                                        <span>
                                            <img src={i.image} alt={i.name} />
                                        </span>
                                        <p>{i.name}<span>{i.positionAndAffiliation}</span></p>
                                    </li>
                                ))}
                            </ul>
                            :
                            <ul>
                                {el.profile.map((i, index) => (
                                    <li key={i.id || index}>
                                        <img src={i.image} alt={i.name}/>
                                        <div>
                                            <span>{i.id}</span>
                                            <p><span>{i.name}</span><br />
                                                {i.englishName}
                                            </p>
                                        </div>
                                        <button onClick={() => setIsPopup(i.name)}>프로필</button>
                                        {isPopup === i.name && <Popup key={i.id} scrollPosition={currentScrollY} data={i} isMobile={isMobile} handlePopupClose={() => setIsPopup('')} />}
                                    </li>   
                                ))}
                            </ul>
                            }
                        </li>
                    ))}
                </ul>
            </section>
        </>

    )
}


function TabMenu ({isMobile,isCategori,playersData,setIsCategori}) {

    const [isActive , setIsActive] = useState(false);
    const menuList  = playersData.map((el) => el.categori);
    
    if(isMobile){
        menuList.unshift('전체')
        return (
            <div>
                <button className={isActive ? "active" : ""} onClick={() => (setIsActive(true))}>{isCategori}</button>
                {menuList.map((el,index) => <button onClick={(e) => {setIsCategori(el)
                    setIsActive(!isActive)
                }
                } key={index}>{el}</button>)}
            </div>
        )
    }
    return (
        <div>
            <button onClick={() => setIsCategori('전체')} className={isCategori === '전체' ? 'active' : ''}>전체</button>
            {menuList.map((el,index) => <button className={isCategori === el ? 'active' : ''} onClick={() => setIsCategori(el)} key={index}>{el}</button>)}
        </div>
    )
}


function Popup ({data,handlePopupClose,isMobile}) {
    
return (
         <div  className="popup-Overlay">
            <div className="popup-contents size1560">
                <div>
                    <button onClick={() => handlePopupClose()}>버튼</button>
                    <img src={data.image} alt="" />
                    <div>
                        <p>
                            <span>{data.id}</span>
                            <b>{data.name}<span><br />{data.englishName}</span></b>    
                        </p>
                        <ul>
                            <li>GAME<strong>8</strong></li>
                            <li>GOAL<strong>0</strong></li>
                            <li>ASSIST<strong>0</strong></li>
                        </ul>
                        <ul>
                            <li><span>포지션</span>골키퍼</li>
                            <li><span>생년월일</span>1999년 07월 22일</li>
                            <li><span>국적</span> 대한민국</li>
                            <li><span>신체정보</span> 189cm, 82kg</li>
                        </ul>
                    </div>
                </div>
                <p>통산기록</p>
                <div className="playerTable">       
                    <table>
                        <thead>
                            <tr>
                                <th>출장</th>
                                <th>득점</th>
                                <th>도움</th>
                                <th>슈팅</th>
                                <th>파울</th>
                                <th>경고</th>
                                <th>퇴장</th>
                                <th>실점</th>
                                <th>자책</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>16</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>20</td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <p>경기별기록</p>
                    {
                    !isMobile &&
                    <div>
                        <button className="active">2024년</button>
                        <button>2033년</button>
                        <button>2022년</button>
                    </div>
                    }
                </div>
                <div className="playerTable">
                    <table> 
                        <thead>
                            <tr>
                                <th>일시</th>
                                <th>대회명</th>
                                <th>소속팀</th>
                                <th>상대팀</th>
                                <th>출장</th>
                                <th>교체</th>
                                <th>득점</th>
                                <th>도움</th>
                                <th>파울&#40;C/S&#41;</th>
                                <th>오프사이드</th>
                                <th>슈팅&#40;S/T&#41;</th>
                                <th>PK&#40;S/F&#41;</th>
                                <th>경고</th>
                                <th>실점</th>
                                <th>자책</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>시즌별 기록</p>
                <div className="playerTable">
                    <table>
                        <thead>
                            <tr>
                                <th>대회명</th>
                                <th>소속팀</th>
                                <th>시즌</th>
                                <th>출장</th>
                                <th>득점</th>
                                <th>도움</th>
                                <th>슈팅</th>
                                <th>파울</th>
                                <th>경고</th>
                                <th>퇴장</th>
                                <th>실점</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <article className="size1560">
                    {/*  슬라이드 들어가야함 */}
                </article>
            </div>
     </div>
            
    )
}       