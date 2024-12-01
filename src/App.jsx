import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useLocation} from "react-router-dom";
import { ActionLogin } from "./Redux/setting"; // ActionLogin import
import Header from "./components/Header";
import QuickSns from "./components/QuickSns";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function App() {

  const dispatch = useDispatch();

  // 세션 확인을 위한 useEffect
  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch("http://localhost:5000/user/session", {
          method: "GET",
          credentials: "include", // 쿠키 포함
        });

        if (response.ok) {
          const data = await response.json();
          dispatch(ActionLogin(data.userId)); // 세션에 로그인 정보가 있으면 Redux 상태 업데이트
        }
      } catch (error) {
        console.error("세션 확인 중 오류 발생:", error);
      }
    };
    checkSession();
    
  }, [dispatch]);

  const Location = useLocation();
  const firstLocation = Location.pathname.split("/")[1] || "main";
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1120);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1120);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>
      {firstLocation !== "managementTeam" && <Header />}
      {!isMobile && firstLocation !== "managementTeam" && <QuickSns />}
      <div className={`${firstLocation}Page`}>
        <Outlet />
      </div>
      {firstLocation !== "managementTeam" && <Footer />}
    </>
  );
}
