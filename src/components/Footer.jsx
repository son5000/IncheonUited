import { Link } from "react-router-dom"
export default function Footer (){
    return (     
        <footer>
        <div className="footerNav">
           <div className="size1442">
            <h2>
              <img src="/images/main/Main_logo_header.png" alt="인천 유나이티드 로고" />
            </h2>
            <ul>
              <li>
                <Link href="###">
                  클럽
                </Link>
                  <ol>
                    <li><Link href="###">구단소개</Link></li>
                    <li><Link href="###">인사말</Link></li>
                    <li><Link href="###">경기장</Link></li>
                  </ol>
              </li>
              <li>
                <Link href="###">
                  플레이어
                </Link>
                  <ol>
                    <li><Link href="###">코칭/지원스태프</Link></li>
                    <li><Link href="###">프로</Link></li>
                    <li><Link href="###">선수단일정</Link></li>
                  </ol>
              </li>
              <li>
                <Link href="###">
                  매치센터
                </Link>
                  <ol>
                    <li><Link href="###">경기일정/결과</Link></li>
                    <li><Link href="###">순위표</Link></li>
                  </ol>
              </li>
              <li>
                <Link href="###">
                  팬존
                </Link>
                  <ol>
                      <li><Link href="###">공지사항</Link></li>
                      <li><Link href="###">구단뉴스</Link></li>
                      <li> 뉴스<Link href="###">UTD기자단 뉴스</Link></li>
                      <li><Link href="###">VOD</Link></li>
                      <li><Link href="###">갤러리</Link></li>
                      <li> 매거진<Link href="###">식 매거진</Link></li>
                      <li><Link href="###">홍보물</Link></li>
                      <li><Link href="###">응원가</Link></li>
                      <li><Link href="###">응원마당</Link></li>
                      <li> 답변<Link href="###">질문과 답변</Link></li>
                  </ol>
              </li>
              <li>
                <Link href="###">
                  티켓/멤버쉽
                </Link>
                  <ol>
                      <li><Link href="###">티켓 구매</Link></li>
                      <li><Link href="###">멤버십/시즌권/예매권북 구매</Link></li>
                      <li><Link href="###">FAQ</Link></li>
                  </ol>
              </li>
              <li>
                <Link href="###">블루마켓</Link>
              </li>
            </ul>
          </div>
         </div>
        <div className="size1442">
          <address>
            (주)인천유나이티드 I 대표이사 : 전달수 I 사업자번호 : 121-81-62544{" "}
            <button>사업자번호확인</button>
            <br />
            통신판매신고 인천미추홀구 529호 I 전화 : (032)880-5500 I 팩스 :
            (032)423-1509
            <br /> 메일 : incheonutd@incheonutd.com
            <br />
            주소 : 인천광역시 중구 참외전로 246(도원동) (우편번호 22328)
            <br />
            Copyright © INCHEON UNITED FC. all right reserved
          </address>
          <div>
            <p>INCHEON UNITED SOCIAL MEDIA</p>
            <ul>
              <li>
              <Link href="###">페이스북</Link>  
              </li>
              <li>
                <Link href="###">인스타그램</Link>
              </li>
              <li>
                <Link href="###">유튜브</Link>
              </li>
              <li>
                <Link href="###">카카오톡</Link>
              </li>
              <li>
                <Link href="###">아프리카티비</Link>
              </li>
            </ul>
          </div>
          <div>
            <Link href="###">개인정보처리방침</Link>
            <Link href="###">이용약관</Link>
          </div>
          </div>
        </footer>
    )
}