import Banner from "../../components/Banner";
import Calenderkk from "../../components/player/Calender";

export default function Schedule(){


    return (
        <>
            <Banner onBannerTab={'선수단 일정'} aniWidth={'100%'}/>
            <section className="size1442 scheduleArea">
                <h2>선수단 일정</h2>
                <Calenderkk />
            </section>
        </>
    )
}
