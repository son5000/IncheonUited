import { useEffect , useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom"
import { formatDate } from "date-fns";
import Banner from "../Banner";

export default function Post (){

  const navigate = useNavigate();

  const { id } = useParams();
  const [post , setPost] = useState(null);
  const [ previousPost , setPreviousPost] = useState(null);
  const [ nextPost , setNextPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`http://localhost:5000/post/${ id }`);
        if(!res.ok){
          throw new Error('게시물을 불러오는 데 실패했습니다.')
        }
        const data = await res.json()
        
        setPost(data.post);
        setPreviousPost(data.previousPost);
        setNextPost(data.nextPost);
      } catch(error){
        alert(error.message)
        navigate(-1)
      }
    }
    fetchPost();
  },[navigate,id])

  console.log(previousPost);

  if(!post){
    return null;
  }

    return (<>
    <Banner aniWidth={'100%'} />
        <section className="size1442 post" >
            <h2>{post.title}</h2>
            <p className="postCreatedAtViews"><small>작성일</small><span>{formatDate(post.createdAt,'yyyy-MM-dd')}</span>|<small>조회수</small><span>{post.views}</span></p>
            <div>
                <img src="/images/fanZone/board_sample_img.png" alt="" />

                ㈜인천유나이티드에서 근무할 기간제계약직 직원을 다음과 같이 공개 채용하고자 하니, 많은 지원바랍니다. 
                <br />
                <br />
                1. 모집 분야 및 인원<br />
                  가. 그라운드 관리 1명 / 계약직(사원/대리)<br />
                  <br />
                  <br />
                2. 임용 형태 및 계약 기간<br />
                 가. 임용형태 : 기간제 계약직<br /> 
                 나. 계약기간 : 계약일로부터 ~ 2년<br />
                  ※ 2년간 인사평가 후 정규직 전환 가능<br />
                  <br />
                  <br />
                3. 접수 기간<br />
                  가. 2024.9.12.(목) ~ 2024.9.23.(월)<br />
                  나. 당일 18:00까지 도착분에 한하여<br />
                  <br />
                  <br />
                4. 접수 방법<br />
                  가. 이메일 접수 : recruit@incheonutd.com<br />
                  나. 방문 및 우편접수 불가<br />
                  다. 기타 자세한 사항은 첨부된 채용 공고 계획을 참고하시기 바랍니다.<br />
                  <br />
                  <br />
                5. 관련문의<br />
                  가. 구단 사무국 경영기획팀(☎032-880-5512)<br />

            </div>
            <ul>
                <li>
                <Link to={`/fanZone/announcement/${previousPost.id}`}>
                    <span>이전글</span><div>{previousPost.title}</div><p className="postCreatedAtViews"><small>작성일</small><span>{formatDate(previousPost.createdAt,'yyyy-MM-dd')}</span>|<small>조회수</small><span>{previousPost.views}</span></p>
                  </Link>
                </li>
                <li>
                  <Link to={`/fanZone/announcement/${nextPost.id}`}>
                    <span>다음글</span><div>{nextPost.title}</div><p className="postCreatedAtViews"><small>작성일</small><span>{formatDate(nextPost.createdAt,'yyyy-MM-dd')}</span>|<small>조회수</small><span>{nextPost.views}</span></p>
                  </Link>
                </li>
            </ul>
        </section>
    </>
    )
}