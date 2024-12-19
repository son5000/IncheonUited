import { useEffect, useState } from "react";
import AdminPageBox from "../../components/admin/adminPageBox.jsx";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


export default function AdminMain() {
  const [usersData, setUserData] = useState(null);
  const [totalUsers, setTotalUsers] = useState(null);
  const [userId, setUserId] = useState('');
  const [isSearchedId, setIsSearchedId] = useState('');
  useEffect(() => {
    const getUsersData = async () => {
      try {
        const res = await fetch("http://localhost:5000/admin/userData");
        if (!res.ok) {
          throw new Error("데이터를 불러오는 데 실패했습니다.");
        }
        const data = await res.json();
        setTotalUsers(data.length);
        const favoritPlayer = data.map((el) => el.favoritPlayer);
        const selectedJob = data.map((el) => el.selectedJob);
        const singleOrMarried = data.map((el) => el.singleOrMarried);
        const advertisement = data.map((el) => el.advertisement);
        setUserData({ 
          favoritPlayer,
          selectedJob,
          singleOrMarried,
          advertisement,
        });

      } catch (error) {
        return alert(error);
      }
    };
    getUsersData();
  }, []);

  const handleSearchId = async(e) => {
    e.preventDefault();
    if (!userId) {
      return alert("User ID를 입력해주세요.");
    }
    try {
      const response = await fetch('http://localhost:5000/admin/userUnique', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify({ userId }), 
      });
      const data = await response.json();
      if (!response.ok) {
        return alert(data.message);
      }
      setIsSearchedId(data);
    } catch (error) {
      alert("서버 연결에 문제가 발생했습니다.");
    }
  }
  
  console.log(isSearchedId);
  return (
      <AdminPageBox>
        <section className="usersArea">
        <h2>회원관리</h2>
          <div>
            <p className="title">총 회원수 : <strong>{totalUsers && totalUsers}</strong></p>
            <div>
                <form onSubmit={(e) => handleSearchId(e)}>
                  <label htmlFor="userId">회원 ID 검색</label>
                  <input onChange={(e) => setUserId(e.target.value) } value={userId} id="userId" type="text" />
                  <button type="submit">검색하기</button>
                </form>
                <table>
                  <caption>조회된 데이터</caption>
                  <thead>
                    <tr>
                      <th>아이디</th>
                      {/* <th>비밀번호</th> */}
                      <th>연락처</th>
                      <th>주소지</th>
                      <th>선호하는 선수</th>
                      <th>직업</th>
                      <th>혼여여부</th>
                      <th>광고성 수신동의</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{isSearchedId.userId}</td>
                      {/* <td>{isSearchedId.userPw}</td> */}
                      <td>{isSearchedId.userPhoneNumber}</td>
                      <td>{isSearchedId.address}</td>
                      <td>{isSearchedId.favoritPlayer}</td>
                      <td>{isSearchedId.selectedJob}</td>
                      <td>{isSearchedId.singleOrMarried}</td>
                      <td>{isSearchedId.advertisement}</td>
                    </tr>
                  </tbody>
                </table>
            </div>
            {usersData && <ChartFavoritPlayer favoritPlayer={usersData.favoritPlayer} />}
            {usersData && <ChartSelectedJob selectedJob={usersData.selectedJob} />}
          </div>
        </section>
      </AdminPageBox>
  );
}



//  빈도수 계산
const dataReducer = (data) => {
  const reducerData = data.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
  return reducerData;
}
// 빈도수를 배열로 변환 (recharts에서 사용하려면 배열 형태여야 함)
const dataCustomeForChart = (data) => {
  const reducerData = dataReducer(data);
  const chartData = Object.keys(reducerData).map((key) => ({
    name : key,
    count : reducerData[key],
  }));
  return chartData
}


function ChartFavoritPlayer({ favoritPlayer }) {
  const data = dataCustomeForChart(favoritPlayer);
  return (
    <ResponsiveContainer width="50%" maxHeight={500} >
      <p className="title">팬 별 선수 선호도 통계</p>
      <BarChart width={500}  
                height={500}  
                data={data}  
                margin={{  
                    top: 5,  
                    right: 30,  
                    left: 20,  
                    bottom: 50,
                  }}>
        <CartesianGrid   />
        <XAxis  label={{
                        value: '선수목록',        // 텍스트
                        position: 'left',        // 위치
                        dy: 20,
                        dx:50,                // 축과의 간격
                        style: {
                          fontSize: '16px',
                          fill:"#005ec8"
                        },
                  }} 
                dataKey="name" />
        <YAxis  label={{
          value : '득표수' ,
          angle: -90, 
          position:'insideLeft',
          dy:80,
          dx:20,
          style: {
                            sfontSize: '16px',
                            fill:"#005ec8"
                          }
                        }}
                        allowDecimals={false}
                        dataKey="count" />
        <Tooltip />
        <Legend  verticalAlign="bottom" align="center" layout="vertical" />
        <Bar barSize={"4%"} name="선수별 득표수" dataKey="count" fill="#005ec8" />
      </BarChart>
    </ResponsiveContainer>
  );
}

function ChartSelectedJob ({selectedJob}) {

    const data = dataCustomeForChart(selectedJob);

    return ( 
    <>
    </>
    )
  }