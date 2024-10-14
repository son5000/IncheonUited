import PageBox from "../../../components/club/PageBox"


export default function Emblem () {
    return(
      <PageBox aniWidth={'20%'} >
        <section className="emblemArea">
            <h2 className="hiddenH2">인천유나이티드 엠블럼</h2>
                <figure>
                    <figcaption>
                        <mark className="bg-color-blue">EMBLEM</mark>
                        <h3>엠블럼</h3>
                        <p>
                        기존의 타 구단에서 사용하지 않은 타원형의 SHAPE을 활용하였으며,<br />
                        타원과 YELLOW COLOR는 원만함, 화합의 이미지를 나타내는 형상으로<br />
                        인천시, 시민, 기업이 화합하는 이미지와 인천을 상징하는 닻,<br />
                        바른길로 이끄는 방향키, 날개의 형상을 조합하여 프로축구계의 새로운 리더가
                        되고자 하는 강한 의지를 상징화하였습니다.
                        </p>
                        <div>
                                <button>엠블럼 이미지 다운로드</button>
                                <button>AI파일 다운로드</button>
                        </div> 
                    </figcaption>
                    <img src="/images/club/emblem01.png" alt="인천유나이티드 엠블럼 이미지" />                 
                </figure>
                <figure>
                    <figcaption>
                        <mark className="bg-color-blue">MASCOT</mark>
                        <h3>마스코트</h3>
                        <p>
                        기존의 타 구단에서 사용하지 않은 타원형의 SHAPE을 활용하였으며,
                        타원과 YELLOW COLOR는 원만함, 화합의 이미지를 나타내는 형상으로
                        인천시, 시민, 기업이 화합하는 이미지와 인천을 상징하는 닻,
                        바른길로 이끄는 방향키, 날개의 형상을 조합하여 프로축구계의 새로운 리더가
                        되고자 하는 강한 의지를 상징화하였습니다.
                        </p>
                        <button>마스코트 이미지 다운로드</button>
                    </figcaption>
                    <img src="/images/club/emblem02.png" alt="인천유나이티드 마스코트 이미지" />
                </figure>
                <figure>
                    <figcaption>
                        <mark className="bg-color-blue">UNIFROM</mark>
                        <h3>유니폼</h3>
                        <p>
                            <span>
                            인천의 2024시즌 새 유니폼 SPECTRUM(스펙트럼; 빛의 띠)은<br />
                            ‘다양한 빛이 모여 스펙트럼을 이루는 것처럼, 다양한 인천 팬이 모여 만들어진
                            인천유나이티드(United; 결속)’ 이라는 메시지가 담겨있습니다.
                            </span>
                            <span>
                            SPECTRUM 유니폼의 퍼스트 킷(1st KIT)과 세컨드 킷(2nd KIT) 모두 스펙트럼처럼
                            비슷한 톤의 다양한 색상이 조화롭게 어우러진 디자인으로 제작됐습니다.
                            </span>
                            <span>
                            퍼스트 킷은 인천유나이티드의 전통적인 색상 조합인 파랑과 검정으로 구성됐으며,
                            세컨드 킷은 8년 만에 노란색 계통으로 주 색상을 구성했고 파란색으로 포인트를 주어
                            새로운 도전을 형상화했습니다.<br />
                            이 세컨드 킷은 골키퍼(GK)의 퍼스트 킷으로도 활용됩니다.
                            </span>
                            한편, SPECTRUM 유니폼은 시각장애인과 축구를 통해 하나 된 사회를 지향하는
                            의미를 담아, 모든 필드 유니폼 전면 엠블럼 하단에 훈맹정음 점자로 '인천유나이티드'
                            구단 명을 새겼습니다. 이는 2023시즌 국내 프로스포츠 사상 처음으로 선보인
                            ‘훈맹정음 점자 표기 유니폼’ 스페셜 킷(Special KIT)의 연장 선상이라고 볼 수 있습니다.
                            더 많은 인천 시민, 팬에게 구단의 메시지가 닿길 바란다는 소망을 이 점자에 담았습니다.
                        </p>
                    </figcaption>
                    <img src="/images/club/emblem03.png"alt="인천유나이티드 유니폼 이미지" />
                </figure>
                <figure>
                    <figcaption>
                        <mark className="bg-color-blue">OLD UNIFROM</mark>
                        <h3>과거 유니폼</h3>
                        <p>
                        인천유나이티드의 창단 당시부터 유니폼과 관련되어서는
                        독창적인 이미지와 앞서나가는 이미지를 선보여 왔습니다.
                        창단 유니폼부터 2023년 시즌 유니폼까지 인천의 과거 유니폼을 이미지를 통해
                        확인하세요. 앞으로도 우리 인천유나이티드는 앞서나가는 디자인으로
                        인천의 이미지를 잘 전달하도록 하겠습니다.
                        </p>
                    </figcaption>
                    <img src="/images/club/emblem04.png" alt="인천유니아티드 유니폼 이미지" />
                </figure>    
        </section>
      </PageBox>
    )
}