import {useLocation, NavLink } from 'react-router-dom';
import Banner from '../Banner';
import data from '../../data.json'

// sub page > club Layout

export default function PageBox ({children,aniWidth}){

    const location = useLocation();
    const secondLocation = location.pathname.split('/')[2] ; 
    const tabs = data[secondLocation];


    return (
        <>
        <Banner aniWidth={aniWidth} />
        <div className="size1442">
            <h2>
                {secondLocation === 'introduction' ? <>인천,<br />한계를 돌파하라!</> : 'Inchoen Football Stadium'}          
            </h2>
            <div>
                <aside>
                     {tabs.map((el,index)=> 
                        <button key={index}>
                            <NavLink  className={({ isActive }) => ( el.link === location.pathname ? 'active' : '')} to={el.link}>{el.text}</NavLink>
                        </button>)}
                </aside>
                {children}
            </div>
        </div>
        </>
    )

}