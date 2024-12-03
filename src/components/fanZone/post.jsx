import { useParams } from "react-router-dom"
import { useEffect , useState } from "react";
import { useLocation , useNavigate } from "react-router-dom";
import Banner from "../Banner";

export default function Post (){

  const navigate = useNavigate();
  const Location = useLocation(); 
  const secondLocation = Location.pathname.split('/')[2]
  let ifErrorToNavigate = '';
  switch(secondLocation){
    case "announcementPost" : 
        ifErrorToNavigate = 'announcement';
      break; 
    case "newsPost" : 
       ifErrorToNavigate = 'news';
      break;
    case "utdReporterPost" : 
        ifErrorToNavigate = 'utdReporter';
      break;
    case "cheeringGroundsPost" : 
        ifErrorToNavigate = 'cheeringGrounds';
      break;
    default : ifErrorToNavigate = 'announcement';
  } 

  const { id } = useParams();
  const [post , setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`http://localhost:5000/post/${ id }`);
        if(!res.ok){
          throw new Error('게시물을 불러오는 데 실패했습니다.')
        }
        const data = await res.json()
        setPost(data);
      } catch(error){
        alert(error.message)
        navigate(`/fanZone/${ifErrorToNavigate}`)
      }
    }
    fetchPost();
  },[navigate,secondLocation,id,ifErrorToNavigate])

  if(!post){
    return null;
  }

    return (<>
    <Banner aniWidth={'100%'} />
        <section className="size1442">
          <div>
            <h2>{post.title}</h2>
            <p><mark>작성일</mark><span></span><mark>조회수</mark><span>479</span></p>
            <div>
                <img src="/images/fanZone/board_sample_img.png" alt="" />
                ㈜인천유나이티드에서 근무할 기간제계약직 직원을 다음과 같이 공개 채용하고자 하니, 많은 지원바랍니다.
                1. 모집 분야 및 인원
                  가. 그라운드 관리 1명 / 계약직(사원/대리)

                2. 임용 형태 및 계약 기간
                 가. 임용형태 : 기간제 계약직
                 나. 계약기간 : 계약일로부터 ~ 2년
                  ※ 2년간 인사평가 후 정규직 전환 가능

                3. 접수 기간
                  가. 2024.9.12.(목) ~ 2024.9.23.(월)
                  나. 당일 18:00까지 도착분에 한하여

                4. 접수 방법
                  가. 이메일 접수 : recruit@incheonutd.com
                  나. 방문 및 우편접수 불가
                  다. 기타 자세한 사항은 첨부된 채용 공고 계획을 참고하시기 바랍니다.

                5. 관련문의
                  가. 구단 사무국 경영기획팀(☎032-880-5512)

            </div>
            <ul>
                <li>
                    <span>이전글</span><p>9.22.(일) K리그1 31R 홈 경기 행사 안내</p><div><mark>작성일</mark><span>2024-09-20</span><mark>조회수</mark><span>75</span></div>
                </li>
                <li>
                    <span>다음글</span><p>2024 인천축구 꿈나무 페스티벌 참가팀 모집(9.9.(월)~9.30.(월))</p><div><mark></mark><span>2024-09-06</span><mark>조회수</mark><span>230</span></div>
                </li>
            </ul>
          </div>
        </section>
    </>
    )
}