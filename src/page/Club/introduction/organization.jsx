import PageBox from '../../../components/club/PageBox'


// 마지막 p태그 문단의 텍스트의 줄바꿈에 어려움을 겪는중.. 원하는 곳에서 줄바꿈이 일어나주지 않는다..

export default function Organization () {
    return (
    <PageBox aniWidth={'15%'} >
        <section className='organizationArea'>
            <mark className="bg-color-blue">CONTACT</mark>
            <h3>연락처</h3>
            <ul>
                <li><strong>대표전화&#40;TEL&#41;</strong><p>032&#41; 880-550 / +82-32-880-5500</p></li>
                <li><strong>팩스밀리&#40;FAX&#41;</strong><p>032&#41; 423-1509 / +82-32-423-1509</p></li>
                <li><strong>주소&#40;ADRESS&#41;</strong><p>우편번호 22328<br />
                인천광역시 중구 참외전로246, 3층&#40; 도원동,인천축구전용경기장 &#41;246<br />
                Chamoejeon-ro, Jung-gu, Incheon, Republic of Korea &#40; POSTCODE 22328 &#41;</p></li>
            </ul>
            <mark className="bg-color-blue">ORGANIZATION CHART</mark>
            <h3>조직도</h3>
            <p>인천유나이티드는 구단주인 인천광역시장과 대표이사, 단장, 사무국장의 지휘 아래 경영지원부, 마케팅부, 전력강화부 이상 3개 부서와 축구센터 부서로 조직이 나뉘어 있습니다.
            <span>경영지원부는 경영기획팀과 경기장관리팀으로 구성되어 인천유나이티드의 구단 살림 및 경기장, 훈련장 등의 운영을 책임지고 있습니다.<br />
            마케팅부는 홈경기 운영, 티켓, 상품화 사업, 사회공헌활동 등 각종 마케팅 업무를 담당하고 있는 마케팅팀과 언론/PR, 소셜미디어 운영,<br />
            후원사 업무, 커뮤니케이션,아카데미, 기타 홍보 업무 등 각종 대외업무를 담당하는 대외협력팀으로 구성되어 있습니다.<br /> 전력강화팀에서는 프로 선수단과 유소년 선수단을 운영하고 있습니다.<br />
            인천유나이티드 선수단은 프로 선수단, 구단 산하 유소년팀인 U-18팀 대건고, U-15팀 광성중, U-12팀, 인천 전역 아카데미 지부로 구성되어 있습니다.<br />
            축구센터 부서는 인천 선학동에 있는 인천유나이티드FC 축구센터 운영 및 관리를 책임지고 있습니다.</span></p>
            <img src="/images/club/organization_01.jpg" alt="인천유나이티드 조직도 및 선수단 구성 이미지" />
        </section>
    </PageBox>
    )
}