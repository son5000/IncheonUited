import { useState } from "react";
import { format } from 'date-fns';
import Banner from "../../components/Banner"
import data from '../../data.json';
import SelectedBox from "../../components/matchCenter/SelectedBox"


const CATEGORI = ['ALL','K-LEAGUE','KOREA-CUP','CHAMPIONS LEAGUE']



export default function GameSchedule () {

const date = new Date(2024,2,1);
const games = data.games;
const currentYear = format(date,'yyyy');
const YEARS =[currentYear,currentYear-1,currentYear-2,currentYear-3,currentYear-4];
const [selectedYear , setSelectedYear] = useState(currentYear);
const MONTHS = games.map((el)=> Object.keys(el));
const [selectedMonth , setSlectedMonth] = useState('전체');
const [selectedGameType, setSelectedGameType] = useState('ALL');


const gameTypeFiltering = games.map((el) => {

    let key = Object.keys(el)[0]; 
    const filteredItems = el[key].filter((i) => {
        return selectedGameType === 'ALL' || i.gameType === selectedGameType;
    });
    return { [key]: filteredItems }; 
});

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
                        <p>{Object.keys(el)}월 {currentYear} {format(`${currentYear} ${Object.keys(el)}`,'MMMM')}</p>
                        <ol key={index}>
                            {el[Object.keys(el)].map((i) => {
                                return(
                                    <li key={i.date} className="matchPrevNext">
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