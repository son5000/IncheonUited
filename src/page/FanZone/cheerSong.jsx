import React, { useRef,useState} from 'react';
import Banner from "../../components/Banner"
import data from "../../data.json"

const cheerSongs = data.cheerSong;

export default function CheerSong(){

    const [isActive , setIsActive] = useState(Array(cheerSongs.length).fill(false));

    const [currentSong, setCurrentSong] = useState(null);

    const audioRef = useRef(null);

    function playMusic (mp3) {

        if (currentSong === mp3) {
            audioRef.current.pause();
            setCurrentSong(null);
          } else {
            audioRef.current.src = mp3;
            audioRef.current.play();
            setCurrentSong(mp3);}
    };

    function handleClick(index) {
        let temp = isActive.slice();
        
        if(temp[index]){
            temp[index] = false;
            audioRef.current.pause();
            return setIsActive(temp);
        }
        temp[index] = true;
        return setIsActive(temp);
    }

    return (
        <>
        <Banner aniWidth={"65%"} />
        <section className="cheearSongArea size1442">
            <h2 className="hiddenH2">응원가</h2>
            <div>{cheerSongs.map((el,index) => {
                return (
                    <details onClick={() => handleClick(index)} key={index}>
                    <summary className={isActive[index] ? "active" : ''}>{el.title}
                        <button className={currentSong === el.mp3 ? "playing" : ''} onClick={(e)=> {
                            e.stopPropagation();
                            playMusic(el.mp3)}}></button>
                        <audio ref={audioRef}></audio>
                    </summary>
                    <div onClick={(e) => e.stopPropagation()}>{!el.text ? "가사가 없습니다." : 
                        el.text.map((i,index)=> { return (i ? <p key={index}>{i}</p> : <br key={index} />)})}
                        <button>응원가 다운받기</button>
                    </div>
                    </details>)})}                
            </div>
        </section>
        </>
    )
}