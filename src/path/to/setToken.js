export const setToken = (token) => {
    // 로컬 스토리지에 토큰 저장
    localStorage.setItem('token', token);
  };

//   function setToken(token){
//     return(
//       localStorage.setItem('token', token )
//   );
// }