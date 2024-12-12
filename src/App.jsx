import { useState, useEffect } from "react";
import { useLocation} from "react-router-dom";
import Header from "./components/Header";
import QuickSns from "./components/QuickSns";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function App() {
  
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
      {firstLocation !== "admin" && <Header />}
      {!isMobile && firstLocation !== "admin" && <QuickSns />}
      <div className={`${firstLocation}Page`}>
        <Outlet />
      </div>
      {firstLocation !== "admin" && <Footer />}
    </>
  );
}
