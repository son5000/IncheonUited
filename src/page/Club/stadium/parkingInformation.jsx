import PageBox from "../../../components/club/PageBox";



export default function ParkingInformation () {

    return (
        <PageBox aniWidth={'75%'} >
            <section className="parkingArea">
                <h3>인천축구전용경기장 주차 안내</h3>
                <p>인천축구전용경기장 주차장 진출입경로를 아래와 같이 안내해드립니다.<br />
                   경기장 방문 목적과 입차, 출차 전용 경로를 확인하시고 방문해주시기 바랍니다.
                </p>
                <img src="/images/club/parking_map.png" alt="" />
                <ul>
                    <li>
                        <p>경기관람객,홈플러스</p>
                    </li>
                    <li>
                        <p>출차전용</p>
                    </li>
                    <li>
                        <p> <span style={{fontWeight:'500'}}>VIP, SKYBOX, </span>기자, 언론인진행관계자, 아레나컨벤션</p>
                    </li>
                    <li>
                        <p>경기관람객 차량출입구</p>
                    </li>
                    <li>
                        <p>경기관람객 차량출입구</p>
                    </li>
                </ul>
                <h3>주차장 진출입 게이트</h3>
                <ul>
                    <li>
                        <img src="/images/club/parking_img_01.png" alt="" />
                        <strong>P1 (B1, F1 ) 입출차 게이트</strong>
                        <p>
                        - VIP 및 SKYBOX, 경기진행관계자,<br />
                        아레나 컨벤션 이용객<br />
                        - 주차대수 : 335대<br />
                        - VIP 및 경기진행을 위한 차량 전용주차장입니다 
                        </p>
                    </li>
                    <li>
                        <img src="/images/club/parking_img_02.png" alt="" />
                        <strong>P2 (B2) 입출차 게이트</strong>
                        <p>
                        - 일반관람객, 홈플러스 이용객 (※출차시 좌회전 금지)<br />
                        - 주차대수 : 551대<br />
                        - B2주차장은 입출차 가능합니다
                        </p>
                    </li>
                    <li>
                        <img src="/images/club/parking_img_03.png" alt="" />
                        <strong>P3 (B3) 입차전용 게이트</strong>
                        <p>
                        - 일반관람객, 홈플러스 이용객<br />
                        - 주차대수 : 560대<br />
                        - B3주차장은 입차만 가능합니다.
                        </p>
                    </li>
                </ul>
                <h3>주차장 이용과 관련하여 알려드립니다.</h3>
                <p>
                인천축구전용경기장은 일반관람객과 아레나파크컨벤션웨딩홀, 홈플러스 이용 고객을 포함하여 약 1,100여대 주차 수용이 가능합니다.<br />
                홈경기가 없는 날에는 비교적 주차장 이용이 여유로우나 홈경기 당일 혼잡이 예상되오니 대중교통(버스, 지하철 등) 이용을 부탁드립니다.
                </p>
                <div>
                    <ul>
                        <li>간선버스 14번, 15번, 22번, 28번</li>
                        <li>지선버스 506번, 인천e음22번</li>
                        <li>지하철 국철 1호선 도원역 1번출구, 수인선 1호선 숭의역 4번출구</li>
                    </ul>
                    <div>
                    <span>
                        <img src="/images/club/parking_tel.png" alt="전화 이모티콘" />
                        <p>
                            <span>이용문의</span><br />
                            (032-880-5588)
                        </p>
                    </span>
                    <span>
                        <img src="/images/club/parking_time.png" alt="시계 이모티콘" />
                        <p>
                            <span>이용시간</span><br></br>
                            09:00 ~ 24:00
                        </p>
                    </span>
                    </div>
                </div>
            </section>
        </PageBox>
    )
}