import { useState, useEffect } from "react";
import { useLocation} from "react-router-dom";
import Header from "./components/Header";
import QuickSns from "./components/QuickSns";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { checkToken } from "./controllers/setToken.jsx"
import { useDispatch } from "react-redux";

export default function App() {

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
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

    const verifyToken = async () => {
      await checkToken(dispatch, BACKEND_URL);
    };

    verifyToken(); 
    
  }, [dispatch, BACKEND_URL]);



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
