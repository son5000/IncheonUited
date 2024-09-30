import PageBox from '../../../components/club/PageBox';


export default function Vision (){
    return(
<PageBox aniWidth={'10%'}>
    <div className='visionArea'>
        <img src="/images/club/vision01.png" alt="인천유나이티드 구단소개 이미지('Break through the limits 한계를 돌파하라!"/>
        <h3>한국프로스포츠 시장의 구조적 한계</h3>
        <ol>
            <li>
                <p>
                    중계권 수익 발생의 한계
                </p>
                <div>
                    <img src="/images/club/vision_icon01.png" alt="" />
                </div>
            </li>
            <li>
                <p>
                    티켓 수입의 한계
                </p>
                <div>
                    <img src="/images/club/vision_icon02.png" alt="" />
                </div>
            </li>
            <li>
                <p>
                    광고스폰서 유치의 한계
                </p>
                <div>
                    <img src="/images/club/vision_icon03.png" alt="" />
                </div>
            </li>
        </ol>
        <div>
            <img src="/images/club/vision_graph.png" alt="선수단 인건비 비교표" />
            <div>
                <p> <span className="mark-bg-blue">시민구단 인천유나이티드의</span> 한계</p>
                <p>현재 K리그 1상위 구단 전북,<br />
                울산의 경우<br />
                <strong>매년 2배 이상의<br />
                선수단 인건비 지출</strong> 
                </p>
            </div>
        </div>
        <img src="/images/club/vision02.png" alt="인천유나이티드 슬로건" />
        <div>
            <h3>인천유나이티드 우선순위 가치</h3>
            <p>앞으로 10년, 세 영역 가치 창출 목요로 한계에 도전합니다!</p>
            <ol>
                <li><div>
                    <mark className="bg-color-blue">스포츠가치</mark>
                    <strong>Sports Value</strong>
                    </div>
                    <p><b>승리,우승,인재육성</b>을 통한 스포츠적 가치</p>
                    </li>
                <li><div>
                    <mark className="bg-color-blue">비즈니스 가치</mark>
                    <strong>Business Value</strong>
                    </div>
                    <p><b>매출 및 수익 창출</b>을 통한 기업으로서 가치</p>
                    </li>
                <li><div>
                    <mark className="bg-color-blue">사회적 가치</mark>
                    <strong>Social Value</strong> 
                    </div>
                    <p><b>CSR 및 연고지역 상생</b>을 통한 사회적 가치</p>
                    </li>
            </ol>
        </div>
        <div>
            <h3>인천유나이티드 한계 돌파 전략</h3>
            <p>앞으로 10년, 우리의 한계를 전략적으로 돌파합니다!</p>
            <ol>
                <li><div>
                    <mark className="bg-color-blue">데이터 기반 선수단 운영</mark>
                    </div>
                    <p>세계 최고의 데이터 분야 업체와 협업을 통해 데이터 기반의 체계적인 선수단 운영 <br />
                         <b>돈이 아닌 데이터를 통한 ‘K리그 지배’</b>
                    </p>
                    </li>
                <li><div>
                    <mark className="bg-color-blue">팬 중심 조직편성</mark>
                    </div>
                    <p><b>팬 중심 상품/서비스 개발</b>을 위해 <b>데이터 분석 전문 인력 배치!</b><br />
                      혁신적인 프로스포츠 비즈니스 모델 도입!</p>
                    </li>
                <li><div>
                    <mark className="bg-color-blue">인천 지역 인제 육성</mark>
                    </div>
                    <p>지역사회 공헌을 위해 인천시민 대상 <b>데이터 분야 인재 발굴/육성!</b><br />
                     제한된 예산과 시간을 효율적으로 활용하여 <b>한계를 극복하는 구단!</b></p></li>
            </ol>
        </div>
    </div>
 </PageBox>
    ) 
}