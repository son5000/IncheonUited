import { useState } from "react";
import { Link , useNavigate } from "react-router-dom"
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
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      userId: '',
      userPw: '',
      userPwCheck: '',
      userPhoneNumber: '',
      address: '',
      favoritPlayer: '',
      selectedJob: '',
      singleOrMarried:'single',
      advertisement:'agreement'
    });

    console.log(formData)

    // 유효성 검사 배열 1-ID , 2-PW , 3-PWCHECK , 4-PHONE , 5-ADRESS , 6-FAVORITE PLAYER
    const [isValid, setIsValid] = useState(Array(6).fill('-'));
    const validators = {
        userId : (value) => /^[a-z0-9]{6,12}$/.test(value),
        userPw : (value) => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,12}$/.test(value),
        userPwCheck : (value) => value === formData.userPw,
        userPhoneNumber : (value) => value.length === 13 ? true : false,
        address : (value) => value !== '' ? true : false,
        favoritPlayer : (value) => value !== '' ? true : false,
    }
    
    const handleChange = (field, value) => {
        setFormData({
          ...formData,
          [field]: value,
        });
        if(field !== 'singleOrMarried' && field !== 'advertisement' && field !== 'selectedJob'){
        const validTemp = [...isValid];
        validTemp[Object.keys(validators).indexOf(field)] = validators[field](value);
        setIsValid(validTemp);
        }
      };
      
    const handleBlurPw = () => {
        if(!isValid[1])alert(`비밀번호는 9~12자리 이내 [영문],[숫자],[특수문자]를 모두 포함하여야 합니다.`)
    }
    
    // 핸드폰 
    // 텍스트에 '-' 추가 함수
    const formatPhoneValue = (value) => {
        const transfromValue = value.replace(/[^0-9]/g, "");
        if(transfromValue.length <= 3){
            return transfromValue;
        }else if(transfromValue <= 7 ){
            return `${transfromValue.slice(0,3)}-${transfromValue.slice(3)}`
        }else {
             return `${transfromValue.slice(0,3)}-${transfromValue.slice(3,7)}-${transfromValue.slice(7,11)}`
        }
    }
    // 핸드폰 인풋 포커스 아웃 상황일때 텍스트 변환.
    function handleBlurPhone () {
        const formattedValue = formatPhoneValue(formData.userPhoneNumber);
        handleChange('userPhoneNumber',formattedValue);        
    }

    // 주소
    // react-modal 라이브러리 함수
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
    const openModal = () => {
       setIsModalOpen(true);
     };    
    
    //  선수 ,직업 선택 css => active class 적용 함수
    const [isActive,setIsActive] = useState(Array(2).fill(null));
    function handleActive (index) {
        let temp = [...isActive];
        temp[index] = !temp[index];
        return setIsActive(temp);
    }

