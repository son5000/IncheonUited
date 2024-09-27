import { useState } from "react";
import Banner from "../../components/Banner";
import data from "../../data.json"

const playersData = data.pro["players"];


export default function Pro () {

    const [isCategori,setIsCategori] = useState('전체');
    const newFeed = isCategori === '전체' ? playersData : playersData.filter((el) => el.categori === isCategori);

    return(
        <>
          <Banner aniWidth={'50%'}/>
          <section className="size1442 proArea">
            <h2>프로 선수들 프로필</h2>
            <div>
                <button onClick={() => setIsCategori('전체')} className={isCategori === '전체' ? 'active' : ''}>전체</button>
                {playersData.map((el,index) => <button className={isCategori === el.categori ? 'active' : ''} onClick={() => setIsCategori(el.categori)} key={index}>{el.categori}</button>)}
            </div>
            <ul>
                {newFeed.map((el,index) => 
                <li key={index}>
                    <p>{el.title}</p>
                    {el.categori === '군입대'|| el.categori === '임대'|| el.categori ==='우선지명' ? 
                    <ul>
                        {el.profile.map((i,index) => 
                        <li key={i.id || index}>
                            <span>
                             <img src={i.image} alt={i.name} />
                            </span>
                            <p>{i.name}<span>{i.positionAndAffiliation}</span></p>
                        </li>
                        )}
                    </ul>
                    :
                    <ul>
                        {el.profile.map((i,index)=>
                        <li key={i.id || index}>
                            <img src={i.image} alt={i.name}/>
                            <div>
                                <span>{i.id}</span>
                                <p><span>{i.name}</span><br />
                                   {i.englishName}
                                </p>
                            </div>
                            <button>프로필</button>
                        </li>
                        )}
                    </ul>
                    }
                </li>
                )}
            </ul>

          </section>
        </>

    )
}