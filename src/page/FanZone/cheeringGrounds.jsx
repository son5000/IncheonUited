import Banner from "../../components/Banner"
import YearSearchBox from "../../components/fanZone/yearSearchBox"
import { useState } from "react"
import BoardList from "../../components/fanZone/postList";
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";


export default function CheeringGrounds(){

    const state = useSelector((state) => state.LoginLogout.userId);
    const navigate = useNavigate();
    const [selectedYear,setSelectedYear] = useState(2024)
    const handleClick = (index) =>  setSelectedYear(index);

    const handleWrite = () => {
        if(state){
            navigate('/')
        }else{
            return alert('로그인 후 이용하실 수 있습니다.')
        }
    }

    return (
        <>
        <Banner aniWidth={"70%"} />
        <section className="cheeringGroundsArea size1442">
            <h2 className="hiddenH2">응원마당</h2>
            <YearSearchBox handleClick={handleClick} SelectedYear={selectedYear} />
            <BoardList />
            <button onClick={handleWrite}>작성하기</button>
        </section>
        </>
    )
}