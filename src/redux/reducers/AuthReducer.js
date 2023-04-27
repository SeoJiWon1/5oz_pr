// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../../actions/authActionTypes";
// import { setToken } from '../../path/to/setToken'; // setToken 함수를 import


// 초기 상태
// const initialState = {
//   token: null,
//   error: null,
// };

// // 리듀서
// const AuthReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case LOGIN_SUCCESS:
//       // 로그인 성공 시 토큰을 저장하고 에러를 초기화
//       const { token } = action.payload; // 액션 페이로드에서 토큰 추출
//       setToken(token); // setToken 함수를 호출하여 토큰 설정
//       return {
//         ...state,
//         token: token, // 토큰을 상태에 저장
//         error: null,
//       };
//     case LOGIN_FAILURE:
//       // 로그인 실패 시 에러를 저장하고 토큰을 초기화
//       const { error } = action.payload; // 액션 페이로드에서 에러 추출
//       return {
//         ...state,
//         token: null,
//         error: error, // 에러를 상태에 저장
//       };
//     case LOGOUT:
//       // 로그아웃 시 토큰과 에러를 초기화
//       return {
//         ...state,
//         token: null, // 토큰을 초기화
//         error: null, // 에러를 초기화 
//       };
//     default:
//       return state;
//   }
// };

// // Redux-persist 설정 객체
// const persistConfig = {
//   key: "root", // 저장된 상태 객체에 대한 식별자
//   storage: storage, // 저장소로 local storage 사용
// };

// // persistReducer 함수를 사용하여 지속적인 상태 저장을 처리하는 새로운 리듀서를 생성
// const persistedAuthReducer = persistReducer(persistConfig, { Auth: AuthReducer }); // AuthReducer를 "Auth" 리듀서로 래핑

// export default persistedAuthReducer;
