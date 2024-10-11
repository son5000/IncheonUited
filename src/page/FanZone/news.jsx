import Banner from "../../components/Banner"
import YearSearchBox from "../../components/fanZone/yearSearchBox"

export default function News(){


    return (
        <>
        <Banner aniWidth={"15%"} />
        <section className="newsArea size1442">
            <h2 className="hiddenH2">구단뉴스</h2>
            <YearSearchBox />
        </section>
        </>
    )
}