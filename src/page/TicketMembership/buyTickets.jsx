import Banner from "../../components/Banner";
import { Link } from "react-router-dom";
import MainSlide from "../../components/main/MainSlide";
import { Seat } from "../Club/stadium/seatInformation";
export default function BuyTickets (){

    return (
        <>
        <Banner aniWidth={"5%"}  />
        <section className="buyTicketsArea">
            <div>
                <img src="/images/ticketMembership/main_logo.png" alt="인천유나이티드 엠블럼" />
                <p>2024시즌 티켓 정책</p>
            </div>
            <h2>2024시즌 티켓 정책을 안내해드립니다!</h2>
            <div>
                <Link>티켓예매/취소</Link>
                <Link>티켓취소 안내</Link>
                <Link>스마트티켓 이용방법</Link>
            </div>
            <MainSlide />
             <h3>경기장 좌석도/좌석뷰</h3>
             <p>
             -인천유나이티드 홈 경기장의 좌석 종류와 입장게이트는 아래와 같습니다. <br />
             -아래 좌석배치도의 각 좌석구역 이미지를 클릭하시면 구역별 관람 시야를 확인 하실 수 있습니다.
             </p>
            <Seat />
            <table>
                <caption>▶티켓 정책</caption>
                <thead>
                    <tr>
                        <th>좌석</th>
                        <th>구분</th>
                        <th>성인</th>
                        <th>청소년/어린이</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowspan="2">S석/텐석 2층 (Expert석)</td>
                        <td>정규라운드</td>
                        <td>13,000원</td>
                        <td>6,500원</td>
                    </tr>
                    <tr>
                        <td>파이널라운드</td>
                        <td>15,000원</td>
                        <td>7,500원</td>
                    </tr>
                    <tr>
                        <td rowspan="2">E석 1층 (Exciting석)</td>
                        <td>정규라운드</td>
                        <td>14,000원</td>
                        <td>7,000원</td>
                    </tr>
                    <tr>
                        <td>파이널라운드</td>
                        <td>16,000원</td>
                        <td>8,000원</td>
                    </tr>
                    <tr>
                        <td rowspan="2">W석 2층 (Win석)</td>
                        <td>정규라운드</td>
                        <td>21,000원</td>
                        <td>10,500원</td>
                    </tr>
                    <tr>
                        <td>파이널라운드</td>
                        <td>23,000원</td>
                        <td>11,500원</td>
                    </tr>
                    <tr>
                        <td rowspan="2">W석 1층 (Win석)</td>
                        <td>정규라운드</td>
                        <td>20,000원</td>
                        <td>10,000원</td>
                    </tr>
                    <tr>
                        <td>파이널라운드</td>
                        <td>22,000원</td>
                        <td>11,000원</td>
                    </tr>
                    <tr>
                        <td rowspan="2">W2~W5 구역 (World Class석)</td>
                        <td>정규라운드</td>
                        <td>21,000원</td>
                        <td>10,500원</td>
                    </tr>
                    <tr>
                        <td>파이널라운드</td>
                        <td>23,000원</td>
                        <td>11,500원</td>
                    </tr>
                    <tr>
                        <td>1인 테이블석</td>
                        <td>정규라운드</td>
                        <td colSpan={2}>22,000원</td>
                    </tr>
                    <tr>
                        <td>프리미엄 테이블석 (2인)</td>
                        <td>정규라운드</td>
                        <td colSpan={2}>49,000원</td>
                    </tr>
                    <tr>
                        <td>하이퍼 테이블석 (2인)</td>
                        <td>정규라운드</td>
                        <td colSpan={2}>54,000원</td>
                    </tr>
                    <tr>
                        <td>프리미엄석 클래식</td>
                        <td>정규라운드</td>
                        <td colSpan={2}>37,000원</td>
                    </tr>
                    <tr>
                        <td>프리미엄석 골드</td>
                        <td>정규라운드</td>
                        <td colSpan={2}>37,000원</td>
                    </tr>
                    <tr>
                        <td rowSpan={6}>라탄 테라스 존</td>
                        <td>2인(더블)</td>
                        <td colSpan={2}>54,000원</td>
                    </tr>
                    <tr>
                        <td>2인(트윈)</td>
                        <td colSpan={2}>59,000원</td>
                    </tr>
                    <tr>
                        <td>4인</td>
                        <td colSpan={2}>115,000원</td>
                    </tr>
                    <tr>
                        <td>5인</td>
                        <td colSpan={2}>140,000원</td>
                    </tr>
                    <tr>
                        <td>6인</td>
                        <td colSpan={2}>170,000원</td>
                    </tr>
                    <tr>
                        <td>8인</td>
                        <td colSpan={2}>220,000원</td>
                    </tr>
                    <tr>
                        <td rowSpan={2}>원정석</td>
                        <td>정규라운드</td>
                        <td>13,000원</td>
                        <td>6,500원</td>
                    </tr>
                    <tr>
                        <td>파이널라운드</td>
                        <td>15,000원</td>
                        <td>7,500원</td>
                    </tr>
                </tbody>
            </table>
            <strong>
            *온라인 예매가 기준이며 현장 구매 시 1매당 3천원이 추가됩니다<br />
            *예매 수수료 1,000원 별도<br />
            *어린이 : 만 36개월 이상 ~ 초등학생 / 청소년 : 중·고등학생
            </strong>

            <table>
                <caption>▶할인혜택</caption>
                <thead>
                    <tr>
                        <th>대상</th>
                        <th>할인 인원</th>
                        <th>할인 혜택</th>
                        <th>비고</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>축덕카드</td>
                        <td>축덕카드 발급자</td>
                        <td>신용카드 - 5천원 할인<br />체크카드 - 3천원 할인</td>
                        <td>전좌석 적용 가능</td>
                    </tr>
                    <tr>
                        <td>문화누리카드</td>
                        <td>문화누리카드 발급자</td>
                        <td>1인 4매 40% 할인</td>
                        <td>E/S석만 가능</td>
                    </tr>
                    <tr>
                        <td>국가유공자</td>
                        <td>본인만</td>
                        <td>50% 할인</td>
                        <td>국가유공자증 현장 증빙시<br />E/S석만 가능</td>
                    </tr>
                    <tr>
                        <td>중증 장애인(1~3급)</td>
                        <td>본인 포함 동반 1인까지</td>
                        <td>50% 할인</td>
                        <td>온라인 예매/현장 구매 가능<br />(단, 복지카드 증빙 필수)<br />E/S/W석 가능</td>
                    </tr>
                    <tr>
                        <td>만 65세 이상</td>
                        <td>본인만</td>
                        <td>50% 할인</td>
                        <td>신분증 현장 증빙시<br />E/S석만 가능</td>
                    </tr>
                    <tr>
                        <td>단체 관람(30인 이상)</td>
                        <td>단체 관람 전 인원</td>
                        <td>30% 할인</td>
                        <td>E/S/W석만 가능</td>
                    </tr>
                    <tr>
                        <td>병역 명문가</td>
                        <td>동반 1인</td>
                        <td>30% 할인</td>
                        <td>신분증 현장 증빙시<br />E/S석만 가능</td>
                    </tr>
                </tbody>
         </table>
         <table>
            <caption>▶무료입장 대상자</caption>
            <thead>
                  <tr>
                      <th>구분</th>
                      <th>대상</th>
                      <th>인원</th>
                      <th>증빙방법</th>
                  </tr>
            </thead>
              <tbody>
                  <tr>
                      <td>미취학아동</td>
                      <td>만 36개월 미만</td>
                      <td>본인만</td>
                      <td>부모 동반</td>
                  </tr>
                  <tr>
                      <td>군인</td>
                      <td>현역 병사 및 간부</td>
                      <td>동반 1인까지 (E석 2층만 가능)</td>
                      <td>휴가증 또는 군 신분증</td>
                  </tr>
              </tbody>
         </table>
                  <strong>*무료입장 대상자의 경우, 온라인 예매는 불가하며 현장에서 증빙 후 발권 가능합니다</strong>
    </section>
        </>
    )
}