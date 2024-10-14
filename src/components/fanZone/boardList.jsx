import { Link } from "react-router-dom"
import { useState } from "react";
import { useLocation } from "react-router-dom"
import data from "../../data.json"

export default function BoardList (){

    const Location = useLocation();
    const secondLocation = Location.pathname.split('/')[2]
    const DATA = data[secondLocation];
    const [isPageNation,setIsPageNation] = useState(1)
    const pageNation =  [1,2,3,4,5];
    
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


    return (
        <>
        {secondLocation === 'cheeringGrounds' ? 
        <ul className="boardList">
            {<li><span>NO</span><span>구분</span><p>제목</p><span>작성자</span><span>작성일</span><span>조회수</span></li>}
            <ol>
                {DATA.map((el,index) => <li key={index}><Link><span>{el.id}</span><span>{el.type}</span><p>{el.title}</p><span>{el.author}</span><span>{el.date}</span><span>{el.views}</span></Link></li>)}
            </ol>
        </ul>
            :
        <ul className="boardList">
            {<li><span>구분</span><p>제목</p><span>작성일</span><span>조회수</span></li>}
            <ol>
                {DATA.map((el,index) => <li key={index}><Link><span>{el.type}</span><p>{el.title}</p><span>{el.date}</span><span>{el.views}</span></Link></li>)}
            </ol>
        </ul>
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