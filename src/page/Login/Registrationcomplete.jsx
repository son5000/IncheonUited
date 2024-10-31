import{Link} from "react-router-dom"


export default function RegistrationComplete () {

    return (
        <section className="registrationCompleteArea">
            <h2>회원가입 완료</h2>
            <p>
                정상적으로 회원가입이 완료 되었습니다.<br />
                로그인 후 이용하세요.
            </p>
            <div className="link_box">
                <Link to={"/"}>메인으로</Link>
                <Link to={"/login"}>로그인 하기</Link>
            </div>
        </section>
    )
}