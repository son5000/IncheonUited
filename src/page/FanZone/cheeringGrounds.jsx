import Banner from "../../components/Banner"
import YearSearchBox from "../../components/fanZone/yearSearchBox"
import { useState } from "react"
import BoardList from "../../components/fanZone/boardList";
import { Link } from "react-router-dom"


export default function CheeringGrounds(){

    const [selectedYear,setSelectedYear] = useState(2024)
    const handleClick = (index) =>  setSelectedYear(index);

    return (
        <>
        <Banner aniWidth={"70%"} />
        <section className="cheeringGroundsArea size1442">
            <h2 className="hiddenH2">응원마당</h2>
            <YearSearchBox handleClick={handleClick} SelectedYear={selectedYear} />
            <BoardList />
            <button><Link>작성하기</Link></button>
        </section>
        </>
    )
}