import {Link} from 'react-router-dom'

export default function Login () {
    return (  
            <section className="loginArea">
                <h2>LOGIN</h2>
                <p>인천유나이티드 홈페이지 방문을 환영합니다!</p>
                <form action="">
                    <label htmlFor="">아이디</label>
                    <input type="text" />
                    <label htmlFor="">비밀번호</label>
                    <input type="password" />
                    <button type="submit">로그인</button>
                </form>
                <p>
                    회원 가입하시면 다양한 부가서비스를 받으실 수 있습니다. <Link>회원가입</Link>
                </p>
                <p>
                    <Link>아이디찾기</Link>|
                    <Link>비밀번호 찾기</Link>
                </p>
            </section>
    )
}