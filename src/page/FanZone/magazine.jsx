import { useState } from "react";
import Banner from "../../components/Banner"
import YearSearchBox from "../../components/fanZone/yearSearchBox"
import { Link } from "react-router-dom";
import data from "../../data.json"


const magazineData = data.magazine;

export default function Magazine(){

    const [selectedYear,setSelectedYear] = useState(2024)
    const handleClick = (index) =>  setSelectedYear(index);

    return (
        <>
        <Banner aniWidth={"50%"} />
        <section className="magazineArea size1442">
            <h2 className="hiddenH2">인천유나이티드 매거진</h2>
            <YearSearchBox handleClick={handleClick} SelectedYear={selectedYear} />
            <ul>
                {magazineData.map((el,index)=> <li key={index}><Link><span>MAGAZINE</span><img src={el.src} alt={`${el.date}호 매거진`}/><p>{el.date}</p></Link></li>)}
            </ul>
        </section>
        </>
    )
}