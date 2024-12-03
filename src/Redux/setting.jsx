import { configureStore } from '@reduxjs/toolkit';

// 액션 타입 정의
export const LOGINLOGOUT = "LOGIN&LOGOUT";

// 액션 생성자
export const ActionLoginLogout = value => ({ type: LOGINLOGOUT, value });

// 초기 상태 정의
const initialState = {
    userId: ''
};

// 리듀서 정의
export const ReducerLoginLogut = (state = initialState, action) => {
    switch (action.type) {
        case LOGINLOGOUT: 
            return { ...state, userId: action.value };
        default:
            return state;
    }
};

// store 생성 (reducer는 객체 형식으로 전달)
const store = configureStore({
    reducer: {
        LoginLogout: ReducerLoginLogut  // 'login' 상태를 관리할 리듀서
    }
});

export default store;
