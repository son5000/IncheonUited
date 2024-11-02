import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function ManagerLogin () {

    const [inputId,setInputId] = useState('')
    const [inputPassword,setInputPassword] = useState('')

    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputId && inputPassword){
            navigate('/managementTeam/main')
        }
    }


    return (  
            <section className="loginArea">
                <h2>관리자 로그인</h2>
                <form onSubmit={(e) => handleSubmit(e)} >
                    <label htmlFor="userId">아이디</label>
                    <input onChange={(e) => setInputId(e.target.value)} value={inputId} id='userId' type="text" />
                    <label htmlFor="userPassword">비밀번호</label>
                    <input onChange={(e) => setInputPassword(e.target.value)} value={inputPassword} id='userPassword' type="password" />
                    <button type="submit">로그인</button>
                </form>
            </section>
    )
}