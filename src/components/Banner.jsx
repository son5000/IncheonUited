import { useEffect , useState } from 'react';
import data from '../data.json'
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Banner ({aniWidth }) {
    
    const location = useLocation();
    const firstLocation = location.pathname.split('/')[1];
    let categoris  = '';

        categoris = data.bannerCategoris[firstLocation];
    
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

    if(isMobile){
        return ;
    }
    

    return (
        <div style={{'--ani--width': aniWidth }} className="banner">  
            <ul className="size1442">
                {categoris.map((el,index) => <li key={index}><NavLink to={el.link}>{el.text}</NavLink></li>)}
            </ul> 
        </div>    
    )

}