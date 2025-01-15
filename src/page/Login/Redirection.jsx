import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { useLocation,useNavigate } from "react-router-dom"
import { ActionLoginLogout } from "../../controllers/Redux/setting";

export default function Redirection ()  {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    const ACCESS_KEY = location.search.split('=')[1]

    useEffect(()=> {
        const kakaoLoginToBackend = async () => {
            
            try {
                const response = await fetch(`${BACKEND_URL}/user/kakaoLogin`,{
                    method : 'POST',
                    headers : {
                        "Content-Type" : "application/json",
                    },
                    body : JSON.stringify({ACCESS_KEY})
                })

                const data = await response.json();

                if(response.ok){

                        const response = await fetch(`${BACKEND_URL}/user/kakaoUserInfo`,{
                            method : 'POST',
                            headers : {
                                "Content-Type" : "application/json",
                            },
                            body : JSON.stringify({ accessToken : data.accessToken})
                        })

                        
                        const {accessToken, refreshToken , userId } = await response.json();

                        if(response.ok){
                            localStorage.setItem('accessToken',accessToken)
                            localStorage.setItem('refreshToken',refreshToken)
                            dispatch(ActionLoginLogout(userId));
                            alert(`환영합니다, ${userId} 님 :)`);
                            navigate('/')
                        } else {
                            alert('Failed to fetch user info');
                        }                         
                }else{
                    alert(data.message);
                }

            } catch (error) {
                alert(error);
            }
        }
        kakaoLoginToBackend();
    },[ACCESS_KEY,BACKEND_URL])


    return (

        <>
            <div className="loader"></div>
        </>
    )
}