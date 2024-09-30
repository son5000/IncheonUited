import { useState } from "react";
import { format, addMonths, subMonths, getDaysInMonth, startOfMonth, addDays,subDays,endOfMonth ,isSameDay} from 'date-fns';
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

<<<<<<< HEAD
  // 만약 이번달\ 1일의 시작요일이 '일요일' 아니라면 
  // 저번달의 데이터의 뒤에서부터 startDayOfWeek의 값만큼 가져와 새로 배열을 생성한다.
  // subDays() 함수에 이번달 시작날의 데이터에서 , startDayOfWeek - index 값만큼을
  // 순차적으로 계산해 가장 오래전 날짜부터 배열에 앞으로 넣는다.

  // 이부분에서 지속적인 오류를 맞이했는데 이유가 뭐였냐면
  // startDayOfWeek 7이라면 빈배열을 return 해야하는데 그렇지 못하는것이다.
  // 왜일까 계속 코드를 수정해봤는데 
  // format함수는 string 으로 값을 바꿔준다 . 그런데 내가 코드를
  // const preMonthDays = startDayOfWeek !== 7 이렇게 number 로 작성하고 비교하니
  // 계속 빈배열을 생성해주지 못하고 있던것이다..
=======
>>>>>>> 1e5ce30f8602761cadf10523afbb26b83c41f4b2
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
            {format(currentDate , 'yyyy')}
            </span>
            <span>
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
<<<<<<< HEAD
        // isSameDay 함수를 활용해 오늘날짜와 날짜값이 같은 타일에는 active class를 부여했다.
=======
>>>>>>> 1e5ce30f8602761cadf10523afbb26b83c41f4b2
           <li className={isSameDay(today,el) && 'active' } key={index}><span>{format(el,'d')}</span></li>
        )}
      </ol>
      <p>※ 훈련 일정 및 장소 등은 사전 공지 없이 변경될 수 있습니다..</p>
    </div>
    </>
  )
}


