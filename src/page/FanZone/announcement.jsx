import Banner from "../../components/Banner"
import YearSearchBox from "../../components/fanZone/yearSearchBox"
import { useState } from "react";
import BoardList from "../../components/fanZone/postList";




export default function Announcement(){

    const [selectedYear,setSelectedYear] = useState(2024)
    const handleClick = (index) =>  setSelectedYear(index);

    return (
        <>
        <Banner />
        <section className="announcementArea size1442">
            <h2 className="hiddenH2">공지사항</h2>
            <YearSearchBox handleClick={handleClick} SelectedYear={selectedYear}/>
            <BoardList />
        </section>
        </>
    )
}