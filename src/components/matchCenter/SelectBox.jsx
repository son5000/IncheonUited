import { useLocation } from "react-router-dom"




export default function SelectBox ({props}){

    const Location = useLocation();
    const secondLocation = Location.pathname.split('/')[2]
    
    if(secondLocation === 'ranking'){
        return 
    }

    return (
        <div>
             <p>
                 {props.selectedYear}
                 <div>
                     {props.YEARS.map((el) => <button onClick={()=> props.setselectedYear(el)} key={el}>{`${el}년`}</button>)}
                 </div>
             </p>
             <p>
                 {props.selectedMonth}
                 <div>
                     {props.selectedMonth !== '전체' && <button onClick={()=> props.setSlectedMonth('전체')}>전체</button>}
                     {props.MONTHS.map((el)=> <button onClick={()=> props.setSlectedMonth(el)} key={el}>{`${el}월`}</button>)}
                 </div>
             </p>
        </div>
    )
}