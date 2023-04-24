export const setToken = (accesstoken, refreshtoken) => {
    // 로컬 스토리지에 토큰 저장
    localStorage.setItem('accesstoken', accesstoken);
    localStorage.setItem('refreshtoken', refreshtoken);
  };

//export const 
//   function setToken(token){
//     return(
//       localStorage.setItem('token', token )
//   );
//}  
