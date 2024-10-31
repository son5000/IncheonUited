import { Link } from "react-router-dom"

export default function MemberInformation () {

    return (
        <section className="memberInformationArea">
            <h2>회원 정보 입력</h2>
            <p>입력 항목을 정확히 기입해 주세요</p>
            <form action="">
            <label htmlFor="userId">아이디</label>
            <div className="input_box">
                <input id="userId" type="text" placeholder="아이디를 입력하세요"/>
                <button>중복확인</button>
            </div>
            <label htmlFor="userPassword">비밀번호</label>
            <input type="password" placeholder="비밀번호는 9~12자리 이내 [영문],[숫자],[특수문자]를 모두 포함하여야 합니다."/>
            <small>※허용 특수문자는 !@#$%^*+=- 내에서 사용 가능합니다.</small>
            <label htmlFor="userPasswordCheck">비밀번호 확인</label>
            <input id="userPasswordCheck" type="password" placeholder="비밀번호를 재 입력하세요." />
            <label htmlFor="userTel">휴대폰 번호</label>
            <input id="userTel" type="tel" />
            <span>문자메시지 수신에 동의합니다.</span>
            <span>문자메시지 수신에 동의하지 않습니다.</span>
            <p>우편번호 <mark>(필수)</mark></p>
            <div className="input_box">
                <p>우편번호를 검색하세요.</p>
                <button>우편번호 검색</button>
            </div>
            <small>
                ※우편번호 검색은 지역 구분용으로 주소 외 우편번호만 저장됩니다.
            </small>
            <p>좋아하는 선수 <mark>(필수)</mark></p>
            <ul>
                <li>
                    좋아하는 선수를 선택하세요.
                    <ul></ul>
                </li>
            </ul>
            <small>
                ※좋아하는 선수를 입력하시면 해당 선수와 관련된 이벤트, 쿠폰을 제공합니다.
            </small>
            <p>직업 <mark>(선택)</mark></p>
            <ul>
                <li>
                    직업을 선택하세요.
                    <ul></ul>
                </li>
            </ul>
            <small>
                ※직업을 선택하시면 직업군별 할인, 타겟팅 이벤트에 참여하실 수 있습니다.<br />
                (예시) 보건 및 의료종사자인 경우 "코로나19로 고생하신 의료종사자에게 입장권을 제공합니다" 등의<br />
                이벤트를 제공합니다.<br />
            </small>
            <p>결혼 여부 <mark>(선택)</mark></p>
            <div className="check_box">
                <button>미혼</button>
                <button>기혼</button>
            </div>
            <small>
                ※결혼 여부를 선택해주시면 여부에 따라 할인, 이벤트에 참여하실 수 있습니다.<br />
                (예시1) 기혼 - 가족의 달을 기념하여 할인 쿠폰을 제공합니다.<br />
                (예시2) 미혼 - 부모님과 함께 스카이라운지 할인 쿠폰을 제공합니다.<br />
            </small>
            <p>광고성 정보 수신동의 <mark>(선택)</mark></p>
            <div className="check_box">
                <button>동의</button>
                <button>비동의</button>
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