// userID 중복확인 API 유효성 검사 통과 안됐을시 return (올바른 값일때만 API 호출)
const handleDuplicateCheck = async () => {
    if(isValid[0]){
        try{
            const res = await fetch(
                `http://localhost:5000/user/duplicatecheck?userId=${encodeURIComponent(formData.userId)}`
              ); 
            if(!res.ok){
                throw new Error('서버와의 통신 중 오류가 발생했습니다.');
            }
            const data = await res.json(); 
            if(data.isAvailable){
                alert('사용 가능한 아이디입니다.');
            }else{
                alert('중복되는 아이디입니다. 다른 아이디를 입력하세요.');
                // input value 초기화 
                 handleChange('userId','');
            }
        }catch (error){
            alert(error);
        }
    }else{
        return alert('올바른 값을 입력해주세요.')
    }
}
    

    const handleSubmit = async (e) => {
        e.preventDefault(); // 기본 form 제출 동작 방지
        if(isValid.every((el) => el === true)){
            try {
                const res = await fetch('http://localhost:5000/user/signUp', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                    credentials: 'include', // 쿠키를 포함하여 요청을 보냄
              });     
              const data = await res.json();
              if (res.ok) {
                alert('회원가입 성공!');
                navigate('/login/joinUs/Certification/MemberInformation/Registrationcomplete')
              } else {
                  alert(data.error || '회원가입 실패');
                }
            } catch (error) {
                alert('회원가입 중 오류가 발생했습니다.');
            }
        }else{
            if(isValid[2] === false){
                alert('비밀번호가 일치하지 않습니다.')
            }
            alert('입력정보를 다시 확인해주세요!');
        }
      };


    return (
        <section className="memberInformationArea">
            <h2>회원 정보 입력</h2>
            <p>입력 항목을 정확히 기입해 주세요</p>
            <form onSubmit={handleSubmit} action="">
            <label htmlFor="userId">아이디</label>
            <div className="input_box">
                <input onChange={(e) => handleChange('userId',e.target.value)}  className={isValid[0] ? "" : "active"} value={formData.userId}  id="userId" type="text" placeholder="6~ 12자 이내 영문 소문자, 숫자 조합"/>
                <button onClick={handleDuplicateCheck} type="button" style={{cursor : isValid && formData.userId !== '' ? "pointer" : ""}} disabled={!isValid}>중복확인</button>
                {!isValid[0] && <strong>*유효하지 않은 값입니다. 6~ 12자 이내 영문 소문자, 숫자 조합</strong>}
            </div>
            <label htmlFor="userPassword">비밀번호</label>
            <input onBlur={handleBlurPw} onChange={(e) => handleChange('userPw',e.target.value)} value={formData.userPw} id="userPassword" type="password" placeholder="비밀번호는 9~12자리 이내 [영문],[숫자],[특수문자]를 모두 포함하여야 합니다."/>
            <small>※허용 특수문자는 !@#$%^*+=- 내에서 사용 가능합니다.</small>
            <label htmlFor="userPasswordCheck">비밀번호 확인</label>
            <input onChange={(e) => handleChange('userPwCheck',e.target.value)} value={formData.userPwCheck} id="userPasswordCheck" type="password" placeholder="비밀번호를 재 입력하세요." />
            <label htmlFor="userPhoneNumber">휴대폰 번호</label>
            <input onBlur={() => handleBlurPhone()} onChange={(e) => handleChange('userPhoneNumber',e.target.value)} value={formData.userPhoneNumber} id="userPhoneNumber" type="text" />
            <span>" - " 을 제외하고 입력해주세요.</span>
            <p>우편번호 <mark>(필수)</mark></p>
            <div className="input_box">
                <p>{formData.address === "" ? "우편번호를 검색하세요." : formData.address}</p>
                <button type="button"  onClick={openModal}>우편번호 검색</button>
                <AdressModal handleChange={handleChange} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} formData={formData} setFormData={setFormData} />
            </div>
            <small>
                ※우편번호 검색은 지역 구분용으로 주소 외 우편번호만 저장됩니다.
            </small>
            <p>좋아하는 선수 <mark>(필수)</mark></p>
            <div className="selectBox">
                <p onClick={() => handleActive(0)} className={isActive[0] ? "active" : ""}>
                    {formData.favoritPlayer === '' ? '좋아하는 선수를 선택하세요.' : formData.favoritPlayer}
                </p>
                    <ul className={isActive[0] ? "active scroll_layout" : "scroll_layout"}>
                        {playerList.map((el,index) => <li onClick={() => {handleChange('favoritPlayer',el)
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
                    {formData.selectedJob === '' ? '직업을 선택하세요.' : formData.selectedJob} 
                </p>
                    <ul className={isActive[1] ? "active scroll_layout" : "scroll_layout"}>
                        {jobList.map((el,index) => <li key={index} onClick={() => {setFormData({...formData,selectedJob:el})
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
                <label>
                    <input onChange={(e) => handleChange('singleOrMarried',e.target.value)} type="radio" value="single" name="singleOrMarried" checked={formData.singleOrMarried === 'single'} />
                    미혼
                </label>
                <label>
                    <input onChange={(e) => handleChange('singleOrMarried',e.target.value)} type="radio" value="married" name="singleOrMarried" checked={formData.singleOrMarried === 'married'} />
                    기혼
                </label>
            </div>
            <small>
                ※결혼 여부를 선택해주시면 여부에 따라 할인, 이벤트에 참여하실 수 있습니다.<br />
                (예시1) 기혼 - 가족의 달을 기념하여 할인 쿠폰을 제공합니다.<br />
                (예시2) 미혼 - 부모님과 함께 스카이라운지 할인 쿠폰을 제공합니다.<br />
            </small>
            <p>광고성 정보 수신동의 <mark>(선택)</mark></p>
            <div className="check_box">
                <label>
                    <input onChange={(e) => handleChange('advertisement',e.target.value)} type="radio" value="agreement" name="advertisement" checked={formData.advertisement === 'agreement'} />
                    동의
                </label>
                <label>
                    <input onChange={(e) => handleChange('advertisement',e.target.value)} type="radio" value="disagree" name="advertisement" checked={formData.advertisement === 'disagree'} />
                    비동의
                </label>
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
            <div className="submit_box">
                <Link>재입력</Link>
                <input type="submit" value='가입하기'/>
            </div>
            </form>
        </section>
    )
}

Modal.setAppElement("#root");

function AdressModal ({isModalOpen,setIsModalOpen,handleChange}) {
        const handleComplete = (data) => {
        const fullAddress = data.address; // 도로명 주소
        const extraAddress = data.bname || data.buildingName ? ` (${data.bname || data.buildingName})` : ""; // 추가 주소 정보
        handleChange('address',fullAddress + extraAddress);
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