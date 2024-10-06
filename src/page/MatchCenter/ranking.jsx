import { useState } from "react"
import { format } from 'date-fns';
import Banner from "../../components/Banner"
import data from "../../data.json"


export default function Rangking () {

    const rankTableData = data["k-leagueRankTable"];
    const date = new Date();
    const [isCategori , setisCategori] = useState('true');

    return (
        <>
        <Banner aniWidth={'100%'} />
        <section className="rankingArea size1442">
            <div>
                <div>
                    <button onClick={()=> setisCategori(true)} className={isCategori ? 'btn-checkBox active' : 'btn-checkBox'}></button>
                    <button onClick={()=> setisCategori(false)} className={!isCategori ? 'btn-checkBox active' : 'btn-checkBox'}></button>
                </div>     
                <ul>
                    <div>2024</div>
                    <div>
                        <li>2024</li>
                        <li>2023</li>
                        <li>2022</li>
                        <li>2021</li>
                        <li>2020</li>
                    </div>
                </ul>
                <p>
                    기준 : {format(date,'yyyy년MM월dd일')} 
                </p>
            </div>
            <p>하나은행 K리그1 2024</p>
            <table>
                <thead>
                    <tr>
                        <th>순위</th>
                        <th>팀</th>
                        <th>승점</th>
                        <th>승</th>
                        <th>무</th>
                        <th>패</th>
                        <th>골득실</th>
                        <th>득점</th>
                        <th>실점</th>
                        <th>경기</th>
                    </tr>
                </thead>
                <tbody>
                    {rankTableData.map((el) => {
                        return (<tr>
                            <td>{el["순위"]}</td>
                            <td><img src={`/images/matchCenter/${el["클럽"]}.png`} alt={`${el["클럽"]}로고 이미지`} />{el["클럽"]}</td>
                            <td>{el["승점"]}</td>
                            <td>{el["승"]}</td>
                            <td>{el["무"]}</td>
                            <td>{el["패"]}</td>
                            <td>{el["득실"]}</td>
                            <td>{el["득점"]}</td>
                            <td>{el["실점"]}</td>
                            <td>{el["경기"]}</td>
                            </tr>)
                    })}
                </tbody>
            </table>
        </section>
        </>
    )
}