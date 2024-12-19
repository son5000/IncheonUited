import { useEffect, useState } from "react";
import { ChartFavoritPlayer } from "../../components/admin/chart.jsx";
import AdminPageBox from "../../components/admin/adminPageBox.jsx";


export default function AdminPlayer() {
  const [data, setData] = useState(null);
  const [playerId, setPlayerId] = useState('');
  const [isSearchedId, setIsSearchedId] = useState('');
  const [temp , settemp] = useState([]);
  useEffect(() => {
    const getPlayersData = async () => {
      try {
        const res = await fetch("http://localhost:5000/admin/playerData");
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

  const handleChange = (e) => {
    setIsSearchedId(e.target.value);
    for(let i = 0 ; i <= e.target.value.length ; i ++ ){
        const temp = data.filter((player) => 
            player.name.split('').some(letter => letter === e.target.value )  )
        settemp(...temp);
    }
  }

  console.log(temp);
  console.log(isSearchedId);
  return (
      <AdminPageBox>
        <section className="usersArea">
        <h2>선수관리</h2>
          <div>
            <p className="title">총 선수 수 : <strong>{data && data.length}</strong></p>
            <div>
                <form>
                  <label htmlFor="searchPlayer">선수 검색</label>
                  <input onChange={(e) => handleChange(e)}  value={isSearchedId} id="searchPlayer" type="text" />
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
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
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
