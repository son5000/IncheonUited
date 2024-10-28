import { useState,useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import QuickSns from "./components/QuickSns";
import { useLocation } from "react-router-dom";
export default function App () {

    const Location = useLocation();
    const firstLocation = Location.pathname.split('/')[1] || 'main';

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1120);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 1120)
    }

    useEffect(() => {
        window.addEventListener('resize',handleResize)
        handleResize()
        return () =>{
            window.removeEventListener('resize',handleResize)
        } 
    },[])

    return (
        <>
         <Header />
         { !isMobile && <QuickSns />}
         <div className={firstLocation+'Page'}>
         <Outlet />
         </div>
         <Footer />
        </>
    )
}