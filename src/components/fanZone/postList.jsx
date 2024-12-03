import { Link } from "react-router-dom"
import { useState ,useEffect } from "react";
import { useLocation , useNavigate } from "react-router-dom"
import { formatDate } from "date-fns";

export default function PostList (){
    const navigate = useNavigate();
    const Location = useLocation(); 
    const secondLocation = Location.pathname.split('/')[2]
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

    
    const [data ,setData]  = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch(`http://localhost:5000/post/List?type=${type}&offset=0&count=1`);
            if (!res.ok) {
              throw new Error('서버로부터 데이터를 불러오는데 실패했습니다.');
            }
            const data = await res.json();
            setData(data); // 데이터 그대로 상태에 저장
          } catch (error) {
            alert(error.message);  // 오류 메시지 출력
            navigate('/');  // 오류 발생 시 다른 페이지로 이동
          }
        };
        
        fetchData();
    }, [navigate, type]);
    
    const [isPageNation,setIsPageNation] = useState(1)
    const pageNation =  [1,2,3,4,5];
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1120);
    
    const handlePrevBtn = () => {
        if(isPageNation === 1){
        return;
        }
        setIsPageNation(isPageNation - 1);
    }
    const handleNextBtn = () => {
        if(isPageNation === 5){
        return;
        }
        setIsPageNation(isPageNation + 1);
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
                    {data.map((el,index) => <li id={el.id} key={index}><Link to={`/fanZone/${secondLocation}Post/${el.id}`}><p>{el.title}</p><span>{el.author}</span><span className="division">{el.createdAt}</span><span>{el.views}</span></Link></li>)}
                </ol>
            </div>
                :
            <div className="boardList">
                <ol>
                    {data.map((el,index) => <li id={el.id} key={index}><Link to={`/fanZone/${secondLocation}Post/${el.id}`}><p>{el.title}</p><span>{el.createdAt}</span><span>{el.views}</span></Link></li>)}
                </ol>
            </div>
            }
    
            <div>
                <button onClick={handlePrevBtn}>prev</button>
                <ol>
                    {pageNation.map((el) => <li key={el} onClick={() => setIsPageNation(el)} className={isPageNation === el ? "active" : ''}>{el}</li>)}
                </ol>
                <button onClick={handleNextBtn}>next</button>
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
                {data.map((el,index) => <li id={el.id} key={index}><Link to={`/fanZone/${secondLocation}Post/${el.id}`}><span>{el.id}</span><span>{el.type.toUpperCase()}</span><p>{el.title}</p><span>{el.author}</span><span>{formatDate(el.createdAt,'yyyy-MM-dd')}</span><span>{el.views}</span></Link></li>)}
            </ol>
        </div>
            :
        <div className="boardList">
            <div><span>구분</span><p>제목</p><span>작성일</span><span>조회수</span></div>
            <ol>
                {data.map((el,index) => <li id={el.id} key={index}><Link to={`/fanZone/${secondLocation}Post/${el.id}`}><span>{el.type.toUpperCase()}</span><p>{el.title}</p><span>{formatDate(el.createdAt,'yyyy-MM-dd')}</span><span>{el.views}</span></Link></li>)}
            </ol>
        </div>
        }

        <div>
            <button onClick={handlePrevBtn}>prev</button>
            <ol>
                {pageNation.map((el) => <li key={el} onClick={() => setIsPageNation(el)} className={isPageNation === el ? "active" : ''}>{el}</li>)}
            </ol>
            <button onClick={handleNextBtn}>next</button>
        </div>
        </>
    )
}