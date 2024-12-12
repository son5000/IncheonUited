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
  Pie,
  PieChart,
  Cell
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
  
  
  return (
    <>
      <AdminPageBox>
        <div className="content">
          {usersData && <ChartFavoritPlayer favoritPlayer={usersData.favoritPlayer} />}
          {usersData && <ChartSingleOrMarried singleOrMarried={usersData.singleOrMarried} />}
          {usersData && <ChartSelectedJob selectedJob={usersData.selectedJob} />}
        </div>
      </AdminPageBox>
    </>
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
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        width={500}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}      
        >
        <CartesianGrid   />
        <XAxis  dataKey="name" />
        <YAxis  allowDecimals={false} dataKey="count" />
        <Tooltip />
        <Legend  verticalAlign="bottom" />
        <Bar barSize={"5%"} name="팬 별 가장 좋아하는 선수" dataKey="count" fill="#005ec8" />
      </BarChart>
    </ResponsiveContainer>
  );
}

function ChartSingleOrMarried({ singleOrMarried }) {

  const data = dataCustomeForChart(singleOrMarried);
  console.log(data);
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
  
  return (
    <ResponsiveContainer width="50%" height={300}>
      <PieChart width={400} height={400}>
      <Legend  verticalAlign="bottom" />
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          dataKey="count"
        >
            <Cell fill="#00C49F" />
            <Cell fill="#FF8042" />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

function ChartSelectedJob ({selectedJob}) {

    const data = dataCustomeForChart(selectedJob);

    return (
      <PieChart width={800} height={400} >
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="count"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} />
          ))}
        </Pie>
        <Pie
          data={data}
          cx={420}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`}/>
          ))}
        </Pie>
      </PieChart>
    );
  }