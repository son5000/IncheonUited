import { useState , useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
import { checkToken } from "../../controllers/setToken.jsx";

import Banner from "../Banner";
export default function WritePost (){
    const dispatch = useDispatch();
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    const navigate = useNavigate();
    const loggedInUserName = useSelector(state => state.LoginLogout.userId);
    const [postValue , setPostValue] = useState({
        title: '',
        content : ''
    })

    useEffect(() => {
        // 비동기 함수 호출을 위한 즉시 실행 함수 (IIFE)
        const verifyToken = async () => {
          await checkToken(dispatch, BACKEND_URL);
        };
    
        verifyToken(); // 토큰 확인 함수 실행
      }, [dispatch, BACKEND_URL]);

    const handleChange = (field,value) => {
        setPostValue({
            ...postValue,
            [field] : value,
            author : loggedInUserName,
        })
    }

    console.log(postValue);

    const handleSubmit =  async (e) => {

        if(!loggedInUserName){
            alert('로그인이 필요합니다.');
            navigate('/login')
            return null;
        }

        e.preventDefault();

        if(postValue.title === '' || postValue.content === ''){
            return alert('게시글의 제목 또는 내용을 확인해주세요.')
        }

        try {
           const res = await fetch(`${BACKEND_URL}/post/write` , {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(postValue),
            credentials: 'include', // 쿠키를 포함하여 요청을 보냄
           })
           
           const data = await res.json();

           if(res.ok){
            alert('게시글이 등록되었습니다.');
            navigate('/fanZone/cheeringGrounds');
           }else{
            alert(data.error)
           }
           
        }catch(error){
            alert('서버로부터 오류가 발생했습니다.')
        }
    }



    return (<>
    <Banner aniWidth={'100%'} />
        <section className="size1442 postWrite" >
            <h2 className="hiddenH2">게시글 작성하기</h2>
            <form onSubmit={(e)=> handleSubmit(e)} >
                <label htmlFor="postTitle">게시물 제목</label>
                <input onChange={(e) => handleChange('title',e.target.value)} value={postValue.title} id="postTitle" type="text" placeholder="제목을 입력하세요" />
                <label htmlFor="postContent">게시물 내용</label>
                <textarea onChange={(e) => handleChange('content', e.target.value)} value={postValue.content} id="postContent" placeholder="응원마당에 등록하고자 하는 게시물 내용을 입력하세요"></textarea>
                <strong>게시물 등록 주의사항</strong>
                <ul>
                    <li>- 본 게시판은 인천유나이티드 선수단과 구단에 대한 응원의 글과 건의사항을 올리는 곳입니다.</li>
                    <li>- 게시판에 욕설이나 비방글, 혹은 기타 게시판 성격에 맞지 않는 글은 관리자에 의해 임의 삭제될 수 있음을 알려드립니다.</li>
                    <li>- 게시물 내용에는 HTML, 프로그램 소스 혹은 첨부파일은 업로드 할 수 없음을 알려드립니다.</li>
                </ul>
                <button type="submit">게시물 등록하기</button>
            </form>
        </section>
    </>
    )
}