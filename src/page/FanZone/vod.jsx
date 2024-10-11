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
            <ul>
                {vedios.map((el,index)=> {
                    return (   
                    <li onClick={() => setActive(index)} key={index} className={index === active ? "active" : ""}>
                        <p>{el.title}</p>
                        <iframe src={el.src} title={el.title}></iframe>
                    </li>
                    )
                })}
            </ul>
        </section>
        </>
    )
}