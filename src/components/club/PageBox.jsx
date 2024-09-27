import { Link } from 'react-router-dom';
import Banner from '../Banner';
import data from '../../data.json'
import { useLocation } from 'react-router-dom';

const introductionTabs = data.introductionTabs;
const stadiumTabs = data.stadiumTabs;
// sub page > club Layout
export default function PageBox ({children,aniWidth}){

    const location = useLocation();
    const secondLocation = location.pathname.split('/')[2]; 
    
    let h2text = '';
    if(secondLocation === 'introduction'){
        h2text = false;
    }else if(secondLocation === 'stadium'){
        h2text = 'Inchoen Football Stadium'
    }

    return (
        <>
        <Banner aniWidth={aniWidth} />
        <div className="size1442">
            <h2>
                {h2text || (<>인천,<br />한계를 돌파하라!</>) }
                
            </h2>
            <div>
                <aside>
                    {secondLocation === 'introduction' ?
                     introductionTabs.map((el,index)=> <button key={index}><Link className={location.pathname === el.link ? 'active' : ''} to={el.link}>{el.text}</Link></button>) 
                     :
                     stadiumTabs.map((el,index) => <button key={index}><Link className={location.pathname === el.link ? 'active' : ''}  to={el.link}>{el.text}</Link></button>)}
                </aside>
                {children}
            </div>
        </div>
        </>
    )

}