import { useState ,useEffect } from "react";
import { format, addMonths, subMonths, getDaysInMonth, startOfMonth, addDays,subDays,endOfMonth ,isSameDay} from 'date-fns';
import { ko } from 'date-fns/locale';


export default function Calendar () {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  const handleResize = () => {
      setIsMobile(window.innerWidth <= 640)
  }

  useEffect(() => {
      window.addEventListener('resize',handleResize)
      handleResize()
      return () =>{
          window.removeEventListener('resize',handleResize)
      } 
  },[])
  const WEEKS = ['SUN','MON','TUE','WED','THU','FRI','SAT'];

  const today = new Date(); 

  const [currentDate , setCurrentDate] = useState(today);

  const handlePrevMonth = () => {
    if(currentDate.getMonth() === 0){
      return
    }
    setCurrentDate(subMonths(currentDate,1));
  }
  
  const handleNextMonth = () => {
    if(currentDate.getMonth() === 11){
      return
    }
    setCurrentDate(addMonths(currentDate,1));
  }

  const startDate = startOfMonth(currentDate);

  const startDayOfWeek = format(startDate, 'i');

  const daysInMonth = getDaysInMonth(currentDate);

  const preMonthDays = startDayOfWeek !== '7' ? [...Array(startDayOfWeek)].map((_,index)=> {
    return subDays(startDate,startDayOfWeek - index);
  }) : [];
  
  const currentMonthDays = [...Array(daysInMonth)].map((_,index) => {
    return addDays(startDate,index);
  })

  const remainingDays = 35 - (preMonthDays.length + currentMonthDays.length);
  const nextMonthDays = [...Array(remainingDays)].map((_,index) => {
    return addDays(endOfMonth(currentDate), index + 1) 
  })


  let calendarTiles = null;

  if(isMobile){
     calendarTiles = [...currentMonthDays];  
  } else{
     calendarTiles = [...preMonthDays,...currentMonthDays,...nextMonthDays];
  }



  return (
    <>
    <div className="calendar">
      <div className="navigator">
        <div>
            <span>경기일정</span>
            <span>오늘</span>
        </div>
        <p>
            <button onClick={handlePrevMonth}></button>
            <span>
            {format(currentDate , 'yyyy')}
            </span>
            <span>
            {format(currentDate ,'MM',{locale:ko})}
            </span>
            <button onClick={handleNextMonth}></button>
        </p>
      </div>
      { !isMobile &&
        <ul>
         {WEEKS.map((el,index) => <li key={index}>{el}</li> )}
        </ul>
      }
      <ol>
        {calendarTiles.map((el,index)=> 
           <li className={isSameDay(today,el) && 'active' } key={index}><span>{!isMobile ? format(el,'d') : (`${format(el,'yyyy-MM-dd')} (${format(el, 'EE', { locale: ko })})`)}</span></li>
        )}
      </ol>
      <p>※ 훈련 일정 및 장소 등은 사전 공지 없이 변경될 수 있습니다..</p>
    </div>
    </>
  )
}


