import React, { useState, useRef } from 'react';

// slide component
const Slider = () => {
  
  
  // slide 요소의 click  으로 앞뒤로 한칸씩 움직이는 애니메이션을 구현할건데
  // 현재의 slide 가 어떤 상태인지 , 어떤 slide 요소를 보여주고 있는지 판단하기 위해
  // useState 의 설정값으로 true 를 넣어 변수를 만들어준다.
  const [currentSlide, setCurrentSlide] = useState(true);
  
  // useRef는 dom요소나 값, 직접적인 접근을 할 수 있게 해준다.
  // useRef는 컴포넌트의 렌더링에 영향을 받지 않고 가지고 있는 값을 온전히 보존할수있는 기능이 있다.
  // 이 useRef hook 에 scroll 이 발생하는 요소의 width 값을 담아 준다.
  const sliderRef = useRef(null);
  
  // 슬라이드요소 세개를 배열의 형식으로 만들어 준다.
  // 후에 return 문 안에서 map 메소드로 반복문을 실행해 slide 요소 세개를 return 한다.
  const items = ['Item 1', 'Item 2', 'Item 3'];

  
  // click event 핸들러를 만든다.
  const handleClick = () => {
    
    // 조건문을 통해서 currnetSlide 의 값이 true  값이라면
    // scrollMove 변수를 만들어 useRef의 current 프로퍼티를 통해 clientWidth  값을 불러와 그 값을 저장한다.
    if(currentSlide){
    // scrollMove 변수에 ref 로 참조하고 있는 요소의  width 값을 ref의 특성인 current프로퍼티로 값을 받아  넣어준다.
      const scrollMove = sliderRef.current.clientWidth;
      // ref로 참조하고 있는 변수에 current 프로퍼티로 요소의 scrollleft 값(처음에는 0)을 받아서 scrollMove 값과 scrollLeft 값을 더해준다.
      // 그럼 즉 , => 0 + 요소의 width  값이 니까 끝에서 끝으로 이동할 수 있는것이다.
      // 사실 내가 구현하고있는 slide 는 총요소가 3개이고 보여주는 요소가 2개이고 , 클릭당 slide 안의 요소 한개만큼 앞뒤로 이동하기 때문에 
      // 전체 width 의 50% 사용해도 구현할 수 있지만 딱딱 width 값이 정확하게 맞아 떨어지게 구현하지 않아도
      // 끝에서 끝으로 이동하는 것만 고려하면 이렇게 값을 사용해도 괜찮을것같다. 
      sliderRef.current.scrollLeft += scrollMove;
      // 이동후 slide 의 상태 변경
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
        {items.map((index) => (
          <div
          className="slide" 
          key={index}
            onClick={() => handleClick(index)} // 클릭 시 슬라이드 이동
          >
           slide {index}
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