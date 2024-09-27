import PageBox from "../../../components/club/PageBox"

export default function Stadium () {
    return (
        <PageBox aniWidth={'60%'}>
         <section className="stadiumArea">
            <h3>인천축구전용경기장 오시는 방법</h3>
            <p>인천축구전용경기장은 홈경기가 없는 날에는 비교적 주차장 이용이 여유로우나<br />
             홈경기 당일 혼잡이 예상되오니 대중교통(버스, 지하철 등)이용을 부탁드립니다.</p>
            <img src="/images/club/stadium_map.png" alt="인천축구전용경기장 주변 지도" />
            <ul>
                <li>
                    <strong>버스이용</strong>
                    <p>간선: 14번, 15번, 22번, 28번<br />
                    지선: 506번, 인천e음22번</p>
                </li>
                <li>
                    <strong>지하철 이용</strong>
                    <p>국철 1호선 도원역 1번출구<br />
                    수인선 1호선 숭의역 4번출구</p>
                </li>
                <li>
                    <strong>자가용 이용</strong>
                    <p>경인고속도로: 도화 IC {'>'} 도화초교사거리 {'>'}<br />
                    숭의시장사거리 {'>'}<br />
                    제2경인고속도로: 석수 IC {'>'} 학익 JC {'>'} 인천항 방면 {'>'}<br />
                    남부역사거리 {'>'} 숭의로터리 {'>'}</p>
                </li>
            </ul>
            <a href="###">
                <span>인천광역시 중구 참외전로 246</span>
            </a>
         </section>
        </PageBox>
    )
}