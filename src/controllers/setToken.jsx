import { ActionLoginLogout , ActionClear } from "./Redux/setting.jsx";

export const checkToken = async (dispatch, backendUrl) => {
  const accessToken = localStorage.getItem('accessToken');
  if (!accessToken) {
    dispatch(ActionClear()); 
    return;
  }

  try {
    const response = await fetch(`${backendUrl}/user/checkingAccessToken`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(ActionLoginLogout(data.userId)); 
    } else {
      const refreshToken = localStorage.getItem('refreshToken');
      const retryResponse = await fetch(`${backendUrl}/user/checkingRefreshToken`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken }),
      });

      const data = await retryResponse.json();
      if (retryResponse.ok) {
        localStorage.setItem('accessToken', data.accessToken); 
        dispatch(ActionLoginLogout(data.userId)); 
      } else {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        dispatch(ActionClear());
      }
    }
  } catch (error) {
    console.error("Error occurred:", error);
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    dispatch(ActionClear()); // 예외 발생 시 로그아웃 처리
  }
};
