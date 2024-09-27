import React, { useState } from 'react';  // React와 useState 훅을 가져옵니다.
import Calendar from 'react-calendar';  // react-calendar 컴포넌트를 가져옵니다.
import 'react-calendar/dist/Calendar.css';  // 기본 제공되는 CSS 파일을 가져옵니다.
import { isSameDay } from 'date-fns';  // date-fns의 format과 isSameDay 함수를 가져옵니다.
import moment from "moment";

export default function Calendarkk ()  { 
    const schedules = [  // 예시 스케줄 데이터
        {
          id: 1,
          date: '2024-09-25',
          title: '프로젝트 회의',
        },
        {
          id: 2,
          date: '2024-09-25',
          title: '팀 점심 식사',
        },
        {
          id: 3,
          date: '2024-09-27',
          title: '데이터 분석 워크숍',
        },
        {
          id: 4,
          date: '2024-09-28',
          title: '친구와의 저녁 약속',
        },
        {
          id: 5,
          date: '2024-09-29',
          title: '운동하기',
        },
        {
          id: 6,
          date: '2024-10-01',
          title: '프로젝트 마감일',
        },
        {
          id: 7,
          date: '2024-10-05',
          title: '가족 모임',
        },
        {
          id: 8,
          date: '2024-10-10',
          title: '의사 예약',
        },
      ];

  const [selectedDate, setSelectedDate] = useState(new Date());  // 선택된 날짜를 상태로 관리합니다. 기본값은 오늘 날짜입니다.

  // 특정 날짜에 해당하는 스케줄 목록을 반환하는 함수
  const getSchedulesForDate = (date) => {
    return schedules.filter(schedule => isSameDay(new Date(schedule.date), date));
  };

  return (
    <div>
      <Calendar
        locale="en"
        className="custom-calendar"  // 커스텀 스타일을 적용하기 위한 클래스 이름을 추가합니다.
        value={selectedDate}  // 선택된 날짜를 달력에 표시합니다.
        prev2Label={null}
        next2Label={null}
        onChange={setSelectedDate}  // 달력에서 날짜가 선택되면 선택된 날짜를 업데이트합니다.
        navigationLabel={({ date }) => (
            <span onClick={(e) => e.stopPropagation()} style={{ cursor: 'default' }}>
              {moment(date).format("YYYY . MM")}
            </span>)}
        tileContent={({ date, view }) => view === 'month' && (  // 월별 보기일 때 각 날짜에 스케줄 유무를 표시합니다.
          <div className="schedule-content">
            {/* 해당 날짜의 스케줄을 가져옵니다. */}
            {getSchedulesForDate(date).length > 0 ? (
              <ul className="schedule-list">
                {/* 스케줄이 있을 경우 내용을 리스트 형식으로 출력 */}
                {getSchedulesForDate(date).map(schedule => (
                  <li key={schedule.id} className="schedule-item">
                    {schedule.title}
                  </li>
                ))}
              </ul>
            ) : (
              <span className="no-schedule">등록된 일정이 없습니다</span>  // 스케줄이 없을 경우 텍스트 출력
            )}
          </div>
        )}
      />
      <h3>※훈련 일정 및 장소 등은 사전 공지 없이 변경될 수 있습니다..</h3>
    </div>
  );
};
