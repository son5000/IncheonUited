import data from '../../../src/data.json'
import { Link } from 'react-router-dom';
// data.json > 'club' tap menu list,

const playerTabs = data.playerTabs;


export default function Banner ({onBannerTab,aniWidth}) {

    return (
        <div style={{'--ani--width': aniWidth }} className="banner player">  
        <ul className="size1442">
            {playerTabs.map((el,index) => <li className={onBannerTab === el.text ? "active" : ""} key={index}><Link to={el.link}>{el.text}</Link></li>)}
        </ul> 
    </div>
    )
}