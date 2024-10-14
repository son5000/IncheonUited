import { useLocation } from "react-router-dom"




export default function SelectedBox ({props}){

    const Location = useLocation();
    const secondLocation = Location.pathname.split('/')[2]
    
    if(secondLocation === 'ranking'){
        return (
            <div className="selectedBox">
                <div>
                    <button onClick={()=> props.setSelectedGameType(true)} className={props.selectedGameType ? 'btn-checkBox active' : 'btn-checkBox'}></button>
                    <button onClick={()=> props.setSelectedGameType(false)} className={!props.selectedGameType ? 'btn-checkBox active' : 'btn-checkBox'}></button>
                </div>     
                <div>
                    <div>{props.selectedYear}
                        <span>
                            {props.YEARS.map((el,index)=> <button key={index} onClick={()=> props.setSelectedYear(el)}>{el}</button>)}                          
                        </span>
                    </div>
                </div>
                <small>
                    기준 : {props.TODAY} 
                </small>
            </div>
            
        )
    }

    return (
        <div className="selectedBox">
            <div>
                {props.CATEGORI.map((el,index)=> < button key={index} onClick={() => props.setSelectedGameType(el)} className={el === props.selectedGameType ? 'btn-checkBox active' : 'btn-checkBox'}>{index === 0 && 'ALL'}</button>)}
            </div>
            <div>
                 <div>
                     {props.selectedYear}
                     <span>
                         {props.YEARS.map((el) => <button onClick={()=> props.setSelectedYear(el)} key={el}>{`${el}년`}</button>)}
                     </span>
                 </div>
                 <div>
                     {props.selectedMonth}
                     <span>
                         {props.selectedMonth !== '전체' && <button onClick={()=> props.setSlectedMonth('전체')}>전체</button>}
                         {props.MONTHS.map((el)=> <button onClick={()=> props.setSlectedMonth(el)} key={el}>{`${el}월`}</button>)}
                     </span>
                 </div>
            </div>
        </div>
    )
}