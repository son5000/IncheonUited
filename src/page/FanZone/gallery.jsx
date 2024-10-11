import Banner from "../../components/Banner"
import YearSearchBox from "../../components/fanZone/yearSearchBox"
import data from '../../data.json'
import { useState } from "react";

const images = data.gallaryImgs;

export default function Gallery(){
    
const [selectedYear,setSelectedYear] = useState(2024)

    return (
        <>
        <Banner aniWidth={"40%"} />
        <section className="size1442 gallaryArea">
            <h2 className="hiddenH2">갤러리</h2>
            <YearSearchBox handleClick={setSelectedYear} SelectedYear={selectedYear} />
            <ul>
                {images.map((el,index)=> <li key={index} ><a href="###"><img src={el.src} alt={el.text} /><p><span>{el.text} </span></p></a></li>)}
            </ul>
        </section>
        </>
    )
}