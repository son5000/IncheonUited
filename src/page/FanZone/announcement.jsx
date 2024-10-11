import Banner from "../../components/Banner"
import YearSearchBox from "../../components/fanZone/yearSearchBox"

export default function Announcement(){


    return (
        <>
        <Banner />
        <section className="announcementArea size1442">
            <h2 className="hiddenH2">공지사항</h2>
            <YearSearchBox />
        </section>
        </>
    )
}