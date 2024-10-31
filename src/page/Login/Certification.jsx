import {Link} from "react-router-dom"


export default function Certification () {


    return (
        <section className="certificationArea">
            <h2>회원가입</h2>
            <p>본인 확인 방법을 선택해주세요.</p>
            <div>
                <Link to={"MemberInformation"}>휴대폰 인증</Link>
                <Link to={"MemberInformation"}>아이핀 인증</Link>
            </div>
        </section>
    )
}