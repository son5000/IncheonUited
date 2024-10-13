import { useState } from "react";
import { Link } from "react-router-dom"
import Banner from "../../components/Banner"
import YearSearchBox from "../../components/fanZone/yearSearchBox"
import data from '../../data.json'

const eventData = data.event;

export default function Event(){

    const [selectedYear,setSelectedYear] = useState(2024)
    const handleClick = (index) =>  setSelectedYear(index);

    return (
        <>
        <Banner aniWidth={"90%"} />
        <section className="subEventArea size1442">
            <h2 className="hiddenH2">이벤트</h2>
            <YearSearchBox handleClick={handleClick} SelectedYear={selectedYear} />
            <ul>
                {eventData.map((el)=> {
                return(
                <li>
                    <Link>
                        <img src={el.src} alt={`${el.text}이미지`}/>
                        <mark>종료</mark>
                        <p>{el.text}</p>
                        <small>{el.date}</small>
                    </Link>
                </li>
                )})}
            </ul>
        </section>
        </>
    )
}