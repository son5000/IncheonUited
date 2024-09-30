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
                     {tabs.map((el,index)=> <button key={index}>
                        {/* 상위 path값을 가진 첫번째 NavLink 요소가 toggle class 가 되지 않아  */}
                        {/* 정확한 className props isActive 객체를 넘겨주어 조건으로 pathName 과  el.link 값이 일치할때만*/}
                        {/* active 클래스가 들어가게 만들어 줬다. */}
                        <NavLink  className={({ isActive }) => ( el.link === location.pathname ? 'active' : '')} to={el.link}>{el.text}</NavLink>
                        </button>)}
                </aside>
                {children}
            </div>
        </div>
        </>
    )

}