import { useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ActionLoginLogout } from '../../controllers/Redux/setting.jsx'

export default function Login () {

    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    const dispatch = useDispatch();
    const [userId,setUserId] = useState('')
    const [userPw,serUserPw] = useState('')
    const [error , setError] = useState('');

    const navigate = useNavigate();

    // 로그인 API 호출 함수.
    const handleLogin = async (e) => {
        e.preventDefault();
        if(userId === '' || userPw === ''){
            return (alert('아이디와 비밀번호를 입력해 주세요.'))
        }
        try{
            const response = await fetch(`${backendUrl}/user/login`, {
                method:'POST',
                headers:{
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify({userId , userPw}),
                credentials:'include',
            })
            const data = await response.json();
            if(response.ok){
                dispatch(ActionLoginLogout(userId));
                alert(`환영합니다, ${userId} 님 :)`);
                navigate('/');
            }else{
                setError(data.message) 
            }
        }catch(e){
            setError("서버 연결에 문제가 발생했습니다.");
        }
    }

    return (  
            <section className="loginArea">
                <h2>LOGIN</h2>
                <p>인천유나이티드 홈페이지 방문을 환영합니다!</p>
                <form onSubmit={(e) => handleLogin(e)}>
                    <label htmlFor="userId">아이디</label>
                    <input value={userId} onChange={(e) => setUserId(e.target.value)} id='userId' type="text" />
                    <label htmlFor="userPw">비밀번호</label>
                    <input value={userPw} onChange={(e) => serUserPw(e.target.value)} id='userPw' type="password" />
                    {error && <p>{error}</p>}
                    <button type="submit">로그인</button>
                </form>
                <p>
                    회원 가입하시면 다양한 부가서비스를 받으실 수 있습니다. <Link to={"joinUs"}>회원가입</Link>
                </p>
                <p>
                    <Link>아이디찾기</Link>|
                    <Link>비밀번호 찾기</Link>
                </p>
            </section>
    )
}