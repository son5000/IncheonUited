import data from '../data.json'
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Banner ({aniWidth}) {
    
    const location = useLocation();
    const firstLocation = location.pathname.split('/')[1];
    const categoris = data.bannerCategoris[firstLocation];
    

    return (
        <div style={{'--ani--width': aniWidth }} className="banner">  
            <ul className="size1442">
                {categoris.map((el,index) => <li key={index}><NavLink to={el.link}>{el.text}</NavLink></li>)}
            </ul> 
        </div>
    )
}