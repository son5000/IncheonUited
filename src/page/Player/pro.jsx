import { useState } from "react";
import Banner from "../../components/Banner";
import data from "../../data.json"

const playersData = data.pro["players"];


export default function Pro () {

    const [isCategori,setIsCategori] = useState('전체');
    const newFeed = isCategori === '전체' ? playersData : playersData.filter((el) => el.categori === isCategori);
    const [isPopup,setIsPopup] = useState (false);



    return(
        <>
          <Banner aniWidth={'50%'}/>
          <section className="size1442 proArea">
            <h2>프로 선수들 프로필</h2>
            <div>
                <button onClick={() => setIsCategori('전체')} className={isCategori === '전체' ? 'active' : ''}>전체</button>
                {playersData.map((el,index) => <button className={isCategori === el.categori ? 'active' : ''} onClick={() => setIsCategori(el.categori)} key={index}>{el.categori}</button>)}
            </div>
            <ul>
                {newFeed.map((el,index) => 
                <li key={index}>
                    <p>{el.title}</p>
                    {el.categori === '군입대'|| el.categori === '임대'|| el.categori ==='우선지명' ? 
                    <ul>
                        {el.profile.map((i,index) => 
                        <li key={i.id || index}>
                            <span>
                             <img src={i.image} alt={i.name} />
                            </span>
                            <p>{i.name}<span>{i.positionAndAffiliation}</span></p>
                        </li>
                        )}
                    </ul>
                    :
                    <ul>
                        {el.profile.map((i,index)=>
                        <li key={i.id || index}>
                            <img src={i.image} alt={i.name}/>
                            <div>
                                <span>{i.id}</span>
                                <p><span>{i.name}</span><br />
                                   {i.englishName}
                                </p>
                            </div>
                            <button onClick={() => setIsPopup('i.id')}>프로필</button>
                            <Popup onPopup={isPopup} />
                        </li>
                        )}
                    </ul>
                    }
                </li>
                )}
            </ul>

          </section>
        </>

    )
}




function Popup ({onPopup}) {



    return (
        // 이 부분부터 진행 해야함~!
            <div className={onPopup ? "popup-Overlay active" : "popup-Overlay"}>
                <div>
                    <img src="" alt="" />
                    <div>
                        <span>백넘버</span>
                        <p>이름<span>영어이름</span></p>
                        <ul>
                            <li>GAME<strong></strong></li>
                            <li>GOAL<strong></strong></li>
                            <li>ASSIST<strong></strong></li>
                        </ul>
                        <ul>
                            <li><span>포지션</span></li>
                            <li><span>생년월일</span></li>
                            <li><span>국적</span></li>
                            <li><span>신체정보</span></li>
                        </ul>
                    </div>
                </div>
                <table>
                <caption>통산기록</caption>
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
                <table>
                    <caption>경기별기록</caption>
                    <button>2024년</button>
                    <button>2033년</button>
                    <button>2022년</button>
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
                <table>
                    <caption>시즌별 기록</caption>
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

                <article>
                    {/*  슬라이드 들어가야함 */}
                </article>
            </div>
    )
}       