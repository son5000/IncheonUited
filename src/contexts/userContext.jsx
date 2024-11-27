
import React, { createContext, useState } from 'react';

// UserContext 생성
export const UserContext = createContext();

// UserProvider 컴포넌트
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);  // user 상태 (로그인 정보)
  
  // 로그인 함수
  const login = (userInfo) => {
    setUser(userInfo);  // 로그인 시 사용자 정보 저장
  };

  // 로그아웃 함수
  const logout = () => {
    setUser(null);  // 로그아웃 시 사용자 정보 초기화
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};