import {Link} from "react-router-dom"

export default function ManagerPageBox ({children}) {

    return (
        <>
        <div>
            <Link to={"/managementTeam/main"}>인천유나이티드 관리자 페이지</Link>
            <Link to={"/managementTeam/login"}>로그아웃</Link>
        </div>
        <div>
            <aside>
                <ul>
                    <li><Link>회원관리</Link></li>
                    <li>
                        선수단관리
                        <ul>
                            <li><Link>코칭/스태프</Link></li>
                            <li><Link>선수단</Link></li>
                        </ul>
                    </li>
                    <li>
                        게시판관리
                        <ul>
                            <li><Link>공지사항</Link></li>
                            <li><Link>구단뉴스</Link></li>
                            <li><Link>UTD기자단</Link></li>
                            <li><Link>VOD</Link></li>
                            <li><Link>갤러리</Link></li>
                            <li><Link>공식매거진</Link></li>
                            <li><Link>응원가</Link></li>
                            <li><Link>응원마당</Link></li>
                            <li><Link>이벤트</Link></li>
                            <li><Link>분실물</Link></li>
                        </ul>
                    </li>
                    <li><Link>블루마켓관리</Link></li>
                </ul>
            </aside>
            {children}
        </div>
        </>
    )
}