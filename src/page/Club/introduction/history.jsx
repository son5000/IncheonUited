import PageBox from "../../../components/club/PageBox"
import data from "../../../data.json" 

const history = data.history;
const text = history.map((el)=> el.text);


export default function History () {

    return(
      <PageBox aniWidth={'25%'} >
        <section className="historyArea">
            <h2><span>2003'</span> 창단</h2>
            <img src="/images/club/histroy01.png" alt="인천유나이티드 관중석 사진" />
            <ol>
              {history.map((el,index) => 
              <li key={index}>
                <span>{el.year}</span>
                <ul>
                  <strong>{el.title}</strong>
                  {text[index].map((el,index)=>
                  <li key={index}>{el}</li>
                  )}
                </ul>  
              </li>
              )}
            </ol>
        </section>
      </PageBox>
    )
};