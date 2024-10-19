import Banner from "../../components/Banner"
import MainSlide from "../../components/main/MainSlide";
import {Link} from "react-router-dom"
export default  function GroupTour (){


    return (
        <>
        <Banner aniWidth={"15%"} />
        <section className="groupTourArea size1080">
            <div className="ticketsTitleBox">
                <img src="/images/ticketMembership/main_logo.png" alt="인천유나이티드 엠블럼" />
                <p>단체관람</p>
                <h2>단체관람 안내해드립니다.</h2>
            </div>
            <MainSlide />
             <table>
                <caption>▶단체관람</caption>
                <thead>
                    <tr>
                        <th rowspan="2">구역</th>
                        <th colspan="2">정규라운드</th>
                        <th colspan="2">파이널라운드</th>
                    </tr>
                    <tr>
                        <th>정상가</th>
                        <th>할인가</th>
                        <th>정상가</th>
                        <th>할인가</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>S석, Expert석 성인</td>
                        <td>13,000원</td>
                        <td>9,100원</td>
                        <td>15,000원</td>
                        <td>10,500원</td>
                    </tr>
                    <tr>
                        <td>S석, Expert석 청소년/어린이</td>
                        <td>6,500원</td>
                        <td>4,550원</td>
                        <td>7,500원</td>
                        <td>5,250원</td>
                    </tr>
                    <tr>
                        <td>Exciting석 성인</td>
                        <td>14,000원</td>
                        <td>9,800원</td>
                        <td>16,000원</td>
                        <td>11,200원</td>
                    </tr>
                    <tr>
                        <td>Exciting석 청소년/어린이</td>
                        <td>7,000원</td>
                        <td>4,900원</td>
                        <td>8,000원</td>
                        <td>5,600원</td>
                    </tr>
                    <tr>
                        <td>Wide View석 성인</td>
                        <td>19,000원</td>
                        <td>13,300원</td>
                        <td>21,000원</td>
                        <td>14,700원</td>
                    </tr>
                    <tr>
                        <td>Wide View석 청소년/어린이</td>
                        <td>9,500원</td>
                        <td>6,650원</td>
                        <td>10,500원</td>
                        <td>7,350원</td>
                    </tr>
                    <tr>
                        <td>With석 성인</td>
                        <td>20,000원</td>
                        <td>14,000원</td>
                        <td>22,000원</td>
                        <td>15,400원</td>
                    </tr>
                    <tr>
                        <td>With석 청소년/어린이</td>
                        <td>10,000원</td>
                        <td>7,000원</td>
                        <td>11,000원</td>
                        <td>7,700원</td>
                    </tr>
                    <tr>
                        <td>World Class석 성인</td>
                        <td>21,000원</td>
                        <td>14,700원</td>
                        <td>23,000원</td>
                        <td>16,100원</td>
                    </tr>
                    <tr>
                        <td>World Class석 청소년/어린이</td>
                        <td>10,500원</td>
                        <td>7,350원</td>
                        <td>11,500원</td>
                        <td>8,050원</td>
                    </tr>
                </tbody>
            </table>
            <strong>
            *30명 이상 단체 관람 시, 최대 할인가인 30% 할인된 금액으로 관람이 가능합니다. <br />
            *단체관람 신청방법 : 전화 예매 (1588-7890/티켓링크 콜센터) *콜센터 운영시간 10:00 ~ 19:00
            </strong>
            <div className="ticktetsNoteBox">
                <strong>단체관람 신청안내</strong>
                <p>*경기 5일 전 ~ 경기 1일 전까지 신청 가능합니다.</p>
                <p>*콜센터 유선 연락 불가 시, 티켓링크 사이트 내 1:1 문의를 통해서도 접수 가능합니다.</p>
                <p>*단체관람 신청 후, 자리변경/교환/환불은 불가합니다.</p>
                <p>*구단 사정으로 인하여 신청이 불가할 수도 있습니다.</p>
                <p>*문의전화 : 1588-7890(티켓링크)을 추천드립니다.</p>
            </div>
            <h3>경기관람안내</h3>
            <div>
                <Link><span>FAQ(자주하는 질문)</span></Link>
                <Link><span>경기장 위치</span></Link>
            </div>
            <h3>고객센터</h3>
            <div>
                <p>
                    예매/문의<strong>1588-7890</strong>
                </p>
                <div>
                    <Link>1:1 문의</Link>
                    <Link>FAQ</Link>
                </div>
            </div>
        </section>
        </>
    )
}