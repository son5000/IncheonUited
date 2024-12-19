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

export function ChartSelectedJob ({selectedJob}) {

    const data = dataCustomeForChart(selectedJob);

    return (
      <ResponsiveContainer width="100%" maxHeight={500} >
        <p className="title">유저 직업 분포</p>
        <BarChart 
                  data={data}  
                  margin={{  
                      top: 5,  
                      right: 30,  
                      left: 20,  
                      bottom: 50,
                    }}>
          <CartesianGrid   />
          <XAxis  label={{
                          value: '직업목록',        // 텍스트
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
            value : '직업군 별 유저 수' ,
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
          <Bar barSize={"4%"} name="직업 비중" dataKey="count" fill="#005ec8" />
        </BarChart>
      </ResponsiveContainer>
    );
  }

export function ChartFavoritPlayer({ favoritPlayer }) {

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
