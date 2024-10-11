import Banner from "../../components/Banner"
import YearSearchBox from "../../components/fanZone/yearSearchBox"

export default function UtdReporter(){


    return (
        <>
        <Banner aniWidth={"25%"} />
        <section className="utdReporterArea size1442">
            <h2 className="hiddenH2">UTD기자단뉴스</h2>
            <YearSearchBox />
        </section>
        </>
    )
}