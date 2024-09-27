import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function LeagueAndMatch() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
 
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
      <div className="matchSlide-container">
        <Slider {...settings}>
          <div className="slide-item">
            <div></div>
          </div>
          <div className="slide-item">
            <div></div>
          </div>
          <div className="slide-item">
            <div></div>
          </div>
        </Slider>
      </div> 
    </div>
  );
}