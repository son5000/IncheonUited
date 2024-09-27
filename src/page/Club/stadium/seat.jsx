import PageBox from "../../../components/club/PageBox"


export default function Seat(){
    return (
        <PageBox aniWidth={'100%'} >
            <section className="seatArea">
                <img src="/images/club/seat_image.png" alt="" />
                <ul>
                    <li><p>S석</p></li>
                    <li><p>S석(스탠딩)</p></li>
                    <li><p>Exciting석 (E석 1층)</p></li>
                    <li><p>Expert 석</p></li>
                    <li><p>World class석 (w2~w5 구역)</p></li>
                    <li><p>With석 (w6~w10 구역)</p></li>
                    <li><p>Wide view석(w석 2층)</p></li>
                    <li><p>프리미엄석 클래식</p></li>
                    <li><p>프리미엄석 골드</p></li>
                    <li><p>라탄 테라스 존</p></li>
                    <li><p>하이네켄 테이블석</p></li>
                    <li><p>피크닉 테이블석</p></li>
                    <li><p>1인 테이블석</p></li>
                    <li><p>원정석</p></li>
                </ul>
            </section>
        </PageBox>
    )
}