import { useState } from "react"
import Banner from "../../components/Banner"


export default  function FrequentlyQandA (){

    const [isActive , setIsActive] = useState(Array(8).fill(false));
    
    function handleClick (index) {
        let temp = isActive.slice();
        console.log(temp);
        if(temp[index]){
            temp[index] = false;
            return setIsActive(temp);
        }
        temp[index] = true;
        return setIsActive (temp);
    } 

    return (
        <>
        <Banner aniWidth={"100%"} />
        <section className="frequentlyQandAArea size1080">
            <h2>FAQ</h2>
            <details>
                <summary onClick={() => handleClick(0)} className={isActive[0] ? "active" : ""}>입장권 온라인 구매(예매)는 언제까지 가능한가요?</summary>
                <div>
                    <p>입장권 온라인 예매는 경기 당일 후반전 15분까지 가능합니다. 단, 온라인 구매 취소는 경기 시작 2시간전까지 가능합니다.</p>
                </div>
            </details>
            <details>
                <summary onClick={() => handleClick(1)} className={isActive[1] ? "active" : ""}>입장권 온라인 구매(예매)는 어디에서 할 수 있나요?</summary>
                <div>
                    <p>
                    인천유나이티드 티켓 예매는 인천유나이티드 홈페이지나 티켓링크(프로스포츠 전용 티켓문의 : 1588-4567, 티켓 예매 전용 문의 : 1588-7890)에서 가능합니다. <br />예매 수수료는 1매당 1,000원씩 부과됩니다.
                    단, 취소수수료는 티켓링크 정책에 따라 온라인 구매 다음날(결제일 당일 제외)부터 발생됩니다.
                    </p>
                </div>
            </details>
            <details>
                <summary onClick={() => handleClick(2)} className={isActive[2] ? "active" : ""}>꼭 매표소에들렸다가 가야 하나요?</summary>
                <div>
                    <p>
                    아닙니다. 사전 입장권 예매 시에는 스마트티켓(티켓링크 어플 설치 필수)을 이용해서 매표소를 들를 필요가 없이 경기장 출입구에서 바로 입장이 가능합니다. <br /> 이 경우 대기시간 단축이 가능합니다.
                    </p>
                </div>
            </details>
            <details>
                <summary onClick={() => handleClick(3)} className={isActive[3] ? "active" : ""}>홈경기 당일 현장 메표소는 어떻게 운영되나요?</summary>
                <div>
                     <p>
                     현장 매표소는 경기 2시간 전부터 운영됩니다. 입장허용인원 제한으로 인해 한시적으로 제1매표소만 운영합니다. 
                     </p>
                </div>
            </details>
            <details>
                <summary onClick={() => handleClick(4)} className={isActive[4] ? "active" : ""}>경기장 출입구는 몇 시 부터 개방되나요?</summary>
                <div>
                    <p>
                    경기장 출입구는 경기 시작 2시간부터 개방됩니다.<br /> 경기장 입장은 입장권 또는 시즌권을 소지하고 계셔야만 가능하며, ‘스마트티켓’을 통해 빠른 입장도 가능합니다. 
                    </p>
                </div>
            </details>
            <details>
                <summary onClick={() => handleClick(5)} className={isActive[5] ? "active" : ""}>무료입장 대상자는 그냥 입장하면 되나요?</summary>
                <div>
                    <p>
                    아닙니다. 무료 입장 대상자(36개월 미만 유아)도 입장권을 소지한 경우에만 입장이 가능합니다. 매표소에 가셔서 36개월 미만 어린이는 의료보험증 등 <br /> 나이를 확인할 수 있는 서류 확인 후 티켓을 발권 받으신 다음에 입장 게이트를 통해 경기장으로 입장하시면 되겠습니다. 
                    </p>
                </div>
            </details>
            <details>
                <summary onClick={() => handleClick(6)} className={isActive[6] ? "active" : ""}>예매 확인 및 취소는 어디에서 할 수 있나요?</summary>
                <div>
                    <p>
                    티켓링크에서 구매하셨을 경우, 티켓링크 홈페이지 내 [예매확인/취소]에서 가능하시며
                    </p>
                    <p>
                    구단 홈페이지에서 구매하셨을 경우, [티켓/멤버십] - [티켓예매] - [마이페이지] (모바일-좌측상단 / 웹사이트- 우측상단)에서 가능합니다.
                    </p>
                    <br />
                    <p>
                    *예매 당일에 취소할 경우 예매수수료 부과되지 않음. 당일이 넘어가면 예매 금액의 10% 수수료 발생
                    </p>
                    <p>
                    *경기 시작 2시간 전까지만 취소가 가능합니다.
                    </p>
                </div>
            </details>
            <details>
                <summary onClick={() => handleClick(7)} className={isActive[7] ? "active" : ""}>반입이 금지되는 물품이 있나요?</summary>
                <div>
                    <p>한국프로축구연맹 안전가이드라인 13조 4항에 의거하여 해당 물품은 반입이 금지됩니다.</p>
                    <br />
                    <p>- 일체의 알코올류(공식판매업자가 장내에서 판매하는 경우만 허용)</p>
                    <p>- 유리병, 캔류, 600ml 초과 PET병</p>
                    <p>(단, 연맹 및 구단이 인정하는 개인음료 보관 용기는 반입 허용)</p>
                    <p>- 연맹 또는 상대팀을 비방하기 위한 공격적인 표현물</p>
                    <p>- 정치·종교·인종차별·허가받지 않은 선전물 등 개인이나 단체의 경기 외적인 주의·주장 및 이익을 위한 표현물</p>
                    <p>- 정상적인 경기관람에 방해를 주는 물품(대형풍선 등)</p>
                    <p>- 원활한 경기진행을 방해하는 물품</p>
                    <p>- 애완동물</p>
                    <p>- 상업적, 개인의 이익을 위한 목적의 전자기기</p>
                    <p>- 무기류, 화기류, 화약류, 인화성 물질</p>
                    <p>- 마약류, 생화학물질, 유독성 물질</p>
                    <p>- 파편이 생기거나 매우 단단한 물질</p>
                    <p>- 기타 안전에 지장을 초래할 것으로 판단하여 연맹과 구단이</p>
                </div>
            </details>
        </section>
        </>
    )
}