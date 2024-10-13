import Banner from "../../components/Banner"
import YearSearchBox from "../../components/fanZone/yearSearchBox"
import { useState } from "react";
import BoardList from "../../components/fanZone/boardList";


export default function News(){

    const [selectedYear,setSelectedYear] = useState(2024)
    const handleClick = (index) =>  setSelectedYear(index);

    return (
        <>
        <Banner aniWidth={"15%"} />
        <section className="newsArea size1442">
            <h2 className="hiddenH2">구단뉴스</h2>
            <YearSearchBox handleClick={handleClick} SelectedYear={selectedYear} />
            <BoardList />
        </section>
        </>
    )
}