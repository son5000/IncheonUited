import PageBox from "../../../components/club/PageBox"
import data from "../../../data.json" 
// data > history 
// history.text > text
const history = data.history;
const text = history.map((el)=> el.text);

// 년도 옆에 나오는 세로줄을 화면을 줄였을때에도 비율에 맞게 같이 간격조절이 됐으면 하는데 안된다..

export default function History () {

    return(
      <PageBox aniWidth={'25%'} >
        <section className="historyArea">
            <h3><span>2003'</span> 창단</h3>
            <img src="/images/club/histroy01.png" alt="인천유나이티드 관중석 사진" />
            <ol>
              {history.map((el,index) => 
              <li key={index}>
                <span>{el.year}</span>
                <p>
                  <strong>{el.title}</strong>
                  {text[index].map((el,index)=>
                  <span key={index}>{el}</span>
                  )}
                </p>  
              </li>
              )}
            </ol>
        </section>
      </PageBox>
    )
};