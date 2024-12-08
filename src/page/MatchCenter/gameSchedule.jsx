import { useState } from "react";
import { format } from 'date-fns';
import Banner from "../../components/Banner"
import data from '../../data.json';
import SelectedBox from "../../components/matchCenter/SelectedBox"


const CATEGORI = ['ALL','K-LEAGUE','KOREA-CUP','CHAMPIONS LEAGUE']



export default function GameSchedule () {
const date = new Date(2024,2,1);
const games = data.games;
// 제이슨데이터 중에서 games 프로퍼티의 값을 가져온다.
    
const currentYear = format(date,'yyyy');
// 연도 셀렉트 카테고리의 값을 현재 년도의 기준으로 배열 생성
const YEARS =[currentYear,currentYear-1,currentYear-2,currentYear-3,currentYear-4];
const [selectedYear , setSelectedYear] = useState(currentYear);
//월 셀렉트 카테고리를 gamse 데이터의 프로퍼티값이 월별로 나뉘어져있기때문에 key값으로 배열 생성
const MONTHS = games.map((el)=> Object.keys(el));
const [selectedMonth , setSlectedMonth] = useState('전체');
const [selectedGameType, setSelectedGameType] = useState('ALL');

// 불러온 games 의 데이터 구조가 월단위의 큰 객체 => 월별데이터 배열 => 객체
// 구조로 돼있기 때문에 가장 깊숙히 들어있는 값에 따라서 filtering 하기 위해서
// 크게 map() => 그리고 해당 객체의Objectkeys 를 통해 그 => el[Object.keys(el)] 객체에 접근 =>  filter 를 통해서 =>
//  selectedGameType 의 값이 'ALL' 아닐경우에만 조건을 달아서 RETURN 했다.

// 값을 크게 한번 분류 하고 한번더 들어가서 값을 비교해야 하기 때문에 정말 애를 많이 먹었다,
// 어떻게 접근해야 데이터 까지 닿을 수 있을지 한참을 해맸다.

// 첫번째 필터링으로 경기의  type 에 따라서 배열 생성
const gameTypeFiltering = games.map((el) => {
    let key = Object.keys(el)[0]; // el의 첫 번째 키를 가져옵니다.
    const filteredItems = el[key].filter((i) => {
        return selectedGameType === 'ALL' || i.gameType === selectedGameType;
    });
    return { [key]: filteredItems }; // 원래의 키를 유지하면서 객체를 반환
});

// 두번째 필터링으로 monthselected 값을 반영해 특정 '월'의 데이터만 반환
const monthFiltering = selectedMonth === '전체' ? gameTypeFiltering : gameTypeFiltering.filter(obj => obj.hasOwnProperty(selectedMonth));


const dropProps ={
    YEARS,
    selectedYear,
    setSelectedYear,
    MONTHS,
    selectedMonth,
    setSlectedMonth,
    selectedGameType,
    setSelectedGameType,
    CATEGORI
}

return (
    <>
        <Banner aniWidth={'50%'} />
        <section className="gameScheduleArea size1442">
            <h2 className="hiddenH2">경기일정</h2>
                <SelectedBox props={dropProps} />
            <Games data={monthFiltering} currentYear={currentYear}  />
        </section>
        </>
    )
}




function Games ({data,currentYear}){
    return (
        <>
            {
                data.map((el,index) => {      
                return (<div key={`month-${index}`} className="games">
                    {/* 1. 월은 데이터의 프로퍼티 key에따라서 달라지기 때문에 objectkey 를 활용 */}
                    {/* 2. 연도는 현재의 연도가 항상 최상위에 항상 있어야 하기 때문에 datefns 를 사용한 date객체의 year 값을 사용 */}
                    {/* 3. 월은 영어로 항상 표시해 줘야하기에 datefns 의 format을 사용해서 currentYear 과 el의 key값을 string 으로 넘겨주고 변환 */}
                        <p>{Object.keys(el)}월 {currentYear} {format(`${currentYear} ${Object.keys(el)}`,'MMMM')}</p>
                        <ol key={index}>
                            {el[Object.keys(el)].map((i) => {
                                return(
                                    <li key={i.date} className="matchPrevNext">
                                        {/* 뒷배경색 때문에 */}
                                        <div>
                                            <span> 
                                                <img src={i.gameSymbol} alt="대회아이콘" />
                                            </span>
                                            <p>{i.date}</p>
                                            <small>{i.round}</small>
                                            <mark>{i.stadium}</mark>
                                        </div>
                                        <div>
                                            <span>
                                                <strong>{i.homeTeam}</strong>
                                                <span>
                                                    <img src={`/images/matchCenter/schedul_icon_${i.homeTeam}.png`} alt={`${i.homeTeam} 심볼 이미지`} />
                                                </span>
                                            </span>
                                            {i.result}
                                            <span>
                                                <span>
                                                    <img src={`/images/matchCenter/schedul_icon_${i.awayTeam}.png`} alt={`${i.homeTeam} 심볼 이미지`} />
                                                </span>
                                                <strong>{i.awayTeam}</strong>
                                            </span>
                                        </div>
                                        <div>
                                            <a href="###">리뷰</a>
                                            <a href="###">VOD</a>
                                            <a href="###">사진</a>
                                        </div>
                                    </li>)
                                })}
                        </ol>
                    </div>)
                })
            }
        </>
    )
}