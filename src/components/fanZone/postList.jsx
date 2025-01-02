import { Link } from "react-router-dom"
import { useState ,useEffect } from "react";
import { useLocation , useNavigate } from "react-router-dom"
import { formatDate } from "date-fns";

export default function PostList (){
    const navigate = useNavigate();
    const Location = useLocation(); 
    const secondLocation = Location.pathname.split('/')[2]
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    let type = "";
    switch(secondLocation){
        case 'announcement' : 
        type = 'notice'
        break;
        case 'news'  : 
        type = 'news'
        break;
        case 'utdReporter' :
        type = 'report'
        break;
        case 'cheeringGrounds' :
        type = 'cheeringGrounds'
        break;
        default : type = 'notice'
    }
    console.log(backendUrl);

    // 페이지당 보여지는 게시물 최대 게시물 개수
    const MAXIMUM = 10;
    // 현재페이지 번호 1로 현재페이지를 나타내는 state 생성
    const [currentPage, setCurrentPage] = useState(1);
    // total  =  데이터의 총 개수 => 데이터의 총 개수에 따라서 pageNation이 달라진다.
    const [total , setTotal ] =  useState(0);
    // 페이지네이션 생성을 위한 state
    const [pageNation , setPageNation] = useState(null)
    // 마지막 페이지네이션 count
    const lastPage = Math.ceil(total / 10);
    const [data ,setData]  = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch(`${backendUrl}/post/List?type=${type}&offset=${(currentPage - 1) * MAXIMUM}&count=${MAXIMUM}`);
            if (!res.ok) {
              throw new Error('서버로부터 데이터를 불러오는데 실패했습니다.');
            }
            const data = await res.json();
            setData(data.posts); 
            setTotal( data.totalPostCount)
            // 현재페이지 번호가 6보다 작을 경우의 pageNation 배열 생성 6 <= current 경우는 next함수에서 새로운 배열 생성
            if(currentPage < 6){
                setPageNation(Array.from({ length: Math.ceil(total / 10) > 5 ? 5 : Math.ceil(total / 10) }, (_, index) => index + 1));
            }
          } catch (error) {
            alert('백엔드 서버 배포 작업을 진행 중입니다!');  
            // navigate('/');  
          }
        };
        
        fetchData();
    }, [navigate, type, currentPage, total,backendUrl]);
    
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1120);
    
    const handlePrevPage = () => {
        if(currentPage === 1)return;
        setCurrentPage(currentPage - 1);
        if ( currentPage % 5 === 1 ) {
            const newPageNation = Array.from(
              { length: 5 },
              (_, index) =>  currentPage - index -1
            ).reverse();
            setPageNation(newPageNation);
        }
    }
    const handleNextPage = () => {
        if(currentPage === lastPage) return alert('마지막 페이지입니다.') ;
        setCurrentPage(currentPage + 1);
        if (currentPage % 5 === 0) {
            const newPageNation = Array.from(
              { length: 5 < Math.ceil((total - (currentPage) * MAXIMUM) / MAXIMUM) ? 5 : Math.ceil((total - (currentPage) * MAXIMUM) / MAXIMUM) },
              (_, index) => index + currentPage + 1
            );
            setPageNation(newPageNation);
        }
    }

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 1120)
    }
    useEffect(() => {
        window.addEventListener('resize',handleResize)
        handleResize()
        return () =>{
            window.removeEventListener('resize',handleResize)
        } 
    },[])

    if (!data || !Array.isArray(data)) {
        return null;
    }

    if(isMobile){
        return (
            <>
            {secondLocation === 'cheeringGrounds' ? 
            <div className="boardList">
                <ol>
                    {data.map((el,index) => <li id={el.id} key={index}><Link to={`/fanZone/${secondLocation}/${el.id}`}><p>{el.title}</p><span>{el.author}</span><span className="division">{el.createdAt}</span><span>{el.views}</span></Link></li>)}
                </ol>
            </div>
                :
            <div className="boardList">
                <ol>
                    {data.map((el,index) => <li id={el.id} key={index}><Link to={`/fanZone/${secondLocation}/${el.id}`}><p>{el.title}</p><span>{el.createdAt}</span><span>{el.views}</span></Link></li>)}
                </ol>
            </div>
            }
    
            <div>
                <button onClick={handlePrevPage}>prev</button>
                <ol>
                    {pageNation.map((el) => <li key={el} onClick={() => setCurrentPage(el)} className={currentPage === el ? "active" : ''}>{el}</li>)}
                </ol>
                <button onClick={handleNextPage}>next</button>
            </div>
            </>
        )
    }


    return (
        <>
        {secondLocation === 'cheeringGrounds' ? 
        <div className="boardList">
            <div><span>NO</span><span>구분</span><p>제목</p><span>작성자</span><span>작성일</span><span>조회수</span></div>
            <ol>
                {data.map((el,index) => <li id={el.id} key={index}><Link to={`/fanZone/${secondLocation}/${el.id}`}><span>{el.id}</span><span>{el.type.toUpperCase()}</span><p>{el.title}</p><span>{el.author}</span><span>{formatDate(el.createdAt,'yyyy-MM-dd')}</span><span>{el.views}</span></Link></li>)}
            </ol>
        </div>
            :
        <div className="boardList">
            <div><span>구분</span><p>제목</p><span>작성일</span><span>조회수</span></div>
            <ol>
                {data.map((el,index) => <li id={el.id} key={index}><Link to={`/fanZone/${secondLocation}/${el.id}`}><span>{el.type.toUpperCase()}</span><p>{el.title}</p><span>{formatDate(el.createdAt,'yyyy-MM-dd')}</span><span>{el.views}</span></Link></li>)}
            </ol>
        </div>
        }

            <div>
                <button onClick={handlePrevPage}>prev</button>
                <ol>
                    {pageNation.map((el) => <li key={el} onClick={() => setCurrentPage(el)} className={currentPage === el ? "active" : ''}>{el}</li>)}
                </ol>
                <button onClick={handleNextPage}>next</button>
            </div>
        </>
    )
}