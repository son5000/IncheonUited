import { useState } from "react"
import { format } from 'date-fns';
import Banner from "../../components/Banner"
import data from "../../data.json"
import SelectedBox from "../../components/matchCenter/SelectedBox";


export default function Rangking () {
    const date = new Date();
    const currentYear = format(date,'yyyy');
    const YEARS =[currentYear,currentYear-1,currentYear-2,currentYear-3,currentYear-4];
    const TODAY = format(date,'yyyy년MM월dd일');
    const rankTableData = data["k-leagueRankTable"];
    const [selectedGameType , setSelectedGameType] = useState('true');
    const [selectedYear , setSelectedYear] = useState(currentYear);

    const dropProps ={
        YEARS,
        selectedYear,
        setSelectedYear,
        selectedGameType,
        setSelectedGameType,
        TODAY
    }

    return (
        <>
        <Banner aniWidth={'100%'} />
        <section className="rankingArea size1442">
        <h2 className="hiddenH2">리그순위</h2>
            <SelectedBox props={dropProps} />
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
                        return (<tr key={el.id}>
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