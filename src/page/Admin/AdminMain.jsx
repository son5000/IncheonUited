import { useEffect, useState } from "react";
import AdminPageBox from "../../components/admin/adminPageBox.jsx";
import { ChartSelectedJob } from "../../components/admin/chart.jsx";


export default function AdminMain() {
  const [usersData, setUserData] = useState(null);
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
        const selectedJob = data.map((el) => el.selectedJob);
        const singleOrMarried = data.map((el) => el.singleOrMarried);
        const advertisement = data.map((el) => el.advertisement);
        setUserData({ 
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

  
  return (
      <AdminPageBox>
        <section className="usersArea">
        <h2>회원관리</h2>
          <div>
            <p className="title">총 회원 수 : <strong>{usersData && usersData.selectedJob.length}</strong></p>
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
            {usersData && <ChartSelectedJob selectedJob={usersData.selectedJob} />}
          </div>
        </section>
      </AdminPageBox>
  );
}
