import { persistReducer, persistStore } from "redux-persist";
import { createStore, combineReducers } from "redux";
import storage from "redux-persist/lib/storage"; // local storage 사용
import  persistedAuthReducer from "./reducers/AuthReducer"; 


// Redux store의 상태를 지속적으로 저장하고 관리하기 위한 설정 객체
const persistConfig = {
  key: "root", // 저장된 상태 객체에 대한 식별자
  storage: storage, // 저장소로 local storage 사용
};

// 루트 리듀서: 여러 개의 리듀서를 결합하여 Redux store의 상태를 관리
const rootReducer = combineReducers({
  Auth: persistedAuthReducer,
});

// persistReducer 함수를 사용하여 지속적인 상태 저장을 처리하는 새로운 리듀서를 생성
const persistedReducer = persistReducer(persistConfig, rootReducer);

// createStore 함수를 사용하여 Redux store를 생성
const store = createStore(
  persistedReducer, // persistReducer로 생성된 리듀서를 사용
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Redux DevTools 활성화
);

// persistStore 함수를 사용하여 Redux store의 상태를 지속적으로 저장
const persistor = persistStore(store);

export { store, persistor };