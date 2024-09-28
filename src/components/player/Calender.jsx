import { useState } from "react";
import { format, addMonths, subMonths, getDaysInMonth, startOfMonth, addDays,subDays,endOfMonth } from 'date-fns';
import { ko } from 'date-fns/locale';


export default function Calendar () {
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

  const calendarTiles = [...preMonthDays,...currentMonthDays,...nextMonthDays];



  return (
    <>
    <div className="calendar">
      <div className="nav">
        <div>
            <span>경기일정</span>
            <span>오늘</span>
        </div>
        <p>
            <button onClick={handlePrevMonth}></button>
            <span>
              {/* foramt 을 사용해 현재날짜의 연도 값을 'yyyy'형태로 가져온다 */}
            {format(currentDate , 'yyyy')}
            </span>
            <span>
              {/*  format 을 사용해 현재날짜의 월 값을 'MM'형태로 가져온다. */}
            {format(currentDate ,'MM',{locale:ko})}
            </span>
            <button onClick={handleNextMonth}></button>
        </p>
      </div>
      <ul>
         {WEEKS.map((el,index) => <li key={index}>{el}</li> )}
      </ul>
      <ol>
        {calendarTiles.map((el,index)=> 
           <li className={format(el,'MM-dd') === format(today,'MM-dd') ? 'active' : '' } key={index}><span>{format(el,'d')}</span></li>
        )}
      </ol>
      <p>※ 훈련 일정 및 장소 등은 사전 공지 없이 변경될 수 있습니다..</p>
    </div>
    </>
  )
}


