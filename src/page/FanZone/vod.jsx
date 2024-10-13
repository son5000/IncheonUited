import { useState } from "react"
import Banner from "../../components/Banner"
import data from "../../data.json"

export default function Vod(){

    const [active , setActive] = useState(0);
    const vedios = data.youTubeVideos;
    
    return (
        <>
        <Banner aniWidth={"30%"} />
        <section className="size1442 vodArea">
            <h2 className="hiddenH2">유튜브동영상리스트</h2>
            <ul>
                {vedios.map((el,index)=> {
                    return (   
                    <li onClick={() => setActive(index)} key={index} className={index === active ? "active" : ""}>
                        <p>{el.title}</p>
                        {index === active && <iframe src={el.src} title={el.title}></iframe>}
                    </li>
                    )
                })}
            </ul>

            <a target="_blank" rel="noreferrer noopener" href="https://www.youtube.com/channel/UCGA9gUrYCb4hRk_wHBzB_nQ">더보기</a>
        </section>
        </>
    )
}