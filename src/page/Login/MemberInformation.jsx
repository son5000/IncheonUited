import { useState } from "react";
import { Link } from "react-router-dom"
import data from "../../data.json"
import DaumPostcode from "react-daum-postcode";
import Modal from "react-modal";



const jobList = data.userJobSelectList;
const playerList = [];

data.pro["players"].forEach((el) => {
    el.profile.forEach((i) => {
        playerList.push(i.name);
    })
});


export default function MemberInformation () {



    const [isValid, setIsValid] = useState(Array(6).fill(true));
    const [inputId , setInputId] = useState('');
    const [inputPw , setInputPw] = useState('');
    const [inputPwCheck , setInputPwCheck] = useState('');
    const [inputPhone , setInputPhone] = useState('');

    // 아이디 유효성 검사
    const regexId = /^[a-z0-9]{6,12}$/;
    function handleChangeId (e) {
    let validTemp = [...isValid];
    const idValue = e.target.value;
    setInputId(idValue);
    if(regexId.test(idValue)){
        validTemp[0] = true;
        setIsValid(validTemp);
    }else{
        validTemp[0] = false;
        setIsValid(validTemp);
    }
    }

     // 비밀번호 유효성 검사
    const regexPw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,12}$/;

    function handleChangePw (e) {
    const pwValue = e.target.value;
    setInputPw(pwValue);
    let validTemp = [...isValid];
    if(regexPw.test(pwValue)){
        validTemp[1] = true;
        setIsValid(validTemp);
    }else{
        validTemp[1] = false;
        setIsValid(validTemp);
    }
    }
    const handleBlurPw = () => {
           if(!isValid[1])alert(`비밀번호는 9~12자리 이내 [영문],[숫자],[특수문자]를 모두 포함하여야 합니다.`)
    }

    // 비밀번호 확인
    function handleChangePwCheck (e) {
        const pwCheckValue = e.target.value;
        setInputPwCheck(pwCheckValue);
        if(inputPw === pwCheckValue){
            let validTemp = [...isValid];
            validTemp[2] = true;
            setIsValid(validTemp);
        }else{
            let validTemp = [...isValid];
            validTemp[2] = false;
            setIsValid(validTemp);
        }
    }

    // 핸드폰 

    const formatPhoneValue = (value) => {
        const transfromValue = value.replace(/[^0-9]/g, "");
        if(transfromValue.length <= 3){
            return transfromValue;
        }else if(transfromValue <= 7 ){
            return `${transfromValue.slice(0,3)} - ${transfromValue.slice(3)}`
        }else {
             return `${transfromValue.slice(0,3)} - ${transfromValue.slice(3,7)} - ${transfromValue.slice(7,11)}`
        }
    }

    function handleChangePhone (e) {
        const phoneValue = e.target.value;
        setInputPhone(phoneValue);
    }

    function handleBlurPhone () {
        const formattedValue = formatPhoneValue(inputPhone);
        setInputPhone(formattedValue);
    }

    // 주소
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
    const [address, setAddress] = useState(""); // 선택된 주소

     const openModal = () => {
       setIsModalOpen(true);
     };
    
    
    
    function handleActive (index) {
        let temp = [...isActive];
        temp[index] = !temp[index]
        return setIsActive(temp);
    }
    
    const [isActive,setIsActive] = useState(Array(4).fill(null));
    const [isLikePlayer,setIsLikePlayer] = useState('좋아하는 선수를 선택하세요.');
    const [isSelectedJob,setIsSelectedJob] = useState('직업을 선택하세요.');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <section className="memberInformationArea">
            <h2>회원 정보 입력</h2>
            <p>입력 항목을 정확히 기입해 주세요</p>
            <form onSubmit={handleSubmit} action="">
            <label htmlFor="userId">아이디</label>
            <div className="input_box">
                <input onChange={(e) => handleChangeId(e)}  className={isValid[0] ? "" : "active"} value={inputId}  id="userId" type="text" placeholder="6~ 12자 이내 영문 소문자, 숫자 조합"/>
                <button style={{cursor : isValid && inputId !== '' ? "pointer" : ""}} disabled={!isValid}>중복확인</button>
                {!isValid[0] && <strong>*유효하지 않은 값입니다. 6~ 12자 이내 영문 소문자, 숫자 조합</strong>}
            </div>
            <label htmlFor="userPassword">비밀번호</label>
            <input onBlur={handleBlurPw} onChange={(e) => handleChangePw(e)} value={inputPw} id="userPassword" type="password" placeholder="비밀번호는 9~12자리 이내 [영문],[숫자],[특수문자]를 모두 포함하여야 합니다."/>
            <small>※허용 특수문자는 !@#$%^*+=- 내에서 사용 가능합니다.</small>
            <label htmlFor="userPasswordCheck">비밀번호 확인</label>
            <input onChange={(e) => handleChangePwCheck(e)} value={inputPwCheck} id="userPasswordCheck" type="password" placeholder="비밀번호를 재 입력하세요." />
            <label htmlFor="userTel">휴대폰 번호</label>
            <input onBlur={handleBlurPhone} onChange={(e) => handleChangePhone(e)} value={inputPhone} id="userTel" type="text" />
            <span>" - " 을 제외하고 입력해주세요.</span>
            <p>우편번호 <mark>(필수)</mark></p>
            <div className="input_box">
                <p>{address === "" ? "우편번호를 검색하세요." : address}</p>
                <button onClick={openModal}>우편번호 검색</button>
                <AdressModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setAddress={setAddress} />
            </div>
            <small>
                ※우편번호 검색은 지역 구분용으로 주소 외 우편번호만 저장됩니다.
            </small>
            <p>좋아하는 선수 <mark>(필수)</mark></p>
            <div className="selectBox">
                <p onClick={() => handleActive(0)} className={isActive[0] ? "active" : ""}>
                    {isLikePlayer}
                </p>
                    <ul className={isActive[0] ? "active scroll_layout" : "scroll_layout"}>
                        {playerList.map((el,index) => <li onClick={() => {setIsLikePlayer(el)
                         handleActive(0)
                        }
                        } key={index}>{el}</li> )}
                    </ul>
            </div>
            <small>
                ※좋아하는 선수를 입력하시면 해당 선수와 관련된 이벤트, 쿠폰을 제공합니다.
            </small>
            <p>직업 <mark>(선택)</mark></p>
            <div className="selectBox">
                <p onClick={() => handleActive(1)} className={isActive[1] ? "active" : ""}>
                    {isSelectedJob}
                </p>
                    <ul className={isActive[1] ? "active scroll_layout" : "scroll_layout"}>
                        {jobList.map((el,index) => <li key={index} onClick={() => {setIsSelectedJob(el)
                            handleActive(1)
                        }}>{el}</li>)}
                    </ul>
            </div>
            <small>
                ※직업을 선택하시면 직업군별 할인, 타겟팅 이벤트에 참여하실 수 있습니다.<br />
                (예시) 보건 및 의료종사자인 경우 "코로나19로 고생하신 의료종사자에게 입장권을 제공합니다" 등의<br />
                이벤트를 제공합니다.<br />
            </small>
            <p>결혼 여부 <mark>(선택)</mark></p>
            <div className="check_box">
                <button onClick={() => handleActive(2)} className={!isActive[2] ? "active" : ""}>미혼</button>
                 <span>미혼</span>
                <button  onClick={() => handleActive(2)} className={isActive[2] ? "active" : ""} >기혼</button>
                <span>기혼</span>
            </div>
            <small>
                ※결혼 여부를 선택해주시면 여부에 따라 할인, 이벤트에 참여하실 수 있습니다.<br />
                (예시1) 기혼 - 가족의 달을 기념하여 할인 쿠폰을 제공합니다.<br />
                (예시2) 미혼 - 부모님과 함께 스카이라운지 할인 쿠폰을 제공합니다.<br />
            </small>
            <p>광고성 정보 수신동의 <mark>(선택)</mark></p>
            <div className="check_box">
                <button onClick={() => handleActive(3)} className={!isActive[3] ? "active" : ""}>동의</button>
                <span>동의</span>
                <button onClick={() => handleActive(3)} className={isActive[3] ? "active" : ""} >비동의</button>
                <span>비동의</span>
            </div>
            <small>
            ※광고성 정보 수신 동의를 하지 않으실 경우 경기정보, 시즌권 혜택, 이벤트 당첨 여부, 할인 쿠폰,<br />
            이벤트 참여 등의 메시지 수신이 불가능합니다.
            </small>
            <p className="scroll_layout">
            <br />
            회사는 다음과 같이 광고성 정보 발신을 위하여 귀하의 개인정보를 수집 및 이용 합니다.<br />
            <br />
            1. 개인정보의 수집 및 이용 목적<br />
            - 구단 소식 및 경기 정보 안내, 이벤트, 홍보, 프로모션 정보 등 전자적 전송매체를 이용한<br />
            광고성 정보 전송<br />
            <br />
            2. 수집하는 개인정보의 항목<br />
            - 아이디, 회원성명, 휴대전화번호<br />
            <br />
            3. 개인정보의 보유 및 이용기간<br />
            - 회원정보 내 수신 거부 혹은 회원 탈퇴시까지<br />
            <br />
            4. 동의를 거부할 권리 및 동의 거부시 불이익 사항<br />
            귀하는 본 광고성 메시지 수신에 개인정보 수집에 대한 동의를 거부할 권리가 있으며,<br />
            동의를 거부하더라도 별도의 불이익 사항은 없습니다.<br />
            <br />
            회사는 다음과 같이 광고성 정보 발신을 위하여 귀하의 개인정보를 수집 및 이용 합니다.<br />
            <br />
            1. 개인정보의 수집 및 이용 목적<br />
            - 구단 소식 및 경기 정보 안내, 이벤트, 홍보, 프로모션 정보 등 전자적 전송매체를 이용한<br />
            광고성 정보 전송<br />
            <br />
            2. 수집하는 개인정보의 항목<br />
            - 아이디, 회원성명, 휴대전화번호<br />
            <br />
            3. 개인정보의 보유 및 이용기간<br />
            - 회원정보 내 수신 거부 혹은 회원 탈퇴시까지<br />
            <br />
            4. 동의를 거부할 권리 및 동의 거부시 불이익 사항<br />
            귀하는 본 광고성 메시지 수신에 개인정보 수집에 대한 동의를 거부할 권리가 있으며,<br />
            동의를 거부하더라도 별도의 불이익 사항은 없습니다.<br />
            </p>
            <div className="link_box">
                <Link>재입력</Link>
                <Link to={"RegistrationComplete"}>가입하기</Link>
            </div>
            </form>
        </section>
    )
}

Modal.setAppElement("#root");

function AdressModal ({isModalOpen,setIsModalOpen,setAddress}) {

        const handleComplete = (data) => {
        const fullAddress = data.address; // 도로명 주소
        const extraAddress = data.bname || data.buildingName ? ` (${data.bname || data.buildingName})` : ""; // 추가 주소 정보
        setAddress(fullAddress + extraAddress);
        closeModal(); // 모달 닫기
      };
      // 모달 닫기
      const closeModal = () => {
        setIsModalOpen(false);
      };
    return (
        <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="주소 검색"
        style={{
          overlay: { backgroundColor: "rgba(0, 0, 0, 0.80)", zIndex:"9999" , marginTop:"100px" , },
          content: { width: "400px", margin: "auto", paddingInline: "10px" , maxHeight : "500px"},
        }}
        >
            <DaumPostcode onComplete={handleComplete} />
        </Modal>
    )
}