import Banner from "../../components/Banner";
import { Link } from "react-router-dom";
import NextMatchSlide from "../../components/ticketMembership/NextMatchSlide";
import { Seat } from "../Club/stadium/seatInformation";
export default function BuyTickets (){

    return (
        <>
        <Banner aniWidth={"5%"}  />
        <section className="buyTicketsArea size1080">
            <div className="ticketsTitleBox">
                <img src="/images/ticketMembership/main_logo.png" alt="인천유나이티드 엠블럼" />
                <p>2024시즌 티켓 정책</p>
            <h2>2024시즌 티켓 정책을 안내해드립니다!</h2>
            </div>
            <div>
                <Link>티켓예매/취소</Link>
                <Link>티켓취소 안내</Link>
                <Link>스마트티켓 이용방법</Link>
            </div>
            <NextMatchSlide />
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
                        <td rowSpan="2">S석/텐석 2층 (Expert석)</td>
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
                        <td rowSpan="2">E석 1층 (Exciting석)</td>
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
                        <td rowSpan="2">W석 2층 (Win석)</td>
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
                        <td rowSpan="2">W석 1층 (Win석)</td>
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
                        <td rowSpan="2">W2~W5 구역 (World Class석)</td>
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
        <div className="ticktetsNoteBox" >
            <strong>티켓 유의사항</strong>
            <p>*홈경기 온라인 예매는 선예매(홈경기일 5일전), 일반예매(홈경기일 4일전) 오후 2시 구단 홈페이지 및 티켓링크 홈페이지에서 진행됩니다. ※ 상황에 따라 예매 오픈일은 변경될 수 있습니다.</p>
            <p>*온라인 예매는 경기 당일 후반전 15분까지 가능합니다.일은 변경될 수 있습니다.</p>
            <p>*티켓 온라인 예매 취소는 홈경기 시작 2시간 전까지만 가능합니다.</p>
            <p>*경기 당일 입장시간이 많이 소요되니, 일찍 방문하시기 바랍니다. 경기 1~2시간 전 방문 권장</p>
            <p>*티켓링크 어플을 통해 스마트 티켓 발권 혹은 매표소/무인발권기에서 실물 티켓 발권 후 입장 가능 (빠른 입장을 위해 스마트 티켓 발권을 추천드립니다.)</p>
            <p>*본인 좌석 외 다른 좌석으로 이동 또는 착석 불가합니다.</p>
            <p>*원정팀 MD 상품을 착용하고 원정석 이외 구역에 착석했을 경우, 경고 및 퇴장 조치됩니다.</p>
        </div>
        <span>경기관람 안내</span>
        <ul>
            <li><Link><span>홈 경기 행사안내</span></Link></li>
            <li><Link><span>예매권북 이용방법</span></Link></li>
            <li><Link><span>FAQ(자주하는 질문)</span></Link></li>
            <li><Link><span>경기장 위치</span></Link></li>
        </ul>
        <div>
            <div>
                <span>고객센터</span>
                <div>
                    <p>티켓문의 <strong>1588-7890</strong></p>
                    <p>Call center for foreigners <strong>1644-3850</strong></p>
                    <Link>FAQ</Link>
                </div>
            </div>
            <div>
                <span>티켓정보</span>
                <div>
                    <Link></Link>
                    <Link></Link>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}