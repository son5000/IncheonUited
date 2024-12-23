import {Link, NavLink, useNavigate} from "react-router-dom"
import { useSelector , useDispatch } from "react-redux"
import { ActionLoginLogout } from "../../controllers/Redux/setting.jsx"

export default function AdminPageBox ({children}) {

    const loggedInUserName = useSelector(state => state.LoginLogout.userId);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleLogout = () => {
        if(loggedInUserName){
          fetch('http://localhost:5000/admin/logout' , {
          method: 'POST',
          credentials:'include',
          }).then((response) => {
            if(response.ok){
            dispatch(ActionLoginLogout(''));
            alert('로그아웃 되었습니다.');
            navigate('/admin/login',{replace:true});
            
          }else{
            return response.json().then((data) => {
              throw new Error(data.error || '세션 상태를 확인할 수 없습니다.')
            })
          }
          }).catch((error) => {
            console.error(error.message);
            alert(error.message); 
          })
        } 
      }

    return (
        <>
        <div className="header">
            <Link to={"/admin/main"}>인천유나이티드 관리자 페이지</Link>
            {loggedInUserName} 관리자님
            <Link onClick={handleLogout}>로그아웃</Link>
        </div>
        <div>
            <aside className="tabMenu">
                <ul>
                    <li>
                      <NavLink to={'/admin/main'}>회원관리</NavLink>
                    </li>
                    <li>
                      <NavLink to={'/admin/player'}>선수단관리</NavLink>
                    </li>
                    <li>
                      <NavLink to={'/admin/post'}>게시판관리</NavLink>
                    </li>
                </ul>
            </aside>
            {children}
        </div>
        </>
    )
}