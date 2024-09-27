import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import QuickSns from "./components/QuickSns";
import { useLocation } from "react-router-dom";
export default function App () {

    const Location = useLocation();
    const firstLocation = Location.pathname.split('/')[1];

    return (
        <>
         <Header />
         <QuickSns />
         <div className={firstLocation+'Page'}>
         <Outlet />
         </div>
         <Footer />
        </>
    )
}