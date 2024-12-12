import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ActionLoginLogout } from '../../controllers/Redux/setting';


export default function AdminLogin () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData ,setFormData ]  = useState({
        adminId : '',
        adminPw : ''
    })

    const handleChange = (e,field) => {
        setFormData({
            ...formData,
            [field] : e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(formData.adminId === ''){
            return alert('관리자 아이디를 입력해주세요.')
        }else if(formData.adminPw === ''){
            return alert('비밀번호를 입력해주세요.')
        }
        try{
            const res = await fetch("http://localhost:5000/admin/login",{
                method:'POST',
                headers:{
                    "Content-type" : "application/json",
                },
                body:JSON.stringify({...formData}),
                credentials:'include',
            })
            const data = await res.json();
            if(res.ok){
                dispatch(ActionLoginLogout(formData.adminId))
                alert('로그인되었습니다.')
                navigate('/admin/main',{replace:true});
            }else{
                return alert(data.message)
            }
        }catch(erorr){
            return alert(erorr)
        }
    }

    console.log(formData)


    return (  
            <section className="loginArea">
                <h2>관리자 로그인</h2>
                <form onSubmit={(e) => handleSubmit(e)} >
                    <label htmlFor="userId">아이디</label>
                    <input onChange={(e) => handleChange(e,'adminId')} value={formData.adminId} id='userId' type="text" />
                    <label htmlFor="userPassword">비밀번호</label>
                    <input onChange={(e) => handleChange(e,'adminPw')} value={formData.adminPw} id='userPassword' type="password" />
                    <button type="submit">로그인</button>
                </form>
            </section>
    )
}