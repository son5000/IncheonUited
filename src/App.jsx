import { useState, useEffect } from "react";
import { useLocation} from "react-router-dom";
import Header from "./components/Header";
import QuickSns from "./components/QuickSns";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ActionLoginLogout , ActionClear } from "./controllers/Redux/setting";

export default function App() {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const dispatch = useDispatch();  
  const { pathname } = useLocation();
  const firstLocation = pathname.split("/")[1] || "main";
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1120);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1120);
  };

  useEffect(() => {
      window.scrollTo(0, 0); 
  }, [firstLocation]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const getSession = async () => {
      try {
        const response = await fetch(`${backendUrl}/user/session`,{
          credentials: "include",
        });
        const data = await response.json();
        if(response.ok){
          dispatch(ActionLoginLogout(data.userId));
        }
      } catch (error) {
        dispatch(ActionClear());
      }
    }
    getSession();
  },[dispatch,backendUrl
    
  ])



  return (
    <>
      {firstLocation !== "admin" && <Header />}
      {!isMobile && firstLocation !== "admin" && <QuickSns />}
      <div className={`${firstLocation}Page`}>
        <Outlet />
      </div>
      {firstLocation !== "admin" && <Footer />}
    </>
  );
}
