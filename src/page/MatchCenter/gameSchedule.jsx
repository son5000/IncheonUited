import { useState } from "react";
import Banner from "../../components/Banner"
import { addMonths,format } from 'date-fns';
import data from '../../data.json';


const CATEGORI = ['ALL','K-LEAGUE','KOREA-CUP','CHAMPIONS LEAGUE']

export default function GameSchedule () {

    const [active , setActive] = useState('ALL');
    
    return (
        <>
        <Banner aniWidth={'50%'} />
        <section className="gameScheduleArea size1442">
            <div className="categori">
                <div>
                    {CATEGORI.map((el,index)=> <button onClick={() => setActive(el)} className={el === active ? 'btn-checkBox active' : 'btn-checkBox'}>{index === 0 && 'ALL'}</button>)}
                </div>
                <ul>
                    <li>
                        2024
                        <ol>
                            <li>2024</li>
                            <li>2023</li>
                            <li>2022</li>
                            <li>2021</li>
                            <li>2020</li>
                        </ol>
                    </li>
                    <li>
                        전체
                        <ol>
                            <li>전체</li>
                            <li>K-LEAGUE</li>
                            <li>KOREA CUP</li>
                            <li>CHAMPIONS LEAGUE</li>
                        </ol>
                    </li>
                </ul>
            </div>
            <Games />
        </section>
        </>
    )
}




function Games (){

    const date = new Date(2024,2,1);
    const currentYear = format(date,'yyyy');
    const games = data.games;
    

    return (
        <>
            {
                games.map((el,index) => {                   
                    
                    return (<div className="games">
                        <p>{index+3}월 {currentYear} {format(addMonths(date,index),'MMMM')}</p>
                        <ol>
                            {el[index+3].map((i,index) => {
                                return(
                                    <li key={index}>
                                        <span>
                                            <img src={i.gameType} alt="대회아이콘" />
                                        </span>
                                        <div>
                                            <p>{i.date}</p>
                                            <small>{i.round}</small>
                                            <mark>{i.stadium}</mark>
                                        </div>
                                        <div>
                                            <strong>{i.homeTeam}</strong>
                                            <span><img src={i.homeTeamImg} alt="" /></span>
                                            <b>{i.result}</b>
                                            <span><img src={i.awayTeamImg} alt="" /></span>
                                            <strong>{i.awayTeam}</strong>
                                        </div>
                                        <ul>
                                            <li><a href="###">리뷰</a></li>
                                            <li><a href="###">VOD</a></li>
                                            <li><a href="###">사진</a></li>
                                        </ul>
                                    </li>)
                            })}
                        </ol>
                    </div>)
                })
            }
        </>
    )
}