import Banner from "../../components/Banner"
import YearSearchBox from "../../components/fanZone/yearSearchBox"
import { useState } from "react";
import data from '../../data.json'
import { Link } from "react-router-dom"

const lostItemsData = data.lostItem;


export default function LostItem(){

    const [selectedYear,setSelectedYear] = useState(2024)
    const handleClick = (index) =>  setSelectedYear(index);

    return (
        <>
        <Banner />
        <section className="lostItemtArea size1442">
            <h2 className="hiddenH2">분실물</h2>
            <YearSearchBox handleClick={handleClick} SelectedYear={selectedYear}/>
            <ul>
                {lostItemsData.map((el,index)=> {
                return (
                        <li key={index}><Link><img src={el.src} alt={`${el.text}이미지`}/><p>{el.text}</p></Link></li>
                )})}
            </ul>
        </section>
        </>
    )
}