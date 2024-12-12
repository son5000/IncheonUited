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
  Rectangle,
  ResponsiveContainer,
} from "recharts";

export default function AdminMain() {
  const [usersData, setUserData] = useState(null);

  useEffect(() => {
    const getUsersData = async () => {
      try {
        const res = await fetch("http://localhost:5000/admin/userData");
        if (!res.ok) {
          throw new Error("데이터를 불러오는 데 실패했습니다.");
        }
        const data = await res.json();
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

  const dataKey = usersData ? Object.keys(usersData) : [];

  return (
    <>
      <AdminPageBox>
        <div className="content">
          <p>좋아하는 선수 통계</p>
          {usersData && <Chart data={usersData.favoritPlayer} />}
        </div>
      </AdminPageBox>
    </>
  );
}

function Chart({ data }) {
  // 좋아하는 선수의 빈도수 계산
  const frequencyFavoritPlayer = data.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  // 빈도수를 배열로 변환 (recharts에서 사용하려면 배열 형태여야 함)
  const chartData = Object.keys(frequencyFavoritPlayer).map((key) => ({
    name: key,
    count: frequencyFavoritPlayer[key],
  }));

  console.log(chartData)

  return (
    <ResponsiveContainer width={500} height={400}>
      <BarChart
        width={500}
        height={500}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid  />
        <XAxis dataKey="name" />
        <YAxis dataKey="count" />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}
