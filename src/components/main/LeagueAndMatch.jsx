import React, { useState, useRef } from 'react';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(true);
  const sliderRef = useRef(null);

  const items = ['Item 1', 'Item 2', 'Item 3']; // 슬라이드 요소

  const handleClick = () => {

    if(currentIndex){
        const scrollAmount = sliderRef.current.clientWidth / 1;
        sliderRef.current.scrollLeft += scrollAmount;
        console.log(scrollAmount);
      setCurrentIndex(false)
      return
    }
    

    setCurrentIndex(true);

    const scrollAmount = sliderRef.current.clientWidth / 1;
    sliderRef.current.scrollLeft -= scrollAmount;
    console.log(scrollAmount);
  };

  return (
    <div className="matchSchedule" ref={sliderRef}>
      <div className="itemBox" style={{ transform: `translateX(${currentIndex}*50%)` }}>
        {items.map((item, index) => (
          <div
            className="item" 
            key={index}
            onClick={() => handleClick(index)} // 클릭 시 슬라이드 이동
          >
          {`slide ${index + 1}`}
          </div>
        ))}
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