import React, { useState, useRef } from 'react';


// slide component
const Slider = () => {
  
  const [currentSlide, setCurrentSlide] = useState(true);
  const sliderRef = useRef(null);  
  
  const handleClick = () => {
    if(currentSlide){
      const scrollMove = sliderRef.current.clientWidth;
      sliderRef.current.scrollLeft += scrollMove;
      setCurrentSlide(false);
      return
      }
      const scrollMove = sliderRef.current.clientWidth;
      sliderRef.current.scrollLeft -= scrollMove;
      setCurrentSlide(true);
    }
    
    return (
    <div className="slide-container" ref={sliderRef}>
      <div className="slide-track" >
          <div
          className="slide" 
            onClick={() => handleClick()} // 클릭 시 슬라이드 이동
          >
              <div className='mainPrevNextMatch'>
                    {/* 뒷배경색 때문에 */}
                    <div>
                        <span> 
                            <img src="/images/matchCenter/logo_match_kleague.png" alt="대회아이콘" />
                        </span>
                        <p>K-LEAGUE</p>
                        <small>인천축구전용경기장</small>
                        <b>10라운드</b>
                    </div>
                    <div>
                        <span>
                            <span>
                                <img src="/images/matchCenter/schedul_icon_인천.png" alt={`인천 심볼 이미지`} />
                            </span>
                            <strong>인천</strong>
                        </span>
                        3 : 0
                        <span>
                            <span>
                                <img src={`/images/matchCenter/schedul_icon_강원.png`} alt={`강원 심볼 이미지`} />
                            </span>
                            <strong>강원</strong>
                        </span>
                    </div>
               </div>
          </div>
          <div
          className="slide" 
            onClick={() => handleClick()} // 클릭 시 슬라이드 이동
          >
              <div className='mainPrevNextMatch'>
                    {/* 뒷배경색 때문에 */}
                    <div>
                        <span> 
                            <img src="/images/matchCenter/logo_match_kleague.png" alt="대회아이콘" />
                        </span>
                        <p>K-LEAGUE</p>
                        <small>인천축구전용경기장</small>
                        <b>11라운드</b>
                    </div>
                    <div>
                        <span>
                            <span>
                                <img src="/images/matchCenter/schedul_icon_인천.png" alt={`인천 심볼 이미지`} />
                            </span>
                            <strong>인천</strong>
                        </span>
                        4 : 0
                        <span>
                            <span>
                                <img src={`/images/matchCenter/schedul_icon_서울.png`} alt={`서울 심볼 이미지`} />
                            </span>
                            <strong>서울</strong>
                        </span>
                    </div>
               </div>
          </div>
          <div
          className="slide" 
            onClick={() => handleClick()} // 클릭 시 슬라이드 이동
          >
              <div className='mainPrevNextMatch'>
                    {/* 뒷배경색 때문에 */}
                    <div>
                        <span> 
                            <img src="/images/matchCenter/logo_match_kleague.png" alt="대회아이콘" />
                        </span>
                        <p>K-LEAGUE</p>
                        <small>인천축구전용경기장</small>
                        <b>12라운드</b>
                    </div>
                    <div>
                        <span>
                            <span>
                                <img src="/images/matchCenter/schedul_icon_인천.png" alt={`인천 심볼 이미지`} />
                            </span>
                            <strong>인천</strong>
                        </span>
                        1 : 0
                        <span>
                            <span>
                                <img src={`/images/matchCenter/schedul_icon_대구.png`} alt={`대구 심볼 이미지`} />
                            </span>
                            <strong>대구</strong>
                        </span>
                    </div>
               </div>
          </div>
      </div>
    </div>
  );
};





export default function LeagueAndMatch() {
 
  return (
    <div className="leagueAndMatch">
      <div className="league-table">
        <table>
          <caption>리그순위</caption>
          <thead>
            <tr>
              <th>순위</th>
              <th>팀</th>
              <th>경기</th>
              <th>승</th>
              <th>무</th>
              <th>패</th>
              <th>승점</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>8</td>
              <td>제주</td>
              <td>31</td>
              <td>12</td>
              <td>2</td>
              <td>17</td>
              <td>38</td>
            </tr>
            <tr>
              <td>9</td>
              <td>대전</td>
              <td>31</td>
              <td>8</td>
              <td>11</td>
              <td>12</td>
              <td>35</td>
            </tr>
            <tr>
              <td>10</td>
              <td>전북</td>
              <td>31</td>
              <td>8</td>
              <td>10</td>
              <td>13</td>
              <td>34</td>
            </tr>
            <tr>
              <td>11</td>
              <td>대구</td>
              <td>31</td>
              <td>8</td>
              <td>10</td>
              <td>13</td>
              <td>34</td>
            </tr>
            <tr>
              <td>12</td>
              <td>인천</td>
              <td>31</td>
              <td>7</td>
              <td>11</td>
              <td>13</td>
              <td>32</td>
            </tr>
          </tbody>
        </table>
      </div> 
      <Slider />
    </div>
  );
}