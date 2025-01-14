import { useEffect } from "react"
import { useLocation,useNavigate } from "react-router-dom"

export default function Redirection ()  {
    const location = useLocation();
    const navigate = useNavigate();
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    const ACCESS_KEY = location.search.split('=')[1]
    console.log(ACCESS_KEY);
    useEffect(()=> {
        const kakaoLoginToBackend = async () => {
            try {
                const response = await fetch(`${backendUrl}/user/loginkakao`,{
                    method : 'POST',
                    headers : {
                        "Content-Type" : "application/json",
                    },
                    body : JSON.stringify({ACCESS_KEY})
                })
                const data = await response.json();
                console.log(data);
                if(response.ok){
                    localStorage.setItem('accessToken',data.accessToken);
                    localStorage.setItem('refreshToken',data.refreshToken);
                }else{
                    alert(data.message);
                }
            } catch (error) {
                alert(error);
            }
        }
        kakaoLoginToBackend();
    },[])

    return 
    <></>
}