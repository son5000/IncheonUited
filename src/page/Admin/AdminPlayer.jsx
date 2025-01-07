import { useEffect, useState } from "react";
import { ChartFavoritPlayer } from "../../components/admin/chart.jsx";
import AdminPageBox from "../../components/admin/adminPageBox.jsx";
const backendUrl = process.env.REACT_APP_BACKEND_URL;

export default function AdminPlayer() {
  const [data, setData] = useState(null);
  const [name, setName] = useState('');
  const [isSearchedId, setIsSearchedId] = useState('');

  useEffect(() => {
    const getPlayersData = async () => {
      try {
        const res = await fetch(`${backendUrl}/admin/playerData`);
        if (!res.ok) {
          throw new Error("데이터를 불러오는 데 실패했습니다.");
        }
        const data = await res.json();
        setData(data);

      } catch (error) {
        return alert(error);
      }
    };
    getPlayersData();
  }, []);


  const handleSearchPlayer = async(e) => {
    e.preventDefault();
    if (!name) {
      return alert("name 를 입력해주세요.");
    }
    try {
      const response = await fetch('http://localhost:5000/admin/playerUnique', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify({ name }), 
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

  // const handleChange = (e) => {
  //   return setName(e.target.value);
  // }
  console.log(isSearchedId);

  return (
      <AdminPageBox>
        <section className="usersArea">
        <h2>선수관리</h2>
          <div>
            <p className="title">총 선수 수 : <strong>{data && data.length}</strong></p>
            <div>
                <form onSubmit={(e) => handleSearchPlayer(e)}>
                  <label htmlFor="searchPlayer">선수 검색</label>
                  <input onChange={(e) => setName(e.target.value)}  value={name} id="searchPlayer" type="text" />
                  <button type="submit">검색하기</button>
                </form>
                <table>
                  <caption>조회된 데이터</caption>
                  <thead>
                    <tr>
                      <th>이름</th>
                      {/* <th>비밀번호</th> */}
                      <th>영어 이름</th>
                      <th>현 소속</th>
                      <th>번호</th>
                      <th>포지션</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{isSearchedId.name}</td>
                      <td>{isSearchedId?.englishName}</td>
                      <td>{isSearchedId?.type}</td>
                      <td>{isSearchedId?.backNumber}</td>
                      <td>{isSearchedId?.position}</td>
                    </tr>
                  </tbody>
                </table>
            </div>
            {data && <ChartFavoritPlayer favoritPlayer={data} />}
          </div>
        </section>
      </AdminPageBox>
  );
}
