import { useState } from "react"
import Banner from "../../components/Banner"
import data from "../../data.json"

const staffs = data.staffs;


export default function CoachingStaff () {

    const [isCoachShow,setIsCoachShow] = useState(true);
    const [isPopup,setIsPopup] = useState (false);
    const [isActiveInPopup,setIsActiveInPopup] = useState (true);


    return (
        <>
        <Banner onBannerTab={'코칭/지원스태프'} aniWidth={'10%'} />
        <section className="coachingStaffArea size1442">
            <h2>코칭/지원스태프 프로필</h2>
            <div>
                <img src="/images/player/coach.jpg" alt="인천유나이티드 감독" />
                <div>
                    <button onClick={()=>setIsCoachShow(true)} className={isCoachShow ? 'active' : ''}>프로필</button>
                    <button onClick={()=>setIsCoachShow(false)} className={!isCoachShow ? 'active' : ''}>약력</button>
                    {isCoachShow ? 
                        <div className="coachProfile">
                            <span>HEAD COACH</span>
                            <strong>최영근 <span>CHOI YOUNG KEUN</span></strong>
                            <ul>
                                <li>
                                <span>직책</span>
                                <p>감독</p>
                                </li>
                                <li>
                                <span>생년월일</span>
                                <p>1972년 7월 16일</p>
                                </li>
                                <li>
                                <span>출신학교</span>
                                <p>한양대</p>
                                </li>
                            </ul>
                        </div>
                        :
                        <div className="coachBriefHistory">
                            <strong>인천의 도약을 위해<br />최선을 다하겠습니다.</strong>
                            <ul>
                                <li>
                                    <span>지도자경력</span>
                                    <div>
                                        <p><span>2012~2015</span>여주대학교 감독</p>
                                        <p><span>2016~2017</span>창원시청 축구단 코치</p>
                                        <p><span>2019</span>제주유나이티드 코치</p>
                                        <p><span>2020.01~2020.08</span>강릉시청 축구단 수석코치</p>
                                        <p><span>2020.08~2022</span>인천유나이티드 수석코치</p>
                                        <p><span>2023</span>김해시청 축구단 수석코치</p>
                                        <p><span>2024.08~현재</span>인천유나이티드 감독</p> 
                                    </div>
                                </li>
                                <li>
                                    <span>선수경력</span>
                                    <div>
                                        <p><span>1995~1998</span>할렐루야축구단</p>
                                        <p><span>1998~1999</span>대우로얄즈</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
                </div>
                <h3>INCHEON UNITED COACH</h3>
                <ul>
                    {staffs.map((el) => { return <><li key={el.id}><img src={el.image} alt={el.name} /><button onClick={()=> setIsPopup(el.englishName)}>프로필</button><p>{el.name} <br/><span>{el.englishName}</span></p></li>
                    <div className={el.englishName === isPopup ? "popup-OverLay active" : "popup-OverLay"}>
                        <div className="popup-Content">
                            <button onClick={() => setIsPopup('')}>닫힘 버튼</button>
                            <img src={el.image} alt={el.name} />
                            <div>
                                <div>
                                    <button onClick={()=>setIsActiveInPopup(true)} className={isActiveInPopup ? 'active' : ''}>프로필</button>
                                    <button onClick={()=>setIsActiveInPopup(false)} className={!isActiveInPopup ? 'active' : ''}>약력</button>
                                </div>
                                {
                                isActiveInPopup ?    
                                <>
                                <p>{el.name} <span>{el.englishName}</span></p>
                                <ul>
                                    <li><span>직책</span>{el.profile["position"]}</li>
                                    <li><span>생년월일</span>{el.profile["birthData"]}</li>
                                    <li><span>출신학교</span>{el.profile["schoolOfOrigin"]}</li>
                                </ul>
                                </>
                                :
                                <>
                                <ul>
                                    <li style={{'marginBottom':'20px'}}>
                                        <span>지도자경력</span>
                                        <div>
                                            <p>
                                               {el.briefHistory["LeadershipExperience"].year.map((i)=> <>{i}<br /></> )}
                                            </p>
                                            <p>
                                               {el.briefHistory["LeadershipExperience"].text.map((i)=> <>{i}<br /></> )}
                                            </p>
                                        </div>    
                                    </li>
                                    {
                                        el.briefHistory["playerCareer"].year[0] == null ?
                                    <li>
                                        <span style={{display:`${el.briefHistory["playerCareer"].year[0]== null && el.briefHistory["playerCareer"].text[0] == null ? 'none' : ''}`}}>자격증</span>
                                        <div>
                                            <p>
                                               {el.briefHistory["playerCareer"].text.map((i)=> <>{i}<br /></> )}
                                            </p>
                                        </div>    
                                     </li>
                                        :
                                    <li>
                                        <span>선수경력</span>
                                        <div>
                                            <p>
                                               {el.briefHistory["playerCareer"].year.map((i)=> <>{i}<br /></> )}
                                            </p>
                                            <p>
                                               {el.briefHistory["playerCareer"].text.map((i)=> <>{i}<br /></> )}
                                            </p>
                                        </div>    
                                     </li>
                                    }
                                    
                                </ul>
                                </>
                                }
                            </div>
                         </div>
                    </div>
                     </>} )}
                </ul>
        </section>
        </>
    )
}



