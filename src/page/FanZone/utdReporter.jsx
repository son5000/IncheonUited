import Banner from "../../components/Banner"
import YearSearchBox from "../../components/fanZone/yearSearchBox"
import { useState  } from "react"
import BoardList from "../../components/fanZone/postList";


export default function UtdReporter(){


  const [selectedYear,setSelectedYear] = useState(2024)
  const handleClick = (index) =>  setSelectedYear(index);

    return (
        <>
        <Banner aniWidth={"25%"} />
        <section className="utdReporterArea size1442">
            <h2 className="hiddenH2">UTD기자단뉴스</h2>
            <YearSearchBox handleClick={handleClick} SelectedYear={selectedYear} />
            <BoardList />
        </section>
        </>
    )
}