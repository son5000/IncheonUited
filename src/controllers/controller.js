

export const USERDATA = {
    userId: '',
    userPw: '',
    userPwCheck: '',
    userPhoneNumber: '',
    address: '',
    favoritPlayer: '',
    selectedJob: '',
    singleOrMarried:'single',
    advertisement:'agreement',
    duplicateCheck: false
  };

export const VALIDARRAY = ['-',false,false,false,false,false,false];

//   유효성 검사

export const validators = {
      userId : (value) => /^[a-z0-9]{6,12}$/.test(value),
      userPw : (value) => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,12}$/.test(value),
      userPwCheck : (value , formData) => value === formData.userPw,
      userPhoneNumber : (value) => value.length === 13 ? true : false,
      address : (value) => value !== '' ? true : false,
      favoritPlayer : (value) => value !== '' ? true : false,
  }
 
export const handleBlurPw = (isValid) => {
    if(!isValid[1])alert(`비밀번호는 9~12자리 이내 [영문],[숫자],[특수문자]를 모두 포함하여야 합니다.`)
}

// 핸드폰 번호
    // 텍스트에 '-' 추가 함수
export const formatPhoneValue = (value) => {
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

export const handleBlurPhone = (formData, setFormData) => {
    const formattedValue = formatPhoneValue(formData.userPhoneNumber);
    setFormData((formData) => ({
        ...formData,
        userPhoneNumber: formattedValue,
    }));
};

//   유저 데이터 반영,

export const handleChange = (field, value, formData, isValid, setFormData, setIsValid) => {
    // 상태 업데이트를 한번에 할 수 있도록 설정
    setFormData((formData) => {
        const newFormData = { ...formData, [field]: value };  // 새로운 값으로 갱신
        const validTemp = [...isValid];  // 유효성 검사 배열 업데이트
        
        if (field !== 'singleOrMarried' && field !== 'advertisement' && field !== 'selectedJob') {
            if (field === 'userPwCheck') {
                validTemp[Object.keys(validators).indexOf(field)] = validators[field](value, newFormData);
            } else {
                validTemp[Object.keys(validators).indexOf(field)] = validators[field](value);
            }
            setIsValid(validTemp);  // 유효성 검사 업데이트
        }
        return newFormData;  // 새로 갱신된 폼 데이터 반환
    });
};

// userID 중복확인 API 유효성 검사 통과 안됐을시 return (올바른 값일때만 API 호출)
export const handleDuplicateCheck = async (isValid, formData, setFormData, setIsValid) => {
    if (isValid[0] && isValid[0] !== '-') {
        try {
            const res = await fetch(`http://localhost:5000/user/duplicatecheck?userId=${encodeURIComponent(formData.userId)}`);
            if (!res.ok) throw new Error('서버와의 통신 중 오류가 발생했습니다.');
            const data = await res.json();
            let validTemp = [...isValid];
            if (data.isAvailable) {
                validTemp[6] = true;
                setIsValid(validTemp);
                alert(data.message);
            } else {
                validTemp[0] = false;
                setIsValid(validTemp);
                alert(data.message);
            }
        } catch (error) {
            alert(error);
        }
    } else {
        return alert('올바른 값을 입력해주세요.');
    }
};
    

export const handleSubmit = async (e, formData, isValid, navigate) => {
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

