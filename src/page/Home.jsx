import MainSlide  from "../components/main/MainSlide";
import LeagueAndMatch from "../components/main/LeagueAndMatch";
import FeedSlide from "../components/main/FeedSlide";
import data from '../data.json';

const  products = data.products;

export default function Home() {

  return (
    <>
        {/* MainSlide */}
        <MainSlide />   

        {/* IUFU MATCH  */}
        <section className="matchArea size1442">
          <h2><span className="hStyleItalic">IUFCMATCH</span></h2>
          <LeagueAndMatch />
        </section>

        {/* BLUE MARKET */}
        <section className="marketArea size1442">
          <h2 className="hStyle">INCHEON UNITED BLUE MARKET</h2>
          <a className="a-after" rel="noreferrer" target="_blank" href="https://www.incheonutdmarket.com/">블루마켓 바로가기</a>
          <ul>
            {products.map((el)=>{
              return(
                <li key={el.id} herf="###">
                  <a rel="noreferrer" target="_blank" href="https://www.incheonutdmarket.com/">
                    <img src={el.image} alt={el.title} />
                    <p>{el.title}</p>
                  </a>
                </li>
              )
            })}
          </ul>
        </section>

        {/* IUFC FEEDS */}
        <section className="feedArea size1442">
          <h2 className="hStyle">IUFC FEEDS</h2>
          <FeedSlide />
        </section>

        {/* GALLERY */}
        <section className="galleryArea size1080">
          <h2 className="hiddenH2">Gallery</h2>
          <ul>
            <li>
              <h3 className="hStyle">PHOTO</h3>
              <a href="###">인천유나이티드 사진첩</a>
            </li>
            <li>
              <h3 className="hStyle">MAGAZINE</h3>
              <a href="###">인천유나이티드 매거진</a>
            </li>
            <li>
              <h3 className="hStyle">IUFC VIDEO</h3>
              <iframe title="인천유나이티드 유튜브 비디오" src="https://www.youtube.com/embed/xBhacOaFnQ4?si=FQBhjvoG6xxem_mE"></iframe>
            </li>
          </ul>
        </section>

        {/* ACADEMY */}
        <section className="academyArea">
         <div className="size1080">
            <h2 className="hStyleItalic">
              INCHEON UNITED
              <br />
              ACADEMY
            </h2>
            <p>
              <strong>인천유나이티드 아카데미</strong>는
              <br /> 유치부부터 초등학생, 성인을 대상으로 전문적인 강사진과
              체계적이고
              <br /> 다양한 프로그램으로 축구 교육을 실시하고 있습니다.
              <br />
              축구를 통해 정서적,신체적으로 건강해질 수 있도록 노력하고
              <br /> 보다 좋은 환경에서 축구를 마음껏 즐길 수 있도록 다양한
              프로그램을 진행하고 있습니다.
            </p>
            <a className="a-before" href="###">성인축구클리닉 결제</a>
            <a className="a-before" href="###">공지사항 NOTICE</a>
         </div>
        </section>

        {/* EVENT  */}
        <section className="eventArea size1080">
          <h2 className="hStyleItalic">IUFC EVENT</h2>
          <ul>
            <li>
              <a href="###">
                <strong>EVENT1</strong>
                <p className="a-after">8/24(토) 전북전 홈경기 예매</p>
              </a>
            </li>
            <li>
              <a href="###">
                <strong>EVENT2</strong>
                <p className="a-after">2024 홈경기 티켓 예매 안내</p>
              </a>
            </li>
            <li>
              <a href="###">
                <strong>EVENT3</strong>
                <p className="a-after">시민주주 정보 최신화 안내</p>
              </a>
            </li>
          </ul>
        </section>

        {/* YOUTH */}
        <section className="youthArea">
          <h2 className="hStyle">인천유소년체육진흥원</h2>
          <p>
            인천유소년체육진흥원은 인천 지역의 유소년이
            <br />
            다양한 스포츠 활동과 참여를 통해 건전한 정신과 건강한 몸을 만들어
            <br />
            미래에 풍요롭고 행복하며 여유로운 삶을 살아갈 수 있도록 돕기 위한
            사단법인입니다.
          </p>
          <a className="a-before" href="###">인천 유소년체육진흥원 홈페이지</a>
        </section>

        {/* SPONSOR */}
        <section className="sponsorArea size1442">
          <a href="###">SPONSOR</a>
          <h2 className="hStyle">INCHEON UNITED PREMIER SPONSOR</h2>
          <ul>
            <li>인천광역시</li>
            <li>ifez</li>
            <li>신한은행</li>
            <li>posco포스코이앤씨</li>
          </ul>
          <a href="###">스폰서 더보기</a>
          <a href="###">스폰서십 프로그램 안내</a>
        </section>
    </>
  );
}
