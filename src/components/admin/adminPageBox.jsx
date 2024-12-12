import {Link, NavLink} from "react-router-dom"
import { useSelector } from "react-redux"

export default function AdminPageBox ({children}) {

    const loggedInUserName = useSelector(state => state.LoginLogout.userId);

    return (
        <>
        <div className="header">
            <Link to={"/admin/main"}>인천유나이티드 관리자 페이지</Link>
            {loggedInUserName} 관리자님
            <Link to={"/admin/login"}>로그아웃</Link>
        </div>
        <div>
            <aside className="tabMenu">
                <ul>
                    <li><NavLink to={'/admin/main'}>회원관리</NavLink></li>
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