import Banner from "../../components/Banner"
import {Link} from "react-router-dom"
export default  function BuyMembership (){


    return (
        <>
        <Banner aniWidth={"10%"} />
        <section className="buyMembershipArea size1080">
            <h2>2024시즌 멤버십/시즌권/예매권북</h2>
            <p>MEMBERSHIP</p>
            <div>
                <Link>구매하기</Link>
            </div>
            <img src="/images/ticketMembership/멤버십안내.png" alt="" />
        </section>
        </>
    )
}