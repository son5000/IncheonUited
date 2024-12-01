import Banner from "../../components/Banner"
import YearSearchBox from "../../components/fanZone/yearSearchBox"
import { useEffect, useState } from "react";
import BoardList from "../../components/fanZone/boardList";
import { useNavigate } from "react-router-dom";



export default function Announcement(){

    const navigate = useNavigate();
    const [selectedYear,setSelectedYear] = useState(2024)
    const handleClick = (index) =>  setSelectedYear(index);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch('http://localhost:5000/post?type=notice&offset=0&count=1');
            if (!res.ok) {
              throw new Error('서버로부터 데이터를 불러오는데 실패했습니다.');
            }
            const data = await res.json();
            console.log(data);
          } catch (error) {
            alert(error.message);  // 오류 메시지 출력
            navigate('/');  // 오류 발생 시, 다른 페이지로 이동
          }
        };
    
        fetchData();
      }, [navigate]);  // 의존성 배열에 navigate 추가

 

    return (
        <>
        <Banner />
        <section className="announcementArea size1442">
            <h2 className="hiddenH2">공지사항</h2>
            <YearSearchBox handleClick={handleClick} SelectedYear={selectedYear}/>
            <BoardList />
        </section>
        </>
    )
}